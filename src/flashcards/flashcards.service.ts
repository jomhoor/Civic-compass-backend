import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FlashcardsService {
  private readonly logger = new Logger(FlashcardsService.name);

  constructor(private prisma: PrismaService) {}

  /** Public: get completed deck badges for a user (icon + title only). */
  async getCompletedBadges(userId: string) {
    const decks = await this.prisma.flashcardDeck.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
      include: { _count: { select: { cards: true } } },
    });

    const progress = await this.prisma.flashcardProgress.groupBy({
      by: ['deckId'],
      where: { userId, status: 'MASTERED' },
      _count: { id: true },
    });
    const progressMap = new Map(progress.map((p) => [p.deckId, p._count.id]));

    return decks
      .filter((d) => d._count.cards > 0 && (progressMap.get(d.id) ?? 0) >= d._count.cards)
      .map((d) => ({
        code: d.code,
        icon: d.icon,
        titleFa: d.titleFa,
        titleEn: d.titleEn,
      }));
  }

  /** List all active decks with card counts and user progress summary. */
  async listDecks(userId?: string) {
    const decks = await this.prisma.flashcardDeck.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
      include: {
        _count: { select: { cards: true } },
      },
    });

    if (!userId) {
      return decks.map((d) => ({
        ...d,
        totalCards: d._count.cards,
        completedCards: 0,
        rewardClaimed: false,
      }));
    }

    // Fetch user progress per deck
    const progress = await this.prisma.flashcardProgress.groupBy({
      by: ['deckId'],
      where: { userId, status: 'MASTERED' },
      _count: { id: true },
    });
    const progressMap = new Map(progress.map((p) => [p.deckId, p._count.id]));

    const rewards = await this.prisma.flashcardReward.findMany({
      where: { userId },
      select: { deckId: true },
    });
    const rewardedDecks = new Set(rewards.map((r) => r.deckId));

    return decks.map((d) => ({
      ...d,
      totalCards: d._count.cards,
      completedCards: progressMap.get(d.id) ?? 0,
      rewardClaimed: rewardedDecks.has(d.id),
    }));
  }

  /** Get a single deck with all its cards. */
  async getDeck(deckCode: string) {
    const deck = await this.prisma.flashcardDeck.findUnique({
      where: { code: deckCode },
      include: {
        cards: { orderBy: { order: 'asc' } },
      },
    });
    if (!deck) throw new NotFoundException('Deck not found');
    return deck;
  }

  /** Get user's progress for a specific deck. */
  async getDeckProgress(userId: string, deckCode: string) {
    const deck = await this.prisma.flashcardDeck.findUnique({
      where: { code: deckCode },
    });
    if (!deck) throw new NotFoundException('Deck not found');

    const progress = await this.prisma.flashcardProgress.findMany({
      where: { userId, deckId: deck.id },
      include: { card: true },
    });

    const totalCards = await this.prisma.flashcard.count({
      where: { deckId: deck.id },
    });

    const mastered = progress.filter((p) => p.status === 'MASTERED').length;

    return {
      deckId: deck.id,
      deckCode: deck.code,
      totalCards,
      mastered,
      progress,
      completed: mastered >= totalCards && totalCards > 0,
    };
  }

  /** Record a card review (seen / correct / mastered). */
  async reviewCard(userId: string, cardId: string, status: string) {
    const card = await this.prisma.flashcard.findUnique({
      where: { id: cardId },
    });
    if (!card) throw new NotFoundException('Card not found');

    const now = new Date();
    const nextReview = this.calculateNextReview(status, now);

    const progress = await this.prisma.flashcardProgress.upsert({
      where: { userId_cardId: { userId, cardId } },
      create: {
        userId,
        cardId,
        deckId: card.deckId,
        status,
        reviewCount: 1,
        lastReview: now,
        nextReview,
      },
      update: {
        status,
        reviewCount: { increment: 1 },
        lastReview: now,
        nextReview,
      },
    });

    return progress;
  }

  /**
   * Check if user has completed a deck. If so, create reward record
   * and admin notification. Returns the reward if newly awarded.
   */
  async checkAndAwardCompletion(userId: string, deckCode: string) {
    const deck = await this.prisma.flashcardDeck.findUnique({
      where: { code: deckCode },
    });
    if (!deck) throw new NotFoundException('Deck not found');

    // Check for existing reward
    const existing = await this.prisma.flashcardReward.findUnique({
      where: { userId_deckId: { userId, deckId: deck.id } },
    });
    if (existing) {
      return { alreadyAwarded: true, reward: existing };
    }

    // Check if all cards mastered
    const totalCards = await this.prisma.flashcard.count({
      where: { deckId: deck.id },
    });
    const masteredCards = await this.prisma.flashcardProgress.count({
      where: { userId, deckId: deck.id, status: 'MASTERED' },
    });

    if (masteredCards < totalCards || totalCards === 0) {
      return { completed: false, mastered: masteredCards, total: totalCards };
    }

    // Award: create reward + admin notification in a transaction
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { walletAddress: true, displayName: true },
    });

    const [reward, _notification] = await this.prisma.$transaction([
      this.prisma.flashcardReward.create({
        data: {
          userId,
          deckId: deck.id,
          amount: deck.rewardUsd,
          usdValue: deck.rewardUsd,
        },
      }),
      this.prisma.adminNotification.create({
        data: {
          type: 'FLASHCARD_COMPLETION',
          title: `کاربر دسته «${deck.titleFa}» را تکمیل کرد`,
          message: `User ${user?.displayName ?? userId} completed deck "${deck.titleEn}". Wallet: ${user?.walletAddress ?? 'N/A'}. Reward: $${deck.rewardUsd} USDC equivalent in ETH.`,
          metadata: JSON.stringify({
            userId,
            deckId: deck.id,
            deckCode: deck.code,
            walletAddress: user?.walletAddress,
            rewardUsd: deck.rewardUsd,
          }),
        },
      }),
    ]);

    this.logger.log(
      `🏅 User ${userId} completed deck "${deck.code}" — reward recorded, admin notified`,
    );

    return { completed: true, reward };
  }

  /** Admin: list pending reward payouts. */
  async getPendingRewards() {
    return this.prisma.flashcardReward.findMany({
      where: { txHash: null },
      include: {
        user: { select: { id: true, walletAddress: true, displayName: true } },
        deck: { select: { code: true, titleEn: true, titleFa: true } },
      },
      orderBy: { awardedAt: 'asc' },
    });
  }

  /** Admin: mark a reward as paid (record tx hash). */
  async markRewardPaid(rewardId: string, txHash: string) {
    const reward = await this.prisma.flashcardReward.findUnique({
      where: { id: rewardId },
    });
    if (!reward) throw new NotFoundException('Reward not found');
    if (reward.txHash) throw new ConflictException('Reward already paid');

    return this.prisma.flashcardReward.update({
      where: { id: rewardId },
      data: { txHash },
    });
  }

  /** Admin: list unread notifications. */
  async getAdminNotifications(onlyUnread = true) {
    return this.prisma.adminNotification.findMany({
      where: onlyUnread ? { readAt: null } : {},
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  /** Admin: mark notification as read. */
  async markNotificationRead(notificationId: string) {
    return this.prisma.adminNotification.update({
      where: { id: notificationId },
      data: { readAt: new Date() },
    });
  }

  /** Simple spaced-repetition interval. */
  private calculateNextReview(status: string, now: Date): Date {
    const next = new Date(now);
    switch (status) {
      case 'SEEN':
        next.setHours(next.getHours() + 4);
        break;
      case 'LEARNING':
        next.setDate(next.getDate() + 1);
        break;
      case 'REVIEWING':
        next.setDate(next.getDate() + 3);
        break;
      case 'MASTERED':
        next.setDate(next.getDate() + 7);
        break;
      default:
        next.setHours(next.getHours() + 1);
    }
    return next;
  }
}
