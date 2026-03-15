import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  /** Public: list all active decks (optionally with user progress). */
  @Get('decks')
  async listDecks(@Query('userId') userId?: string) {
    return this.flashcardsService.listDecks(userId);
  }

  /** Public: get completed deck badges for a user's profile. */
  @Get('badges/:userId')
  async getCompletedBadges(@Param('userId') userId: string) {
    return this.flashcardsService.getCompletedBadges(userId);
  }

  /** Public: get a single deck with all cards. */
  @Get('decks/:code')
  async getDeck(@Param('code') code: string) {
    return this.flashcardsService.getDeck(code);
  }

  /** Auth: get user's progress on a deck. */
  @UseGuards(JwtAuthGuard)
  @Get('decks/:code/progress')
  async getDeckProgress(@Req() req: any, @Param('code') code: string) {
    const userId = req.user.userId;
    return this.flashcardsService.getDeckProgress(userId, code);
  }

  /** Auth: review a card (update progress). */
  @UseGuards(JwtAuthGuard)
  @Post('review')
  async reviewCard(
    @Req() req: any,
    @Body() body: { cardId: string; status: string },
  ) {
    const userId = req.user.userId;
    return this.flashcardsService.reviewCard(userId, body.cardId, body.status);
  }

  /** Auth: check completion and award badge/reward. */
  @UseGuards(JwtAuthGuard)
  @Post('decks/:code/complete')
  async checkCompletion(@Req() req: any, @Param('code') code: string) {
    const userId = req.user.userId;
    return this.flashcardsService.checkAndAwardCompletion(userId, code);
  }

  // ── Admin Endpoints ─────────────────────────────────────────

  /** Admin: list pending (unpaid) rewards. */
  @UseGuards(JwtAuthGuard)
  @Get('admin/rewards/pending')
  async getPendingRewards() {
    return this.flashcardsService.getPendingRewards();
  }

  /** Admin: mark a reward as paid with tx hash. */
  @UseGuards(JwtAuthGuard)
  @Post('admin/rewards/:rewardId/pay')
  async markRewardPaid(
    @Param('rewardId') rewardId: string,
    @Body() body: { txHash: string },
  ) {
    return this.flashcardsService.markRewardPaid(rewardId, body.txHash);
  }

  /** Admin: list notifications (completion events). */
  @UseGuards(JwtAuthGuard)
  @Get('admin/notifications')
  async getNotifications(@Query('all') all?: string) {
    const onlyUnread = all !== 'true';
    return this.flashcardsService.getAdminNotifications(onlyUnread);
  }

  /** Admin: mark a notification as read. */
  @UseGuards(JwtAuthGuard)
  @Post('admin/notifications/:id/read')
  async markNotificationRead(@Param('id') id: string) {
    return this.flashcardsService.markNotificationRead(id);
  }
}
