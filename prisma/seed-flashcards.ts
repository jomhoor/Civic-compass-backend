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
    // Card 1 — CONCEPT: date & origin
    {
      type: 'CONCEPT',
      front: 'اعلامیه جهانی حقوق بشر در چه تاریخی و توسط چه نهادی تصویب شد؟',
      back: '۱۰ دسامبر ۱۹۴۸ (۱۹ آذر ۱۳۲۷) توسط مجمع عمومی سازمان ملل متحد در پاریس.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    // Card 2 — CONCEPT: number of articles
    {
      type: 'CONCEPT',
      front: 'اعلامیه جهانی حقوق بشر چند ماده دارد؟',
      back: '۳۰ ماده.',
      articleRef: null,
      difficulty: 'BEGINNER',
    },
    // Card 3 — Article 1: equality and brotherhood
    {
      type: 'ARTICLE',
      front: 'ماده ۱ اعلامیه جهانی حقوق بشر چه اصلی را بیان می‌کند؟',
      back: 'تمام افراد بشر آزاد به دنیا می‌آیند و از لحاظ حیثیت و حقوق با هم برابرند. همه دارای عقل و وجدان هستند و باید نسبت به یکدیگر با روح برادری رفتار کنند.',
      articleRef: 'Article 1',
      difficulty: 'BEGINNER',
    },
    // Card 4 — Article 2: non-discrimination (both paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۲ اعلامیه جهانی چه نوع تبعیضی را ممنوع می‌کند؟',
      back: 'هر کس می‌تواند بدون هیچ‌گونه تمایزی — از حیث نژاد، رنگ، جنس، زبان، مذهب، عقیده سیاسی یا هر عقیده دیگر، ملیت، وضع اجتماعی، ثروت، تولد یا هر موقعیت دیگر — از تمام حقوق و آزادی‌های این اعلامیه برخوردار شود. افزون بر این، هیچ تبعیضی بر اساس وضع سیاسی، اداری، قضایی یا بین‌المللی کشوری که فرد به آن تعلق دارد اعمال نخواهد شد.',
      articleRef: 'Article 2',
      difficulty: 'BEGINNER',
    },
    // Card 5 — Article 3: life, liberty, security
    {
      type: 'ARTICLE',
      front: 'ماده ۳ اعلامیه جهانی چه حقوقی را تضمین می‌کند؟',
      back: 'هر کس حق زندگی، آزادی و امنیت شخصی دارد.',
      articleRef: 'Article 3',
      difficulty: 'BEGINNER',
    },
    // Card 6 — Article 4: prohibition of slavery
    {
      type: 'TRUE_FALSE',
      front: 'آیا بردگی تحت هر شرایطی ممنوع است؟',
      back: 'بله. ماده ۴: احدی را نمی‌توان در بردگی نگه داشت. داد و ستد بردگان به هر شکلی که باشد ممنوع است.',
      articleRef: 'Article 4',
      difficulty: 'BEGINNER',
    },
    // Card 7 — Article 5: prohibition of torture
    {
      type: 'ARTICLE',
      front: 'ماده ۵ اعلامیه جهانی چه چیزی را ممنوع می‌کند؟',
      back: 'احدی را نمی‌توان تحت شکنجه یا مجازات یا رفتاری قرار داد که ظالمانه، یا برخلاف انسانیت و شئون بشری، یا موهن باشد.',
      articleRef: 'Article 5',
      difficulty: 'BEGINNER',
    },
    // Card 8 — Article 6: recognition as a person before the law
    {
      type: 'ARTICLE',
      front: 'ماده ۶ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'هر کس حق دارد که شخصیت حقوقی او در همه جا به عنوان یک انسان در مقابل قانون شناخته شود.',
      articleRef: 'Article 6',
      difficulty: 'INTERMEDIATE',
    },
    // Card 9 — Article 7: equality before the law
    {
      type: 'ARTICLE',
      front: 'ماده ۷ اعلامیه جهانی چه حقی را تضمین می‌کند؟',
      back: 'همه در برابر قانون مساوی هستند و حق دارند بدون تبعیض از حمایت یکسان قانون برخوردار شوند. همه حق دارند در مقابل هر تبعیضی که ناقض این اعلامیه باشد و در برابر هر تحریکی که برای چنین تبعیضی به عمل آید، به‌طور مساوی از حمایت قانون بهره‌مند شوند.',
      articleRef: 'Article 7',
      difficulty: 'INTERMEDIATE',
    },
    // Card 10 — Article 8: right to effective remedy (was MISSING)
    {
      type: 'ARTICLE',
      front: 'ماده ۸ اعلامیه جهانی درباره‌ی دادخواهی چه می‌گوید؟',
      back: 'در برابر اعمالی که حقوق اساسی فرد را نقض کند — حقوقی که به موجب قانون اساسی یا قانون دیگری برای او شناخته شده — هر کس حق رجوع مؤثر به محاکم ملی صالح را دارد.',
      articleRef: 'Article 8',
      difficulty: 'INTERMEDIATE',
    },
    // Card 11 — Article 9: no arbitrary detention
    {
      type: 'ARTICLE',
      front: 'ماده ۹ اعلامیه جهانی چه عملی را ممنوع می‌کند؟',
      back: 'احدی نمی‌تواند خودسرانه توقیف، حبس یا تبعید شود.',
      articleRef: 'Article 9',
      difficulty: 'BEGINNER',
    },
    // Card 12 — Article 10: right to fair trial
    {
      type: 'ARTICLE',
      front: 'ماده ۱۰ اعلامیه جهانی چه حقی را تضمین می‌کند؟',
      back: 'هر کس با مساوات کامل حق دارد که دعوایش توسط یک دادگاه مستقل و بی‌طرف، منصفانه و علناً رسیدگی شود؛ اعم از تعیین حقوق و تعهدات او یا رسیدگی به هر اتهام کیفری علیه او.',
      articleRef: 'Article 10',
      difficulty: 'INTERMEDIATE',
    },
    // Card 13 — Article 11: presumption of innocence + no retroactive punishment
    {
      type: 'TRUE_FALSE',
      front: 'آیا هر متهمی تا زمان اثبات جرم بی‌گناه فرض می‌شود؟',
      back: 'بله. ماده ۱۱: (۱) هر کس که به بزه‌کاری متهم شده باشد بی‌گناه محسوب می‌شود تا وقتی که در جریان یک دعوای عمومی — با تأمین کلیه تضمین‌های لازم برای دفاع — تقصیرش قانوناً ثابت گردد. (۲) هیچ‌کس برای انجام یا عدم انجام عملی که در موقع ارتکاب آن طبق حقوق ملی یا بین‌المللی جرم شناخته نمی‌شده محکوم نخواهد شد.',
      articleRef: 'Article 11',
      difficulty: 'BEGINNER',
    },
    // Card 14 — Article 12: right to privacy
    {
      type: 'ARTICLE',
      front: 'ماده ۱۲ اعلامیه جهانی از چه حقی حفاظت می‌کند؟',
      back: 'حریم خصوصی. احدی در زندگی خصوصی، امور خانوادگی، اقامتگاه یا مکاتباتش نباید مورد مداخله خودسرانه واقع شود و شرافت و اسم و رسمش نباید مورد حمله قرار گیرد. هر کس حق دارد در مقابل این‌گونه مداخلات و حملات از حمایت قانون بهره‌مند شود.',
      articleRef: 'Article 12',
      difficulty: 'INTERMEDIATE',
    },
    // Card 15 — Article 13: freedom of movement (both paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۱۳ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'آزادی تردد و انتخاب اقامتگاه. (۱) هر کس حق دارد در داخل هر کشوری آزادانه عبور و مرور کند و اقامتگاه خود را انتخاب نماید. (۲) هر کس حق دارد هر کشوری، از جمله کشور خود را ترک کند یا به کشور خود بازگردد.',
      articleRef: 'Article 13',
      difficulty: 'BEGINNER',
    },
    // Card 16 — Article 14: right to asylum (both paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۱۴ اعلامیه جهانی درباره‌ی چه حقی صحبت می‌کند؟',
      back: 'حق پناهندگی. (۱) هر کس حق دارد در برابر تعقیب، شکنجه و آزار پناهگاهی جستجو کند و در کشورهای دیگر پناه اختیار کند. (۲) در موردی که تعقیب واقعاً مبتنی بر جرم عمومی و غیرسیاسی، یا رفتارهایی مخالف اهداف و اصول ملل متحد باشد، نمی‌توان از این حق استفاده کرد.',
      articleRef: 'Article 14',
      difficulty: 'BEGINNER',
    },
    // Card 17 — Article 15: right to nationality (MATCH)
    {
      type: 'MATCH',
      front: '«حق تابعیت» در کدام ماده‌ی اعلامیه جهانی بیان شده؟',
      back: 'ماده ۱۵: (۱) هر کس حق دارد که دارای تابعیت باشد. (۲) احدی را نمی‌توان خودسرانه از تابعیت خود یا از حق تغییر تابعیت محروم کرد.',
      articleRef: 'Article 15',
      difficulty: 'INTERMEDIATE',
    },
    // Card 18 — Article 16: right to marry and found a family (all 3 paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۱۶ اعلامیه جهانی درباره‌ی چیست؟',
      back: 'حق ازدواج و تشکیل خانواده. (۱) هر زن و مرد بالغی بدون هیچ محدودیتی از نظر نژاد، ملیت یا مذهب حق ازدواج و تشکیل خانواده دارند؛ در تمام مدت زناشویی و هنگام انحلال آن دارای حقوق مساوی هستند. (۲) ازدواج باید با رضایت کامل و آزادانه‌ی زن و مرد واقع شود. (۳) خانواده رکن طبیعی و اساسی اجتماع است و حق دارد از حمایت جامعه و دولت بهره‌مند شود.',
      articleRef: 'Article 16',
      difficulty: 'INTERMEDIATE',
    },
    // Card 19 — Article 17: right to property
    {
      type: 'ARTICLE',
      front: 'ماده ۱۷ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'حق مالکیت. (۱) هر شخص به‌تنهایی یا به‌صورت اشتراکی حق مالکیت دارد. (۲) احدی را نمی‌توان خودسرانه از حق مالکیت محروم کرد.',
      articleRef: 'Article 17',
      difficulty: 'BEGINNER',
    },
    // Card 20 — Article 18: freedom of thought, conscience, religion
    {
      type: 'ARTICLE',
      front: 'ماده ۱۸ اعلامیه جهانی چه حقی را تضمین می‌کند؟',
      back: 'هر کس حق دارد از آزادی فکر، وجدان و مذهب بهره‌مند شود. این حق متضمن آزادی تغییر مذهب یا عقیده، و همچنین آزادی اظهار عقیده و ایمان است — شامل تعلیمات مذهبی و اجرای مراسم دینی، به‌تنهایی یا به‌صورت جمعی، به‌طور خصوصی یا علنی.',
      articleRef: 'Article 18',
      difficulty: 'BEGINNER',
    },
    // Card 21 — Article 19: freedom of opinion and expression
    {
      type: 'ARTICLE',
      front: 'ماده ۱۹ اعلامیه جهانی چه آزادی‌ای را تضمین می‌کند؟',
      back: 'آزادی عقیده و بیان. هر کس حق دارد از داشتن عقاید خود بیم و اضطرابی نداشته باشد و در کسب اطلاعات و افکار و در اخذ و انتشار آن با تمام وسائل ممکن و بدون ملاحظات مرزی آزاد باشد.',
      articleRef: 'Article 19',
      difficulty: 'BEGINNER',
    },
    // Card 22 — Article 20: freedom of assembly and association (both paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۲۰ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: '(۱) هر کس حق دارد آزادانه مجامع و جمعیت‌های مسالمت‌آمیز تشکیل دهد. (۲) هیچ‌کس را نمی‌توان مجبور به شرکت در اجتماعی کرد.',
      articleRef: 'Article 20',
      difficulty: 'BEGINNER',
    },
    // Card 23 — Article 21: right to participate in government (all 3 paragraphs)
    {
      type: 'TRUE_FALSE',
      front: 'آیا هر فردی حق شرکت در حکومت کشور خود را دارد؟',
      back: 'بله. ماده ۲۱: (۱) هر کس حق دارد مستقیماً یا از طریق نمایندگان آزادانه انتخاب‌شده در اداره امور عمومی کشورش شرکت کند. (۲) هر کس حق دارد با تساوی شرایط به مشاغل عمومی کشورش دسترسی داشته باشد. (۳) اراده‌ی مردم اساس قدرت حکومت است؛ این اراده باید از طریق انتخاباتی ادواری و صادقانه، با رأی همگانی و مساوی به شکل مخفی، ابراز شود.',
      articleRef: 'Article 21',
      difficulty: 'BEGINNER',
    },
    // Card 24 — Article 22: right to social security
    {
      type: 'ARTICLE',
      front: 'ماده ۲۲ اعلامیه جهانی چه حقی را مطرح می‌کند؟',
      back: 'حق تأمین اجتماعی. هر کس به عنوان عضو جامعه حق دارد از امنیت اجتماعی برخوردار شود و حقوق اقتصادی، اجتماعی و فرهنگی لازم برای حیثیت و رشد آزادانه‌ی شخصیتش، از طریق مساعی ملی و همکاری بین‌المللی و با رعایت تشکیلات و منابع هر کشور، تحقق یابد.',
      articleRef: 'Article 22',
      difficulty: 'INTERMEDIATE',
    },
    // Card 25 — Article 23: right to work (all 4 paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۲۳ اعلامیه جهانی چه حقوقی را درباره‌ی کار بیان می‌کند؟',
      back: '(۱) حق کار، انتخاب آزاد شغل، شرایط منصفانه و رضایت‌بخش، و حمایت در برابر بیکاری. (۲) حق مزد مساوی در برابر کار مساوی، بدون هیچ تبعیضی. (۳) حق مزد منصفانه‌ای که زندگی خود و خانواده را موافق شئون انسانی تأمین کند. (۴) حق تشکیل اتحادیه و پیوستن به آن برای دفاع از منافع خود.',
      articleRef: 'Article 23',
      difficulty: 'INTERMEDIATE',
    },
    // Card 26 — Article 24: right to rest and leisure
    {
      type: 'ARTICLE',
      front: 'ماده ۲۴ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: 'هر کس حق استراحت، فراغت و تفریح دارد — از جمله محدودیت معقول ساعات کار و مرخصی‌های ادواری با دریافت حقوق.',
      articleRef: 'Article 24',
      difficulty: 'BEGINNER',
    },
    // Card 27 — Article 25: right to adequate standard of living (both paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۲۵ اعلامیه جهانی چه سطح زندگی‌ای را حق هر فرد می‌داند؟',
      back: '(۱) هر کس حق دارد سطح زندگانی‌اش سلامت و رفاه خود و خانواده‌اش را از حیث خوراک، پوشاک، مسکن، مراقبت‌های طبی و خدمات لازم اجتماعی تأمین کند؛ همچنین در مواقع بیکاری، بیماری، از کارافتادگی، بیوگی یا پیری از شرایط آبرومندانه‌ی زندگی برخوردار شود. (۲) مادران و کودکان حق دارند از کمک و مراقبت ویژه بهره‌مند شوند؛ کودکان چه بر اثر ازدواج و چه بدون ازدواج متولد شده باشند حق دارند از یک‌نوع حمایت اجتماعی برخوردار شوند.',
      articleRef: 'Article 25',
      difficulty: 'INTERMEDIATE',
    },
    // Card 28 — Article 26: right to education (all 3 paragraphs)
    {
      type: 'CONCEPT',
      front: '«حق آموزش» در اعلامیه جهانی (ماده ۲۶) چه ویژگی‌هایی دارد؟',
      back: '(۱) آموزش باید لااقل در مراحل ابتدایی مجانی و اجباری باشد؛ آموزش حرفه‌ای باید عمومی باشد؛ آموزش عالی باید بنا استعداد برای همه در دسترس باشد. (۲) آموزش باید به سوی رشد کامل شخصیت انسانی، تقویت احترام به حقوق بشر، و ترویج تفاهم، دوستی و صلح هدایت شود. (۳) پدر و مادر در انتخاب نوع آموزش و پرورش فرزندان خود نسبت به دیگران اولویت دارند.',
      articleRef: 'Article 26',
      difficulty: 'BEGINNER',
    },
    // Card 29 — Article 27: right to cultural life (both paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۲۷ اعلامیه جهانی چه حقی را بیان می‌کند؟',
      back: '(۱) هر کس حق دارد آزادانه در زندگی فرهنگی جامعه شرکت کند، از هنرها بهره‌مند شود و در پیشرفت علمی و فواید آن سهیم باشد. (۲) هر کس حق دارد از حمایت منافع معنوی و مادی آثار علمی، ادبی یا هنری که خود پدیدآورنده‌ی آن است برخوردار شود.',
      articleRef: 'Article 27',
      difficulty: 'INTERMEDIATE',
    },
    // Card 30 — Article 28: right to a social and international order
    {
      type: 'CONCEPT',
      front: 'ماده ۲۸ اعلامیه جهانی چه خواسته‌ای را بیان می‌کند؟',
      back: 'هر کس حق دارد خواستار برقراری نظمی اجتماعی و بین‌المللی باشد که در آن حقوق و آزادی‌های مذکور در این اعلامیه به‌طور کامل تحقق‌پذیر باشند.',
      articleRef: 'Article 28',
      difficulty: 'ADVANCED',
    },
    // Card 31 — Article 29: duties to the community (all 3 paragraphs)
    {
      type: 'ARTICLE',
      front: 'ماده ۲۹ اعلامیه جهانی چه وظایفی را بیان می‌کند؟',
      back: '(۱) هر کس در مقابل آن جامعه‌ای وظیفه دارد که رشد آزاد و کامل شخصیت او را میسر می‌سازد. (۲) هر کس در اجرای حقوق و استفاده از آزادی‌هایش فقط تابع محدودیت‌هایی است که به موجب قانون، منحصراً برای تأمین شناسایی و مراعات حقوق و آزادی‌های دیگران و رعایت مقتضیات اخلاقی، نظم عمومی و رفاه همگانی در یک جامعه دموکراتیک وضع شده باشد. (۳) این حقوق و آزادی‌ها در هیچ موردی نمی‌تواند برخلاف مقاصد و اصول ملل متحد اجرا شود.',
      articleRef: 'Article 29',
      difficulty: 'ADVANCED',
    },
    // Card 32 — Article 30: no right to destroy rights
    {
      type: 'ARTICLE',
      front: 'ماده ۳۰ (آخرین ماده) اعلامیه جهانی چه می‌گوید؟',
      back: 'هیچ‌یک از مقررات این اعلامیه نباید طوری تفسیر شود که متضمن حقی برای دولتی، جمعیتی یا فردی باشد که به موجب آن بتواند هر یک از حقوق و آزادی‌های مندرج در این اعلامیه را از بین ببرد یا در آن راه فعالیتی بنماید.',
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

  console.log(`✅ Seeded UDHR deck with ${cards.length} flashcards (30 articles + 2 concept cards)`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
