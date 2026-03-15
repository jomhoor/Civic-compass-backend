/**
 * Seed script for ALL flashcard decks (10 remaining treaties + updates UDHR order).
 * Run: npx ts-node --esm prisma/seed-all-decks.ts
 *
 * Deck codes: ICESCR, ICCPR, CRC, CEDAW, CRPD, CAT, CPPCG, ICMW, ICPPED, YP
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CardData {
  type: string;
  front: string;
  back: string;
  articleRef: string | null;
  difficulty: string;
}

interface DeckData {
  code: string;
  titleFa: string;
  titleEn: string;
  description: string;
  sourceUrl: string;
  icon: string;
  order: number;
  rewardUsd: number;
  cards: CardData[];
}

// ─── ICESCR ────────────────────────────────────────────────────────────────────
const icescr: DeckData = {
  code: 'ICESCR',
  titleFa: 'میثاق بین‌المللی حقوق اقتصادی، اجتماعی و فرهنگی',
  titleEn: 'International Covenant on Economic, Social and Cultural Rights',
  description: 'میثاق بین‌المللی حقوق اقتصادی، اجتماعی و فرهنگی — مصوب ۱۶ دسامبر ۱۹۶۶',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-economic-social-and-cultural-rights',
  icon: '⚖️',
  order: 2,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'میثاق بین‌المللی حقوق اقتصادی، اجتماعی و فرهنگی (ICESCR) در چه تاریخی تصویب شد؟',
      back: '۱۶ دسامبر ۱۹۶۶ توسط مجمع عمومی سازمان ملل متحد. لازم‌الاجرا شد در ۳ ژانویه ۱۹۷۶.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'CONCEPT',
      front: 'تفاوت ICESCR با ICCPR چیست؟',
      back: 'ICESCR حقوق اقتصادی، اجتماعی و فرهنگی (مثل کار، آموزش، بهداشت) را پوشش می‌دهد، در حالی که ICCPR حقوق مدنی و سیاسی (مثل آزادی بیان، دادرسی عادلانه) را تضمین می‌کند.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ ICESCR چه حقی را بیان می‌کند؟',
      back: 'حق تعیین سرنوشت. همه‌ی مردم حق تعیین سرنوشت دارند و به موجب آن آزادانه وضعیت سیاسی خود را تعیین و توسعه‌ی اقتصادی، اجتماعی و فرهنگی خود را دنبال می‌کنند.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۶ ICESCR چه حقی را تضمین می‌کند؟',
      back: 'حق کار — شامل حق هر فرد برای تأمین معاش از طریق کاری که آزادانه انتخاب یا پذیرفته می‌کند. دولت‌ها باید اقدامات لازم برای تحقق کامل این حق را انجام دهند.',
      articleRef: 'Article 6',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۷ ICESCR چه شرایطی را برای کار عادلانه تعیین می‌کند؟',
      back: 'شرایط کار عادلانه و مطلوب — شامل: مزد منصفانه و مساوی برای کار مساوی، شرایط ایمن و بهداشتی، فرصت برابر ارتقا، استراحت، فراغت، محدودیت ساعات کار و مرخصی با حقوق.',
      articleRef: 'Article 7',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۸ ICESCR چه حقی را درباره اتحادیه‌ها بیان می‌کند؟',
      back: 'حق تشکیل و عضویت در اتحادیه‌های صنفی، حق اعتصاب طبق قوانین هر کشور، و حق اتحادیه‌ها برای فعالیت آزادانه.',
      articleRef: 'Article 8',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۹ ICESCR چه حقی را تضمین می‌کند؟',
      back: 'حق تأمین اجتماعی — شامل بیمه‌ی اجتماعی.',
      articleRef: 'Article 9',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۰ ICESCR چه حمایت‌هایی از خانواده پیش‌بینی می‌کند؟',
      back: 'حمایت و کمک گسترده به خانواده، حمایت ویژه از مادران قبل و بعد از زایمان (شامل مرخصی با حقوق)، و حمایت ویژه از کودکان و نوجوانان در برابر بهره‌کشی.',
      articleRef: 'Article 10',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۱ ICESCR چه سطح زندگی‌ای را حق هر فرد می‌داند؟',
      back: 'حق سطح زندگی مناسب برای خود و خانواده — شامل خوراک، پوشاک و مسکن کافی و بهبود مستمر شرایط زندگی. همچنین حق بنیادین رهایی از گرسنگی.',
      articleRef: 'Article 11',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۲ ICESCR چه حقی درباره بهداشت بیان می‌کند؟',
      back: 'حق بالاترین سطح قابل دستیابی سلامت جسمی و روانی. دولت‌ها باید اقداماتی برای کاهش مرده‌زایی و مرگ‌ومیر نوزادان، بهبود بهداشت محیط و صنعتی، و پیشگیری از بیماری‌ها انجام دهند.',
      articleRef: 'Article 12',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۳ ICESCR چه حقی درباره آموزش بیان می‌کند؟',
      back: 'حق آموزش. آموزش ابتدایی باید اجباری و رایگان باشد. آموزش متوسطه و عالی باید به‌تدریج رایگان شود. آموزش باید در جهت رشد کامل شخصیت انسان و تقویت احترام به حقوق بشر باشد.',
      articleRef: 'Article 13',
      difficulty: 'BEGINNER',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا طبق ICESCR، والدین حق انتخاب مدرسه برای فرزندان خود را دارند؟',
      back: 'بله. ماده ۱۳(۳): والدین آزادند مدارسی غیر از مدارس دولتی برای فرزندان خود انتخاب کنند، مشروط بر رعایت حداقل استانداردهای آموزشی.',
      articleRef: 'Article 13',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۵ ICESCR چه حقوق فرهنگی‌ای را بیان می‌کند؟',
      back: 'حق شرکت در زندگی فرهنگی، بهره‌مندی از پیشرفت‌های علمی، و حمایت از منافع مادی و معنوی ناشی از هر اثر علمی، ادبی یا هنری.',
      articleRef: 'Article 15',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا ICESCR دولت‌ها را ملزم به اجرای فوری همه حقوق می‌کند؟',
      back: 'خیر. ماده ۲: دولت‌ها متعهدند با استفاده از حداکثر منابع موجود، به‌تدریج و با تمام ابزارهای مناسب، تحقق کامل حقوق شناخته‌شده را تضمین کنند (اصل تحقق تدریجی).',
      articleRef: 'Article 2',
      difficulty: 'ADVANCED',
    },
    {
      type: 'MATCH',
      front: '«حق رهایی از گرسنگی» در کدام ماده ICESCR بیان شده؟',
      back: 'ماده ۱۱(۲). این حق به‌عنوان یک حق بنیادین شناخته شده و دولت‌ها باید برنامه‌های اصلاح کشاورزی و توزیع عادلانه مواد غذایی جهانی را اجرا کنند.',
      articleRef: 'Article 11',
      difficulty: 'ADVANCED',
    },
  ],
};

// ─── ICCPR ─────────────────────────────────────────────────────────────────────
const iccpr: DeckData = {
  code: 'ICCPR',
  titleFa: 'میثاق بین‌المللی حقوق مدنی و سیاسی',
  titleEn: 'International Covenant on Civil and Political Rights',
  description: 'میثاق بین‌المللی حقوق مدنی و سیاسی — مصوب ۱۶ دسامبر ۱۹۶۶',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights',
  icon: '🗳️',
  order: 3,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'ICCPR در چه تاریخی تصویب و لازم‌الاجرا شد؟',
      back: 'تصویب: ۱۶ دسامبر ۱۹۶۶ توسط مجمع عمومی سازمان ملل. لازم‌الاجرا: ۲۳ مارس ۱۹۷۶.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۶ ICCPR چه حقی را بیان می‌کند؟',
      back: 'حق حیات. هر انسانی حق ذاتی حیات دارد. این حق باید به موجب قانون حمایت شود. هیچ‌کس نباید خودسرانه از حیات محروم شود.',
      articleRef: 'Article 6',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۷ ICCPR چه رفتارهایی را ممنوع می‌کند؟',
      back: 'شکنجه یا رفتار یا مجازات بی‌رحمانه، غیرانسانی یا تحقیرآمیز. همچنین: هیچ‌کس نباید بدون رضایت آزاد تحت آزمایش‌های پزشکی یا علمی قرار گیرد.',
      articleRef: 'Article 7',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۸ ICCPR چه ممنوعیت‌هایی ایجاد می‌کند؟',
      back: 'ممنوعیت بردگی و بندگی. هیچ‌کس نباید در بردگی نگهداری شود و تجارت برده به هر شکلی ممنوع است. هیچ‌کس نباید به کار اجباری وادار شود.',
      articleRef: 'Article 8',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۹ ICCPR چه حقی را تضمین می‌کند؟',
      back: 'حق آزادی و امنیت شخصی. هیچ‌کس نباید خودسرانه دستگیر یا بازداشت شود. هر بازداشت‌شده‌ای حق دارد از دلایل بازداشت مطلع شود و پرونده‌اش سریعاً توسط قاضی بررسی شود.',
      articleRef: 'Article 9',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۴ ICCPR چه اصولی را برای دادرسی تعیین می‌کند؟',
      back: 'همه در برابر دادگاه‌ها برابرند. هر متهمی حق دادرسی عادلانه و علنی در دادگاه مستقل و بی‌طرف، اصل برائت، حق وکیل، حق بررسی شهود، و ممنوعیت محاکمه مجدد را دارد.',
      articleRef: 'Article 14',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۷ ICCPR چه حقی را حمایت می‌کند؟',
      back: 'حریم خصوصی. هیچ‌کس نباید در زندگی خصوصی، خانواده، مسکن یا مکاتبات خود مورد مداخله خودسرانه قرار گیرد. هر فرد حق حمایت قانونی در برابر چنین مداخلاتی را دارد.',
      articleRef: 'Article 17',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۸ ICCPR چه آزادی‌ای را تضمین می‌کند؟',
      back: 'آزادی اندیشه، وجدان و مذهب — شامل آزادی داشتن یا تغییر مذهب و آزادی ابراز آن به‌صورت فردی یا جمعی، عمومی یا خصوصی.',
      articleRef: 'Article 18',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۹ ICCPR چه حقی را بیان می‌کند؟',
      back: 'حق آزادی بیان — شامل آزادی جستجو، دریافت و انتشار اطلاعات و اندیشه‌ها. این حق فقط برای احترام به حقوق دیگران یا حفاظت از امنیت ملی، نظم عمومی یا اخلاق قابل محدودیت است.',
      articleRef: 'Article 19',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۰ ICCPR چه نوع تبلیغاتی را ممنوع می‌کند؟',
      back: 'هرگونه تبلیغات جنگ ممنوع است. هرگونه ترویج نفرت ملی، نژادی یا مذهبی که برانگیزنده تبعیض، خصومت یا خشونت باشد به موجب قانون ممنوع است.',
      articleRef: 'Article 20',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۱ ICCPR چه حقی را تضمین می‌کند؟',
      back: 'حق تجمع مسالمت‌آمیز. این حق فقط طبق قانون و برای حفاظت از امنیت ملی، نظم عمومی، بهداشت، اخلاق یا حقوق دیگران محدود می‌شود.',
      articleRef: 'Article 21',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۵ ICCPR چه حقوق سیاسی‌ای را تضمین می‌کند؟',
      back: 'حق شرکت در امور عمومی، حق رأی و انتخاب شدن در انتخابات آزاد و ادواری با رأی مخفی، و حق دسترسی به خدمات عمومی بر اساس برابری.',
      articleRef: 'Article 25',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۶ ICCPR چه اصلی را بیان می‌کند؟',
      back: 'برابری در برابر قانون و عدم تبعیض. قانون باید حمایت مؤثر و برابر در برابر هرگونه تبعیض از جمله نژاد، رنگ، جنس، زبان، مذهب و... را تضمین کند.',
      articleRef: 'Article 26',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۷ ICCPR چه حقی برای اقلیت‌ها تضمین می‌کند؟',
      back: 'اقلیت‌های قومی، مذهبی یا زبانی حق دارند با دیگر اعضای گروه خود از فرهنگ خود بهره‌مند شوند، مذهب خود را اعمال کنند و از زبان خود استفاده کنند.',
      articleRef: 'Article 27',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا طبق ماده ۴ ICCPR، دولت‌ها می‌توانند در شرایط اضطراری همه حقوق را تعلیق کنند؟',
      back: 'خیر. برخی حقوق غیرقابل تعلیق هستند — از جمله: حق حیات (ماده ۶)، ممنوعیت شکنجه (ماده ۷)، ممنوعیت بردگی (ماده ۸)، آزادی اندیشه و مذهب (ماده ۱۸).',
      articleRef: 'Article 4',
      difficulty: 'ADVANCED',
    },
  ],
};

// ─── CRC ───────────────────────────────────────────────────────────────────────
const crc: DeckData = {
  code: 'CRC',
  titleFa: 'کنوانسیون حقوق کودک',
  titleEn: 'Convention on the Rights of the Child',
  description: 'کنوانسیون حقوق کودک — مصوب ۲۰ نوامبر ۱۹۸۹',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child',
  icon: '👶',
  order: 4,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'کنوانسیون حقوق کودک (CRC) در چه تاریخی تصویب شد و چند کشور عضو دارد؟',
      back: '۲۰ نوامبر ۱۹۸۹ توسط مجمع عمومی سازمان ملل. با ۱۹۶ کشور عضو، پرطرفدارترین معاهده حقوق بشری در تاریخ است. تنها کشوری که تصویب نکرده: آمریکا.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ CRC «کودک» را چگونه تعریف می‌کند؟',
      back: 'هر انسانی زیر ۱۸ سال سن، مگر آنکه طبق قانون قابل اعمال، سن بلوغ زودتر تعیین شده باشد.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲ CRC چه اصلی را بیان می‌کند؟',
      back: 'اصل عدم تبعیض — حقوق هر کودک بدون تبعیض از حیث نژاد، رنگ، جنس، زبان، مذهب، عقاید، خاستگاه، معلولیت، تولد یا وضعیت دیگر کودک یا والدین تضمین می‌شود.',
      articleRef: 'Article 2',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳ CRC چه اصل کلیدی‌ای را مقرر می‌کند؟',
      back: 'اصل «منافع عالیه کودک» — در تمام تصمیمات مربوط به کودکان، منافع عالیه کودک باید مورد توجه اساسی قرار گیرد.',
      articleRef: 'Article 3',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۶ CRC چه حقی را تضمین می‌کند؟',
      back: 'حق ذاتی حیات. دولت‌ها باید تا حد امکان بقا و رشد کودک را تضمین کنند.',
      articleRef: 'Article 6',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۲ CRC چه حق مهمی به کودک می‌دهد؟',
      back: 'حق اظهار نظر. کودکی که قادر به شکل‌دهی نظرات خود باشد، حق دارد آزادانه نظراتش را در تمام موضوعات مربوط به خود بیان کند و نظراتش متناسب با سن و بلوغ مورد توجه قرار گیرد.',
      articleRef: 'Article 12',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۹ CRC از کودکان در برابر چه رفتارهایی محافظت می‌کند؟',
      back: 'هرگونه خشونت جسمی یا روانی، آسیب، سوءاستفاده، بی‌توجهی، بدرفتاری یا بهره‌کشی — از جمله سوءاستفاده جنسی — در حالی که تحت مراقبت والدین یا سرپرست هستند.',
      articleRef: 'Article 19',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۴ CRC چه حقی درباره بهداشت کودک بیان می‌کند؟',
      back: 'حق بالاترین سطح قابل دستیابی سلامت و دسترسی به خدمات بهداشتی و درمانی. دولت‌ها باید مرگ‌ومیر نوزادان را کاهش دهند و از تغذیه مناسب کودکان اطمینان حاصل کنند.',
      articleRef: 'Article 24',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۸ CRC چه حقی درباره آموزش بیان می‌کند؟',
      back: 'حق آموزش. آموزش ابتدایی اجباری و رایگان. آموزش متوسطه و عالی باید در دسترس باشد. انضباط مدرسه باید با حفظ کرامت کودک سازگار باشد.',
      articleRef: 'Article 28',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۱ CRC چه حقی را برای کودکان تضمین می‌کند؟',
      back: 'حق تفریح، بازی و استراحت — و شرکت آزادانه در زندگی فرهنگی و هنری.',
      articleRef: 'Article 31',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۲ CRC از کودکان در برابر چه چیزی حمایت می‌کند؟',
      back: 'بهره‌کشی اقتصادی و کار کودک. دولت‌ها باید حداقل سن استخدام، ساعات و شرایط کار مناسب را تعیین و مجازات مؤثری در نظر بگیرند.',
      articleRef: 'Article 32',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۴ CRC چه حمایتی ارائه می‌دهد؟',
      back: 'حمایت از کودکان در برابر هر شکلی از استثمار و سوءاستفاده جنسی.',
      articleRef: 'Article 34',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۷ CRC چه ممنوعیت‌هایی درباره بازداشت کودکان ایجاد می‌کند؟',
      back: 'ممنوعیت شکنجه و مجازات بی‌رحمانه. ممنوعیت حبس ابد بدون امکان آزادی مشروط. بازداشت کودک فقط به عنوان آخرین راه‌حل و برای کوتاه‌ترین مدت مناسب.',
      articleRef: 'Article 37',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۸ CRC چه الزامی درباره کودکان در مخاصمات مسلحانه دارد؟',
      back: 'دولت‌ها باید تضمین کنند افراد زیر ۱۵ سال مستقیماً در جنگ شرکت نکنند و به عضویت نیروهای مسلح درنیایند.',
      articleRef: 'Article 38',
      difficulty: 'ADVANCED',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا طبق CRC، کودکان حق جدایی از والدین خود را دارند؟',
      back: 'خیر، برعکس. ماده ۹: کودک نباید بر خلاف میلش از والدین جدا شود، مگر آنکه مقامات صلاحیتدار تشخیص دهند جدایی به نفع کودک است (مثلاً در موارد سوءاستفاده).',
      articleRef: 'Article 9',
      difficulty: 'INTERMEDIATE',
    },
  ],
};

// ─── CEDAW ─────────────────────────────────────────────────────────────────────
const cedaw: DeckData = {
  code: 'CEDAW',
  titleFa: 'کنوانسیون رفع تبعیض علیه زنان',
  titleEn: 'Convention on the Elimination of All Forms of Discrimination against Women',
  description: 'کنوانسیون رفع کلیه اشکال تبعیض علیه زنان — مصوب ۱۸ دسامبر ۱۹۷۹',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-elimination-all-forms-discrimination-against-women',
  icon: '♀️',
  order: 5,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'CEDAW در چه تاریخی تصویب شد و چرا «منشور حقوق زنان» نامیده می‌شود؟',
      back: '۱۸ دسامبر ۱۹۷۹ توسط مجمع عمومی سازمان ملل. لازم‌الاجرا: ۳ سپتامبر ۱۹۸۱. به دلیل پوشش جامع حقوق زنان در حوزه‌های سیاسی، اقتصادی، اجتماعی و فرهنگی، «منشور حقوق زنان» نامیده می‌شود.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ CEDAW «تبعیض علیه زنان» را چگونه تعریف می‌کند؟',
      back: 'هرگونه تمایز، استثنا یا محدودیت بر اساس جنسیت که اثر یا هدف آن تضعیف یا نقض شناسایی، بهره‌مندی یا اعمال حقوق بشر و آزادی‌های اساسی زنان باشد.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲ CEDAW دولت‌ها را به چه اقداماتی ملزم می‌کند؟',
      back: 'محکوم کردن تبعیض و اتخاذ سیاست‌های رفع تبعیض: گنجاندن اصل برابری در قانون اساسی، وضع قوانین ضدتبعیض، لغو قوانین تبعیض‌آمیز و تضمین حمایت مؤثر حقوقی.',
      articleRef: 'Article 2',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا CEDAW «اقدامات موقت ویژه» (تبعیض مثبت) به نفع زنان را مجاز می‌داند؟',
      back: 'بله. ماده ۴: اتخاذ اقدامات موقت ویژه با هدف تسریع برابری واقعی زنان و مردان، تبعیض محسوب نمی‌شود و باید پس از تحقق برابری متوقف شوند.',
      articleRef: 'Article 4',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۵ CEDAW درباره الگوهای فرهنگی چه می‌گوید؟',
      back: 'دولت‌ها باید برای تغییر الگوهای اجتماعی و فرهنگی رفتاری زنان و مردان اقدام کنند — به‌ویژه حذف تعصبات و رسوم مبتنی بر فرودستی یا برتری هر یک از دو جنس.',
      articleRef: 'Article 5',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۷ CEDAW چه حقوق سیاسی‌ای را برای زنان تضمین می‌کند؟',
      back: 'حق رأی دادن، حق نامزد شدن در انتخابات، حق شرکت در تدوین سیاست‌های دولتی و حق مشارکت در سازمان‌های غیردولتی.',
      articleRef: 'Article 7',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۰ CEDAW چه حقی درباره آموزش زنان بیان می‌کند؟',
      back: 'حقوق برابر در آموزش: دسترسی یکسان به مراکز آموزشی، برنامه‌ها و امتحانات، حذف کلیشه‌های جنسیتی از کتاب‌های درسی، و کاهش نرخ ترک تحصیل زنان.',
      articleRef: 'Article 10',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۱ CEDAW چه حقوقی درباره اشتغال زنان بیان می‌کند؟',
      back: 'حق کار برابر، مزد مساوی برای کار مساوی، ممنوعیت اخراج به دلیل بارداری، حق مرخصی زایمان با حقوق و ایجاد تسهیلات مراقبت از کودک.',
      articleRef: 'Article 11',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۲ CEDAW چه حقی درباره بهداشت بیان می‌کند؟',
      back: 'دسترسی برابر به خدمات بهداشتی و درمانی، از جمله خدمات مربوط به تنظیم خانواده. تضمین خدمات مناسب در دوران بارداری، زایمان و پس از زایمان.',
      articleRef: 'Article 12',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۴ CEDAW به چه گروه خاصی از زنان توجه دارد؟',
      back: 'زنان روستایی. دولت‌ها باید مشکلات خاص آن‌ها را در نظر بگیرند و دسترسی‌شان به آموزش، بهداشت، تسهیلات اعتباری و خدمات اجتماعی را تضمین کنند.',
      articleRef: 'Article 14',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۵ CEDAW چه حقی درباره اهلیت حقوقی زنان بیان می‌کند؟',
      back: 'زنان اهلیت حقوقی برابر با مردان دارند — شامل حق انعقاد قرارداد، مدیریت اموال و رفتار برابر در دادگاه. هرگونه قرارداد یا سند محدودکننده اهلیت حقوقی زنان باطل است.',
      articleRef: 'Article 15',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۶ CEDAW درباره ازدواج و خانواده چه می‌گوید؟',
      back: 'حقوق برابر زن و مرد در ازدواج و طلاق: حق انتخاب آزادانه همسر، حقوق و مسئولیت‌های یکسان والدین، حقوق برابر مالکیتی. ممنوعیت نامزدی و ازدواج کودکان.',
      articleRef: 'Article 16',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۶ CEDAW دولت‌ها را ملزم به مقابله با چه پدیده‌ای می‌کند؟',
      back: 'قاچاق زنان و بهره‌کشی از فحشا. دولت‌ها باید اقدامات مقتضی، از جمله وضع قوانین، برای مقابله با هر شکلی از قاچاق و بهره‌کشی از زنان اتخاذ کنند.',
      articleRef: 'Article 6',
      difficulty: 'INTERMEDIATE',
    },
  ],
};

// ─── CRPD ──────────────────────────────────────────────────────────────────────
const crpd: DeckData = {
  code: 'CRPD',
  titleFa: 'کنوانسیون حقوق افراد دارای معلولیت',
  titleEn: 'Convention on the Rights of Persons with Disabilities',
  description: 'کنوانسیون حقوق افراد دارای معلولیت — مصوب ۱۳ دسامبر ۲۰۰۶',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities',
  icon: '♿',
  order: 6,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'CRPD در چه تاریخی تصویب شد و هدف آن چیست؟',
      back: '۱۳ دسامبر ۲۰۰۶ توسط مجمع عمومی سازمان ملل. هدف: ارتقا، حمایت و تضمین بهره‌مندی کامل و برابر افراد دارای معلولیت از تمام حقوق بشر و آزادی‌های اساسی.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲ CRPD چه مفاهیم کلیدی‌ای را تعریف می‌کند؟',
      back: 'تعریف «ارتباطات» (شامل زبان اشاره، بریل)، «زبان» (شامل زبان‌های اشاره)، «تبعیض بر اساس معلولیت»، «انطباق معقول» و «طراحی فراگیر».',
      articleRef: 'Article 2',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۹ CRPD چه اصلی را بیان می‌کند؟',
      back: 'دسترس‌پذیری (Accessibility). دولت‌ها باید اقدامات لازم را برای دسترسی برابر افراد دارای معلولیت به محیط فیزیکی، حمل‌ونقل، اطلاعات و فناوری انجام دهند.',
      articleRef: 'Article 9',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۲ CRPD چه حقی را تضمین می‌کند؟',
      back: 'شناسایی برابر در برابر قانون. افراد دارای معلولیت در همه جا اهلیت حقوقی برابر دارند و دولت‌ها باید حمایت لازم برای اعمال این اهلیت را فراهم کنند.',
      articleRef: 'Article 12',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۹ CRPD چه حقی درباره زندگی مستقل بیان می‌کند؟',
      back: 'حق زندگی مستقل و مشارکت در جامعه — شامل انتخاب محل زندگی، دسترسی به خدمات حمایتی در منزل و دسترسی به خدمات و تسهیلات عمومی.',
      articleRef: 'Article 19',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۴ CRPD چه حقی درباره آموزش بیان می‌کند؟',
      back: 'حق آموزش فراگیر. سیستم آموزشی باید در تمام سطوح فراگیر باشد و «انطباق معقول» فراهم شود. افراد دارای معلولیت نباید از سیستم آموزشی عمومی حذف شوند.',
      articleRef: 'Article 24',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۵ CRPD چه حقی درباره بهداشت بیان می‌کند؟',
      back: 'حق بالاترین سطح قابل دستیابی سلامت بدون تبعیض. دولت‌ها باید خدمات بهداشتی رایگان یا ارزان، از جمله خدمات توان‌بخشی، ارائه دهند.',
      articleRef: 'Article 25',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۷ CRPD چه حقی درباره اشتغال بیان می‌کند؟',
      back: 'حق کار بر اساس برابری — شامل: ممنوعیت تبعیض در استخدام، شرایط کار عادلانه، فرصت‌های برابر و محیط کار دسترس‌پذیر. حمایت از اشتغال در بازار آزاد.',
      articleRef: 'Article 27',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۹ CRPD چه حقوق سیاسی‌ای را تضمین می‌کند؟',
      back: 'مشارکت در زندگی سیاسی و عمومی — شامل حق رأی و انتخاب شدن، دسترسی به فرایندهای رأی‌گیری و تسهیلات انتخاباتی مناسب.',
      articleRef: 'Article 29',
      difficulty: 'ADVANCED',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا طبق CRPD، «انطباق معقول» به معنای ایجاد بار نامتناسب بر نهادها نیست؟',
      back: 'بله. ماده ۲: «انطباق معقول» به معنای تغییرات و تنظیمات لازم و مناسب است که بار نامتناسب یا بی‌مورد تحمیل نمی‌کند و در موارد خاص تضمین بهره‌مندی برابر از حقوق را فراهم می‌سازد.',
      articleRef: 'Article 2',
      difficulty: 'ADVANCED',
    },
    {
      type: 'CONCEPT',
      front: 'CRPD چه تغییر پارادایمی در رویکرد به معلولیت ایجاد کرد؟',
      back: 'تغییر از «مدل پزشکی» (معلولیت به‌عنوان نقص فردی) به «مدل اجتماعی» (معلولیت ناشی از موانع محیطی و نگرشی). اصل: جامعه باید خود را با نیازهای افراد تطبیق دهد.',
      articleRef: null,
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۰ CRPD چه حقوق فرهنگی‌ای را برای افراد دارای معلولیت تضمین می‌کند؟',
      back: 'مشارکت در زندگی فرهنگی، تفریح و ورزش — شامل دسترسی به مواد فرهنگی، رسانه‌ها و رویدادهای ورزشی در قالب‌های دسترس‌پذیر.',
      articleRef: 'Article 30',
      difficulty: 'INTERMEDIATE',
    },
  ],
};

// ─── CAT ───────────────────────────────────────────────────────────────────────
const cat: DeckData = {
  code: 'CAT',
  titleFa: 'کنوانسیون منع شکنجه',
  titleEn: 'Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment',
  description: 'کنوانسیون منع شکنجه و مجازات یا رفتار بی‌رحمانه، غیرانسانی یا تحقیرآمیز — مصوب ۱۰ دسامبر ۱۹۸۴',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-against-torture-and-other-cruel-inhuman-or-degrading',
  icon: '🚫',
  order: 7,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'CAT در چه تاریخی تصویب شد؟',
      back: '۱۰ دسامبر ۱۹۸۴ توسط مجمع عمومی سازمان ملل متحد. لازم‌الاجرا: ۲۶ ژوئن ۱۹۸۷.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ CAT «شکنجه» را چگونه تعریف می‌کند؟',
      back: 'هر عملی که از آن عمداً درد یا رنج شدید جسمی یا روانی به شخصی وارد شود، با اهدافی مانند کسب اطلاعات، اعتراف‌گیری، مجازات یا ارعاب — توسط مقام رسمی یا با موافقت او.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا شکنجه تحت هر شرایطی — حتی جنگ یا وضعیت اضطراری — ممنوع است؟',
      back: 'بله. ماده ۲: هیچ شرایط استثنایی — اعم از جنگ، بی‌ثباتی سیاسی یا هر وضعیت اضطراری دیگر — نمی‌تواند توجیه‌کننده شکنجه باشد. هیچ دستوری از مقام مافوق نیز مجوز شکنجه نیست.',
      articleRef: 'Article 2',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳ CAT اصل «عدم بازگردانی» (Non-refoulement) را چگونه بیان می‌کند؟',
      back: 'هیچ دولتی نباید شخصی را به کشوری اخراج، بازگرداند یا مسترد کند که دلایل اساسی برای باور به خطر شکنجه وجود داشته باشد.',
      articleRef: 'Article 3',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۴ CAT دولت‌ها را به چه اقدامی ملزم می‌کند؟',
      back: 'جرم‌انگاری شکنجه. هر دولت باید تضمین کند که تمام اعمال شکنجه، اقدام به شکنجه و همدستی در شکنجه، جرائم کیفری با مجازات متناسب هستند.',
      articleRef: 'Article 4',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۰ CAT چه الزامی درباره آموزش ایجاد می‌کند؟',
      back: 'آموزش: مأموران اجرای قانون، پزشکان، کارکنان نظامی و هر شخص دست‌اندرکار بازداشت یا مراقبت از بازداشت‌شدگان باید درباره ممنوعیت شکنجه آموزش ببینند.',
      articleRef: 'Article 10',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۱ CAT دولت‌ها را به چه اقدام پیشگیرانه‌ای ملزم می‌کند؟',
      back: 'بازنگری سیستماتیک در قواعد، دستورالعمل‌ها و شیوه‌های بازجویی و نگهداری افراد بازداشت‌شده، به‌منظور پیشگیری از شکنجه.',
      articleRef: 'Article 11',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۲ و ۱۳ CAT چه تضمین‌هایی ایجاد می‌کنند؟',
      back: 'ماده ۱۲: تحقیق سریع و بی‌طرفانه در صورت وجود دلایل معقول برای وقوع شکنجه. ماده ۱۳: حق شکایت برای قربانی و حمایت از شاکی و شهود.',
      articleRef: 'Articles 12-13',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۴ CAT چه حقی برای قربانیان تضمین می‌کند؟',
      back: 'حق جبران خسارت و غرامت عادلانه و کافی — شامل ابزارهای لازم برای بازتوانی تا حد امکان کامل. در صورت فوت قربانی، وابستگان حق غرامت دارند.',
      articleRef: 'Article 14',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۵ CAT درباره اعترافات تحت شکنجه چه می‌گوید؟',
      back: 'هرگونه اظهاری که ثابت شود تحت شکنجه به دست آمده، نمی‌تواند به‌عنوان دلیل در هیچ دادرسی‌ای مورد استناد قرار گیرد — مگر علیه شخص متهم به شکنجه.',
      articleRef: 'Article 15',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۶ CAT فراتر از شکنجه چه رفتارهایی را ممنوع می‌کند؟',
      back: 'رفتار یا مجازات بی‌رحمانه، غیرانسانی یا تحقیرآمیز که به حد شکنجه نمی‌رسد — مرتکب‌شده توسط مقامات دولتی یا با موافقت آن‌ها.',
      articleRef: 'Article 16',
      difficulty: 'ADVANCED',
    },
  ],
};

// ─── CPPCG ─────────────────────────────────────────────────────────────────────
const cppcg: DeckData = {
  code: 'CPPCG',
  titleFa: 'کنوانسیون منع و مجازات نسل‌کشی',
  titleEn: 'Convention on the Prevention and Punishment of the Crime of Genocide',
  description: 'کنوانسیون پیشگیری و مجازات جنایت نسل‌کشی — مصوب ۹ دسامبر ۱۹۴۸',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-prevention-and-punishment-crime-genocide',
  icon: '🕯️',
  order: 8,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'کنوانسیون نسل‌کشی (CPPCG) در چه تاریخی و توسط چه نهادی تصویب شد؟',
      back: '۹ دسامبر ۱۹۴۸ توسط مجمع عمومی سازمان ملل متحد (یک روز قبل از اعلامیه جهانی حقوق بشر). لازم‌الاجرا: ۱۲ ژانویه ۱۹۵۱.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'CONCEPT',
      front: 'چه کسی واژه «ژنوسید» (نسل‌کشی) را ابداع کرد؟',
      back: 'رافائل لمکین، حقوقدان لهستانی-یهودی، در سال ۱۹۴۴ از ترکیب واژه یونانی genos (نژاد/قبیله) و پسوند لاتین -cide (کشتن).',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ CPPCG چه اصلی را بیان می‌کند؟',
      back: 'نسل‌کشی — چه در زمان صلح و چه در زمان جنگ — جنایتی بر طبق حقوق بین‌الملل است و دولت‌ها متعهد به پیشگیری و مجازات آن هستند.',
      articleRef: 'Article I',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲ CPPCG «نسل‌کشی» را چگونه تعریف می‌کند؟',
      back: 'هر یک از اعمال زیر با قصد نابودی کلی یا جزئی یک گروه ملی، قومی، نژادی یا مذهبی: (الف) کشتار اعضای گروه، (ب) آسیب شدید جسمی یا روانی، (ج) تحمیل شرایط زندگی نابودکننده، (د) جلوگیری از زاد و ولد، (ه) انتقال اجباری کودکان.',
      articleRef: 'Article II',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳ CPPCG چه اقداماتی را مجازات‌پذیر اعلام می‌کند؟',
      back: 'پنج عمل قابل مجازات: (الف) نسل‌کشی، (ب) توطئه برای ارتکاب نسل‌کشی، (ج) تحریک مستقیم و علنی به نسل‌کشی، (د) اقدام به نسل‌کشی، (ه) معاونت در نسل‌کشی.',
      articleRef: 'Article III',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا طبق CPPCG، سران حکومت و مقامات رسمی از مجازات نسل‌کشی معاف هستند؟',
      back: 'خیر. ماده ۴: مرتکبان نسل‌کشی باید مجازات شوند — خواه حاکمان، مقامات رسمی باشند یا اشخاص خصوصی.',
      articleRef: 'Article IV',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۵ CPPCG دولت‌ها را به چه اقدامی ملزم می‌کند؟',
      back: 'وضع قوانین داخلی لازم برای اجرای کنوانسیون، به‌ویژه تعیین مجازات‌های مؤثر برای مرتکبان نسل‌کشی.',
      articleRef: 'Article V',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۶ CPPCG محاکمه مرتکبان نسل‌کشی را به چه مرجعی واگذار می‌کند؟',
      back: 'متهمان باید در دادگاه صلاحیتدار کشور محل وقوع جرم یا در دادگاه بین‌المللی کیفری (که صلاحیتش پذیرفته شده) محاکمه شوند.',
      articleRef: 'Article VI',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا نسل‌کشی جرم سیاسی محسوب می‌شود و مشمول معافیت از استرداد مجرمان می‌گردد؟',
      back: 'خیر. ماده ۷: نسل‌کشی و سایر اعمال مذکور در ماده ۳ جرم سیاسی محسوب نمی‌شوند و دولت‌ها متعهد به استرداد مجرمان هستند.',
      articleRef: 'Article VII',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۸ CPPCG چه حقی را برای دولت‌ها پیش‌بینی می‌کند؟',
      back: 'هر دولت عضو می‌تواند از ارگان‌های صلاحیتدار سازمان ملل بخواهد اقدامات مقتضی برای پیشگیری و جلوگیری از نسل‌کشی را طبق منشور ملل متحد انجام دهند.',
      articleRef: 'Article VIII',
      difficulty: 'ADVANCED',
    },
    {
      type: 'MATCH',
      front: 'کدام عنصر کلیدی نسل‌کشی را از سایر جنایات متمایز می‌کند؟',
      back: '«قصد» (dolus specialis) — نسل‌کشی مستلزم قصد خاص نابودی کلی یا جزئی یک گروه ملی، قومی، نژادی یا مذهبی «به‌عنوان یک گروه» است. بدون این قصد، حتی کشتار گسترده نسل‌کشی محسوب نمی‌شود.',
      articleRef: 'Article II',
      difficulty: 'ADVANCED',
    },
  ],
};

// ─── ICMW ──────────────────────────────────────────────────────────────────────
const icmw: DeckData = {
  code: 'ICMW',
  titleFa: 'کنوانسیون حمایت از کارگران مهاجر',
  titleEn: 'International Convention on the Protection of the Rights of All Migrant Workers',
  description: 'کنوانسیون بین‌المللی حمایت از حقوق کلیه کارگران مهاجر و اعضای خانواده‌هایشان — مصوب ۱۸ دسامبر ۱۹۹۰',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-convention-protection-rights-all-migrant-workers',
  icon: '🌍',
  order: 9,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'ICMW در چه تاریخی تصویب شد و هدف آن چیست؟',
      back: '۱۸ دسامبر ۱۹۹۰ توسط مجمع عمومی سازمان ملل. لازم‌الاجرا: ۱ ژوئیه ۲۰۰۳. هدف: حمایت از حقوق بشر کلیه کارگران مهاجر و خانواده‌هایشان.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ ICMW شامل چه کسانی می‌شود؟',
      back: 'تمام کارگران مهاجر و اعضای خانواده‌هایشان — بدون تمایز از حیث جنس، نژاد، رنگ، زبان، مذهب، ملیت، سن، وضعیت اقتصادی یا هر وضعیت دیگر. در تمام مراحل مهاجرت قابل اعمال است.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲ ICMW «کارگر مهاجر» را چگونه تعریف می‌کند؟',
      back: 'شخصی که در حال اشتغال یا قصد اشتغال به فعالیت با مزد در کشوری است که تبعه آن نیست. شامل: کارگران فصلی، دریانوردان، مرزی، و خوداشتغال نیز می‌شود.',
      articleRef: 'Article 2',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۷ ICMW چه تعهدی ایجاد می‌کند؟',
      back: 'دولت‌ها متعهدند حقوق مندرج در کنوانسیون را بدون هیچ‌گونه تبعیض برای تمام کارگران مهاجر و خانواده‌هایشان تضمین کنند.',
      articleRef: 'Article 7',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۹ ICMW چه حقی را تضمین می‌کند؟',
      back: 'حق حیات کارگران مهاجر و اعضای خانواده‌هایشان باید به موجب قانون حمایت شود.',
      articleRef: 'Article 9',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'مواد ۱۰ و ۱۱ ICMW چه ممنوعیت‌هایی ایجاد می‌کنند؟',
      back: 'ماده ۱۰: ممنوعیت شکنجه و رفتار غیرانسانی. ماده ۱۱: ممنوعیت بردگی و کار اجباری.',
      articleRef: 'Articles 10-11',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۶ ICMW چه حقی را برای کارگران مهاجر تضمین می‌کند؟',
      back: 'حق آزادی و امنیت شخصی. ممنوعیت بازداشت خودسرانه، حق اطلاع از دلایل بازداشت، حق دسترسی به مقامات کنسولی و حق جبران خسارت بابت بازداشت غیرقانونی.',
      articleRef: 'Article 16',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۱ ICMW چه حمایتی از مدارک مهاجران ارائه می‌دهد؟',
      back: 'ممنوعیت مصادره، تخریب یا اقدام به تخریب مدارک هویتی توسط افراد غیرمجاز. هیچ مصادره مجاز مدارک نباید بدون ارائه رسید صورت گیرد. تخریب گذرنامه ممنوع است.',
      articleRef: 'Article 21',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۲ ICMW درباره اخراج جمعی چه می‌گوید؟',
      back: 'ممنوعیت اخراج جمعی. هر مورد اخراج باید به‌صورت فردی بررسی و تصمیم‌گیری شود. تصمیم باید به زبان قابل‌فهم ابلاغ شود و حق تجدیدنظر وجود دارد.',
      articleRef: 'Article 22',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۵ ICMW چه حقی درباره شرایط کار بیان می‌کند؟',
      back: 'کارگران مهاجر باید از رفتاری نه کمتر از اتباع کشور مقصد برخوردار شوند: مزد مساوی، ساعات کار، مرخصی، بهداشت و ایمنی شغلی.',
      articleRef: 'Article 25',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۸ ICMW چه حقی درباره بهداشت بیان می‌کند؟',
      back: 'حق دریافت مراقبت‌های پزشکی اورژانسی بر اساس برابری با اتباع، حتی در صورت نامنظم بودن وضعیت اقامت یا اشتغال.',
      articleRef: 'Article 28',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۳۰ ICMW چه حقی درباره آموزش فرزندان بیان می‌کند؟',
      back: 'هر فرزند کارگر مهاجر حق دسترسی به آموزش بر اساس برابری دارد. ورود به مدارس دولتی نباید به دلیل وضعیت نامنظم اقامت والدین رد شود.',
      articleRef: 'Article 30',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا ICMW فقط از کارگران دارای مدرک حمایت می‌کند؟',
      back: 'خیر. بخش سوم (مواد ۸-۳۵) حقوقی را برای «همه» کارگران مهاجر — اعم از مستند و غیرمستند — تضمین می‌کند. بخش چهارم حقوق اضافی فقط برای کارگران مستند دارد.',
      articleRef: 'Article 35',
      difficulty: 'ADVANCED',
    },
  ],
};

// ─── ICPPED ────────────────────────────────────────────────────────────────────
const icpped: DeckData = {
  code: 'ICPPED',
  titleFa: 'کنوانسیون حمایت از ناپدیدشدگان اجباری',
  titleEn: 'International Convention for the Protection of All Persons from Enforced Disappearance',
  description: 'کنوانسیون بین‌المللی حمایت از تمام اشخاص در برابر ناپدیدشدن اجباری — مصوب ۲۰ دسامبر ۲۰۰۶',
  sourceUrl: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-convention-protection-all-persons-enforced',
  icon: '🔍',
  order: 10,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'ICPPED در چه تاریخی تصویب شد؟',
      back: '۲۰ دسامبر ۲۰۰۶ توسط مجمع عمومی سازمان ملل. لازم‌الاجرا: ۲۳ دسامبر ۲۰۱۰. اولین معاهده‌ی الزام‌آور در سطح جهانی درباره ناپدیدسازی اجباری.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱ ICPPED چه اصلی را بیان می‌کند؟',
      back: 'ممنوعیت مطلق ناپدیدسازی اجباری. هیچ شرایط استثنایی — اعم از جنگ، تهدید جنگ، بی‌ثباتی سیاسی یا هر وضعیت اضطراری — نمی‌تواند توجیه‌کننده ناپدیدسازی اجباری باشد.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲ ICPPED «ناپدیدسازی اجباری» را چگونه تعریف می‌کند؟',
      back: 'دستگیری، بازداشت، ربودن یا هر شکل دیگر سلب آزادی توسط مأموران دولت یا با حمایت دولت، همراه با انکار سلب آزادی یا پنهان کردن سرنوشت شخص — که فرد را خارج از حمایت قانون قرار می‌دهد.',
      articleRef: 'Article 2',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۵ ICPPED چه اهمیتی از نظر حقوق بین‌الملل کیفری دارد؟',
      back: 'عمل گسترده یا سیستماتیک ناپدیدسازی اجباری، جنایت علیه بشریت محسوب می‌شود — طبق حقوق بین‌الملل قابل اعمال.',
      articleRef: 'Article 5',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۶ ICPPED چه افرادی را مسئول می‌داند؟',
      back: 'هر شخصی که مرتکب شود، دستور دهد، ترغیب یا تحریک کند، اقدام کند، شریک جرم باشد. همچنین مافوقی که می‌دانست یا آگاهانه نادیده گرفت و اقدام نکرد.',
      articleRef: 'Article 6',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا هیچ دستوری از مافوق می‌تواند توجیه‌کننده ناپدیدسازی اجباری باشد؟',
      back: 'خیر. ماده ۶(۲): هیچ دستوری از هیچ مقام دولتی — نظامی یا غیرنظامی — نمی‌تواند توجیه‌کننده جرم ناپدیدسازی اجباری باشد.',
      articleRef: 'Article 6',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۷ ICPPED چه ممنوعیت مهمی ایجاد می‌کند؟',
      back: 'ممنوعیت بازداشت مخفیانه. هر شخص سلب‌آزادی‌شده باید فقط در مکان‌های رسمی و تحت نظارت نگهداری شود. دولت‌ها باید دفاتر رسمی بازداشت‌شدگان را نگهداری کنند.',
      articleRef: 'Article 17',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۴ ICPPED «قربانی» را چگونه تعریف می‌کند و چه حقوقی تضمین می‌کند؟',
      back: '«قربانی» شامل شخص ناپدیدشده و هر فردی که مستقیماً آسیب دیده. حق دانستن حقیقت، حق جبران خسارت، حق جستجو و آزادی ناپدیدشده، و حق تشکیل انجمن.',
      articleRef: 'Article 24',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۶ ICPPED اصل «عدم بازگردانی» را چگونه بیان می‌کند؟',
      back: 'هیچ دولتی نباید شخصی را به کشوری اخراج یا مسترد کند که دلایل اساسی برای باور به خطر ناپدیدسازی اجباری وجود دارد.',
      articleRef: 'Article 16',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۲۵ ICPPED از چه گروه آسیب‌پذیری حمایت ویژه می‌کند؟',
      back: 'کودکان. جرم‌انگاری ربودن کودکان قربانیان ناپدیدسازی و کودکان متولدشده در دوران اسارت مادران. حمایت از هویت و روابط خانوادگی کودکان.',
      articleRef: 'Article 25',
      difficulty: 'ADVANCED',
    },
    {
      type: 'ARTICLE',
      front: 'ماده ۱۵ ICPPED دولت‌ها را به چه همکاری ملزم می‌کند؟',
      back: 'همکاری متقابل برای کمک به قربانیان، جستجو و یافتن ناپدیدشدگان و در صورت فوت، کشف و شناسایی و بازگرداندن بقایا.',
      articleRef: 'Article 15',
      difficulty: 'INTERMEDIATE',
    },
  ],
};

// ─── YP ────────────────────────────────────────────────────────────────────────
const yp: DeckData = {
  code: 'YP',
  titleFa: 'اصول یوگیاکارتا',
  titleEn: 'Yogyakarta Principles',
  description: 'اصول یوگیاکارتا — اصول اعمال حقوق بشر بین‌المللی در رابطه با گرایش جنسی و هویت جنسیتی (۲۰۰۶) + اصول تکمیلی (YP+10، ۲۰۱۷)',
  sourceUrl: 'https://yogyakartaprinciples.org/',
  icon: '🏳️‍🌈',
  order: 11,
  rewardUsd: 1.0,
  cards: [
    {
      type: 'CONCEPT',
      front: 'اصول یوگیاکارتا چیست و در چه سالی تدوین شد؟',
      back: 'مجموعه‌ای از ۲۹ اصل درباره اعمال حقوق بشر بین‌المللی در رابطه با گرایش جنسی و هویت جنسیتی. تدوین: ۲۰۰۶ در شهر یوگیاکارتا (اندونزی) توسط گروهی از کارشناسان حقوق بشر. اصول تکمیلی (YP+10) در ۲۰۱۷ اضافه شدند.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    {
      type: 'CONCEPT',
      front: 'آیا اصول یوگیاکارتا یک معاهده بین‌المللی الزام‌آور است؟',
      back: 'خیر. اصول یوگیاکارتا یک سند حقوقی غیرالزام‌آور (soft law) است، اما به‌طور گسترده توسط نهادهای حقوق بشری سازمان ملل و دادگاه‌های بین‌المللی به‌عنوان مرجع تفسیری استفاده می‌شود.',
      articleRef: null,
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۱ یوگیاکارتا چه حقی را بیان می‌کند؟',
      back: 'حق بهره‌مندی جهانی از حقوق بشر. تمام انسان‌ها آزاد و از نظر حیثیت و حقوق برابرند. حقوق بشر متعلق به همه‌ی افراد بدون توجه به گرایش جنسی یا هویت جنسیتی است.',
      articleRef: 'Principle 1',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۲ یوگیاکارتا چه اصلی را تأکید می‌کند؟',
      back: 'حق برابری و عدم تبعیض. همه افراد بدون تبعیض بر اساس گرایش جنسی و هویت جنسیتی حق بهره‌مندی از تمام حقوق بشر را دارند.',
      articleRef: 'Principle 2',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۳ یوگیاکارتا چه حقی را تضمین می‌کند؟',
      back: 'حق شناسایی شخصیت حقوقی. هر فرد حق دارد شخصیت حقوقی‌اش به رسمیت شناخته شود. گرایش جنسی یا هویت جنسیتی نباید مانع شناسایی حقوقی شود.',
      articleRef: 'Principle 3',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۶ یوگیاکارتا چه حقی درباره حریم خصوصی بیان می‌کند؟',
      back: 'حق حریم خصوصی. همه افراد حق حریم خصوصی دارند — بدون مداخله خودسرانه. گرایش جنسی و هویت جنسیتی بخشی از حوزه خصوصی فرد است.',
      articleRef: 'Principle 6',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۹ یوگیاکارتا چه حقی درباره بازداشت بیان می‌کند؟',
      back: 'حق رفتار انسانی در زمان بازداشت. ممنوعیت قرار دادن افراد در سلول انفرادی یا سوءاستفاده به دلیل گرایش جنسی یا هویت جنسیتی.',
      articleRef: 'Principle 9',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۱۳ یوگیاکارتا چه حقی را تضمین می‌کند؟',
      back: 'حق تأمین اجتماعی و سایر اقدامات حمایتی. دسترسی بدون تبعیض بر اساس گرایش جنسی یا هویت جنسیتی به تأمین اجتماعی، دستاوردهای اشتغال، و حمایت از فقر.',
      articleRef: 'Principle 13',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۱۸ یوگیاکارتا درباره چه موضوعی است؟',
      back: 'حمایت از پزشکی‌سازی (pathologization). هیچ‌کس نباید به دلیل گرایش جنسی یا هویت جنسیتی مجبور به درمان پزشکی شود. هویت جنسیتی بیماری نیست.',
      articleRef: 'Principle 18',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۱۹ یوگیاکارتا چه حقی را بیان می‌کند؟',
      back: 'حق آزادی عقیده و بیان — بدون توجه به گرایش جنسی و هویت جنسیتی. شامل حق بیان هویت از طریق گفتار، ظاهر و رفتار.',
      articleRef: 'Principle 19',
      difficulty: 'BEGINNER',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۲۴ یوگیاکارتا چه حقی درباره خانواده بیان می‌کند؟',
      back: 'حق تشکیل خانواده. هر فرد حق تشکیل خانواده دارد — بدون تبعیض بر اساس گرایش جنسی یا هویت جنسیتی. خانواده به اشکال مختلف وجود دارد.',
      articleRef: 'Principle 24',
      difficulty: 'INTERMEDIATE',
    },
    {
      type: 'ARTICLE',
      front: 'اصل ۲۹ یوگیاکارتا چه حقی را بیان می‌کند؟',
      back: 'حق پاسخگویی و جبران خسارت. هر فردی که حقوقش نقض شده حق جبران خسارت مؤثر دارد — بدون توجه به گرایش جنسی یا هویت جنسیتی.',
      articleRef: 'Principle 29',
      difficulty: 'ADVANCED',
    },
    {
      type: 'TRUE_FALSE',
      front: 'آیا جرم‌انگاری روابط همجنس‌گرایانه با اصول یوگیاکارتا سازگار است؟',
      back: 'خیر. اصل ۲ اعلام می‌کند که هیچ‌کس نباید به دلیل گرایش جنسی یا هویت جنسیتی مورد تبعیض قرار گیرد. جرم‌انگاری روابط توافقی بین بالغین، نقض حقوق بشر محسوب می‌شود.',
      articleRef: 'Principle 2',
      difficulty: 'ADVANCED',
    },
  ],
};

// ─── Assemble all decks ────────────────────────────────────────────────────────
const allDecks: DeckData[] = [
  icescr,
  iccpr,
  crc,
  cedaw,
  crpd,
  cat,
  cppcg,
  icmw,
  icpped,
  yp,
];

async function main() {
  let totalCards = 0;

  for (const d of allDecks) {
    const deck = await prisma.flashcardDeck.upsert({
      where: { code: d.code },
      update: {
        titleFa: d.titleFa,
        titleEn: d.titleEn,
        description: d.description,
        sourceUrl: d.sourceUrl,
        icon: d.icon,
        order: d.order,
        rewardUsd: d.rewardUsd,
      },
      create: {
        code: d.code,
        titleFa: d.titleFa,
        titleEn: d.titleEn,
        description: d.description,
        sourceUrl: d.sourceUrl,
        icon: d.icon,
        order: d.order,
        rewardUsd: d.rewardUsd,
      },
    });

    for (let i = 0; i < d.cards.length; i++) {
      const c = d.cards[i];
      const cardId = `${d.code.toLowerCase()}-card-${i + 1}`;
      await prisma.flashcard.upsert({
        where: { id: cardId },
        update: {
          front: c.front,
          back: c.back,
          type: c.type,
          articleRef: c.articleRef,
          difficulty: c.difficulty,
          order: i + 1,
        },
        create: {
          id: cardId,
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

    totalCards += d.cards.length;
    console.log(`  ✅ ${d.code}: ${d.cards.length} cards`);
  }

  console.log(`\n🎉 Seeded ${allDecks.length} decks with ${totalCards} total flashcards`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
