/**
 * Seed script for UDHR flashcard deck.
 * Run: npx ts-node --esm prisma/seed-flashcards.ts
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Upsert UDHR deck
  const deck = await prisma.flashcardDeck.upsert({
    where: { code: 'UDHR' },
    update: {},
    create: {
      code: 'UDHR',
      titleFa: 'منشور جهانی حقوق بشر',
      titleEn: 'Universal Declaration of Human Rights',
      description: 'اعلامیه جهانی حقوق بشر — مصوب ۱۰ دسامبر ۱۹۴۸',
      sourceUrl: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights',
      icon: '🕊️',
      order: 1,
      rewardUsd: 1.0,
    },
  });

  const cards = [
    {
      type: 'CONCEPT',
      front: 'اعلامیه جهانی حقوق بشر در چه تاریخی و توسط چه نهادی تصویب شد؟',
      back: '۱۰ دسامبر ۱۹۴۸ (۱۹ آذر ۱۳۲۷) توسط مجمع عمومی سازمان ملل متحد در پاریس.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'CONCEPT',
      front: 'اعلامیه جهانی حقوق بشر چند ماده دارد؟',
      back: '۳۰ ماده.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ اعلامیه جهانی حقوق بشر چه اصلی را بیان می‌کند؟',
      back: 'تمام افراد بشر آزاد به دنیا می‌آیند و از لحاظ حیثیت و حقوق با هم برابرند. همگی دارای عقل و وجدان هستند و باید با یکدیگر با روحیه‌ی برادرانه رفتار کنند.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲ اعلامیه جهانی چه نوع تبعیضی را ممنوع می‌کند؟',
      back: 'هر کس بدون هیچ‌گونه تمایزی از حقوق و آزادی‌های مندرج در اعلامیه برخوردار است — بدون تبعیض از حیث نژاد، رنگ، جنس، زبان، مذهب، عقیده، خاستگاه ملی یا اجتماعی، ثروت، تولد یا هر وضعیت دیگر.',
      articleRef: 'Article 2',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳ اعلامیه جهانی چه حقوقی را تضمین می‌کند؟',
      back: 'هر فردی حق زندگی، آزادی و امنیت شخصی دارد.',
      articleRef: 'Article 3',
      difficulty: 'BEGINNER',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا بردگی تحت هر شرایطی ممنوع است؟',
      back: 'بله. ماده ۴: هیچ‌کس را نباید در بردگی یا بندگی نگاه داشت. بردگی و خرید و فروش بردگان به هر شکلی ممنوع است.',
      articleRef: 'Article 4',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۵ اعلامیه جهانی چه چیزی را ممنوع می‌کند؟',
      back: 'هیچ‌کس نباید مورد شکنجه یا مجازات یا رفتار بی‌رحمانه، غیرانسانی یا تحقیرآمیز قرار گیرد.',
      articleRef: 'Article 5',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۶ و ۷ اعلامیه جهانی چه حقوقی را بیان می‌کنند؟',
      back: 'ماده ۶: هر کس حق دارد شخصیت حقوقی‌اش در همه جا به رسمیت شناخته شود. ماده ۷: همه در برابر قانون مساوی‌اند و بدون هیچ تبعیضی حق دارند از حمایت یکسان قانون برخوردار شوند.',
      articleRef: 'Articles 6-7',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۹ اعلامیه جهانی چه عملی را ممنوع می‌کند؟',
      back: 'هیچ‌کس را نمی‌توان خودسرانه توقیف، بازداشت یا تبعید کرد.',
      articleRef: 'Article 9',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۰ اعلامیه جهانی چه حقی را تضمین می‌کند؟',
      back: 'هر کس حق دارد با مساوات کامل دعوایش به‌طور منصفانه و علنی در یک دادگاه مستقل و بی‌طرف رسیدگی شود.',
      articleRef: 'Article 10',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا هر متهمی تا زمان اثبات جرم بی‌گناه فرض می‌شود؟',
      back: 'بله. ماده ۱۱: هر کس متهم به ارتکاب جرمی شود، بی‌گناه محسوب می‌شود تا وقتی که تقصیرش به‌طور قانونی در یک دادرسی عمومی ثابت شود.',
      articleRef: 'Article 11',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۲ اعلامیه جهانی از چه حقی حفاظت می‌کند؟',
      back: 'حریم خصوصی. هیچ‌کس نباید در زندگی خصوصی، خانوادگی، مسکن یا مکاتبات خود مورد مداخله خودسرانه قرار گیرد.',
      articleRef: 'Article 12',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۳ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'آزادی عبور و مرور و انتخاب محل اقامت. هر کس حق دارد هر کشوری — از جمله کشور خود — را ترک کند و به کشور خود بازگردد.',
      articleRef: 'Article 13',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۴ اعلامیه جهانی درباره‌ی چه حقی صحبت می‌کند؟',
      back: 'حق پناهندگی. هر کس حق دارد از تعقیب به کشور دیگری پناه ببرد و از پناهندگی بهره‌مند شود.',
      articleRef: 'Article 14',
      difficulty: 'BEGINNER',
    },
    {
      type: 'MATCH',
      front: '«حق تابعیت» در کدام ماده‌ی اعلامیه جهانی بیان شده؟',
      back: 'ماده ۱۵: هر فردی حق دارد تابعیتی داشته باشد. هیچ‌کس را نمی‌توان خودسرانه از تابعیتش محروم کرد یا حق تغییر تابعیت را از او سلب نمود.',
      articleRef: 'Article 15',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۶ اعلامیه جهانی درباره‌ی چیست؟',
      back: 'حق ازدواج و تشکیل خانواده. زن و مرد بالغ بدون هیچ محدودیتی از حیث نژاد، ملیت یا مذهب حق ازدواج دارند. ازدواج فقط با رضایت آزادانه و کامل طرفین منعقد می‌شود.',
      articleRef: 'Article 16',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۷ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'حق مالکیت. هر کس حق مالکیت دارد — به‌تنهایی یا به صورت مشترک. هیچ‌کس را نمی‌توان خودسرانه از مالکیتش محروم کرد.',
      articleRef: 'Article 17',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۸ اعلامیه جهانی چه حقی را تضمین می‌کند؟',
      back: 'آزادی اندیشه، وجدان و مذهب — شامل حق تغییر مذهب و آزادی اظهار عقیده به‌تنهایی یا به‌صورت جمعی، در انظار عمومی یا خصوصی.',
      articleRef: 'Article 18',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۹ اعلامیه جهانی چه آزادی‌ای را تضمین می‌کند؟',
      back: 'آزادی عقیده و بیان — شامل حق داشتن عقیده بدون مداخله و حق جستجو، دریافت و انتشار اطلاعات و افکار از هر طریق و بدون ملاحظه‌ی مرزها.',
      articleRef: 'Article 19',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۰ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'آزادی اجتماعات و انجمن‌های مسالمت‌آمیز. هیچ‌کس را نمی‌توان مجبور به عضویت در یک انجمن کرد.',
      articleRef: 'Article 20',
      difficulty: 'BEGINNER',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا هر فردی حق شرکت در حکومت کشور خود را دارد؟',
      back: 'بله. ماده ۲۱: هر فردی حق دارد مستقیماً یا از طریق نمایندگان آزادانه انتخاب‌شده در حکومت کشور خود شرکت کند. اراده‌ی مردم اساس حاکمیت حکومت است.',
      articleRef: 'Article 21',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۲ اعلامیه جهانی چه حقی را مطرح می‌کند؟',
      back: 'حق تأمین اجتماعی. هر کس حق دارد از تأمین اجتماعی برخوردار شود و حقوق اقتصادی، اجتماعی و فرهنگی ضروری برای حیثیت و رشد شخصیتش تحقق یابد.',
      articleRef: 'Article 22',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۳ اعلامیه جهانی چه حقوقی را درباره‌ی کار بیان می‌کند؟',
      back: 'حق کار، انتخاب آزاد شغل، شرایط منصفانه و رضایت‌بخش، حمایت در برابر بیکاری، مزد مساوی برای کار مساوی، و حق تشکیل اتحادیه.',
      articleRef: 'Article 23',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۴ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'حق استراحت و فراغت — شامل محدودیت معقول ساعات کار و مرخصی ادواری با حقوق.',
      articleRef: 'Article 24',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۵ اعلامیه جهانی چه سطح زندگی‌ای را حق هر فرد می‌داند؟',
      back: 'سطح زندگی مناسب برای سلامت و رفاه — شامل خوراک، پوشاک، مسکن، مراقبت پزشکی و خدمات اجتماعی. مادران و کودکان حق مراقبت و کمک ویژه دارند.',
      articleRef: 'Article 25',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'CONCEPT',
      front: '«حق آموزش» در اعلامیه جهانی (ماده ۲۶) چه ویژگی‌هایی دارد؟',
      back: 'آموزش باید رایگان باشد — حداقل در مراحل ابتدایی. آموزش ابتدایی اجباری است. آموزش فنی و حرفه‌ای باید عمومی باشد. آموزش عالی باید بر اساس شایستگی در دسترس همگان باشد.',
      articleRef: 'Article 26',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۷ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'حق شرکت در زندگی فرهنگی جامعه، بهره‌مندی از هنرها و سهیم شدن در پیشرفت علمی. همچنین حمایت از منافع مادی و معنوی آثار علمی، ادبی و هنری.',
      articleRef: 'Article 27',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'CONCEPT',
      front: 'ماده ۲۸ اعلامیه جهانی چه خواسته‌ای را بیان می‌کند؟',
      back: 'هر کس حق دارد خواستار نظم اجتماعی و بین‌المللی‌ای باشد که در آن حقوق و آزادی‌های مذکور در اعلامیه تحقق پذیرد.',
      articleRef: 'Article 28',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۹ اعلامیه جهانی چه وظایفی را بیان می‌کند؟',
      back: 'هر فرد وظایفی در برابر جامعه دارد. محدودیت حقوق فقط به موجب قانون و صرفاً برای شناسایی حقوق دیگران و رعایت اخلاق، نظم عمومی و رفاه عمومی مجاز است.',
      articleRef: 'Article 29',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۰ (آخرین ماده) اعلامیه جهانی چه می‌گوید؟',
      back: 'هیچ‌یک از مقررات اعلامیه نباید به‌گونه‌ای تفسیر شود که حق انجام عمل یا فعالیتی را به دولت، گروه یا فردی بدهد که هدفش از بین بردن حقوق و آزادی‌های مندرج در اعلامیه باشد.',
      articleRef: 'Article 30',
      difficulty: 'ADVANCED',
    },
  ];

  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    await prisma.flashcard.upsert({
      where: {
        id: `udhr-card-${i + 1}`,
      },
      update: {
        front: c.front,
        back: c.back,
        type: c.type,
        articleRef: c.articleRef,
        difficulty: c.difficulty,
        order: i + 1,
      },
      create: {
        id: `udhr-card-${i + 1}`,
        deckId: deck.id,
        type: c.type,
        front: c.front,
        back: c.back,
        articleRef: c.articleRef,
        difficulty: c.difficulty,
        order: i + 1,
      },
    });
  }

  console.log(`✅ Seeded UDHR deck with ${cards.length} flashcards`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
