import type { Localized } from '../i18n/ui';

// FAQ items; each list is also emitted as FAQPage structured data by Faq.astro.
export interface FaqItem {
  q: Localized;
  a: Localized;
}

// Plain-language answers to what non-technical clients ask first (the /services page).
export const smbFaq: FaqItem[] = [
  {
    q: {
      tr: 'Teknik bilgim yok, sorun olur mu?',
      en: 'I’m not technical. Is that a problem?',
    },
    a: {
      tr: 'Hiç sorun olmaz. İhtiyacınızı kendi kelimelerinizle anlatmanız yeterli; teknik kararlar ve uygulama tarafı tamamen üstlenilir. Her adım sade bir dille açıklanır, her hafta çalışan sürümü görüp yorumlarınızı iletirsiniz.',
      en: 'Not at all. Describe what you need in your own words; the technical decisions and the build are fully taken care of. Every step is explained in plain language, and you review a working version each week.',
    },
  },
  {
    q: {
      tr: 'Fiyat nasıl belirleniyor?',
      en: 'How is pricing decided?',
    },
    a: {
      tr: 'Fiyat; sayfa ve özellik sayısına, tasarım ihtiyacına ve bağlanacak sistemlere (ödeme, randevu, stok gibi) göre belirlenir. Ücretsiz ön görüşmenin ardından kapsamı ve süreyi netleştiren yazılı bir teklif iletilir. Sürpriz ek ücret yoktur.',
      en: 'It depends on the number of pages and features, the design work and the systems to connect (payments, bookings, stock and so on). After a free intro call you receive a written quote that fixes scope and timeline. No surprise extras.',
    },
  },
  {
    q: {
      tr: 'Bir proje ne kadar sürer?',
      en: 'How long does a project take?',
    },
    a: {
      tr: 'Kapsama göre değişir. Kurumsal site gibi işler genellikle birkaç hafta, online mağaza veya uygulama gibi projeler birkaç ay sürer. Net süre teklifte yazılı olarak yer alır.',
      en: 'It depends on scope. A business site usually takes a few weeks; an online store or an app takes a few months. The exact timeline is written into the quote.',
    },
  },
  {
    q: {
      tr: 'Site ve kodlar kimin olacak?',
      en: 'Who owns the site and the code?',
    },
    a: {
      tr: 'Tamamen sizin. Kod, alan adı ve hosting hesapları sizin adınıza açılır. İleride başka biriyle çalışmak isterseniz her şeyi yanınızda götürürsünüz.',
      en: 'You do, entirely. The code, domain and hosting accounts are set up in your name. If you ever work with someone else, everything goes with you.',
    },
  },
  {
    q: {
      tr: 'Google’da görünür olacak mı?',
      en: 'Will it show up on Google?',
    },
    a: {
      tr: 'Evet. Siteler hızlı açılacak ve arama motorlarının kolayca okuyacağı şekilde hazırlanır. Sıralama zamanla içerik ve rekabete göre oluşur; iyileştirmek için atılabilecek adımlar da teslimle birlikte paylaşılır.',
      en: 'Yes. Sites are built to load fast and be easy for search engines to read. Rankings grow over time with content and competition, and the next steps to improve them are shared at handover.',
    },
  },
  {
    q: {
      tr: 'Mevcut sitemi yenileyebilir misiniz?',
      en: 'Can you rework my existing site?',
    },
    a: {
      tr: 'Evet. Önce mevcut yapı incelenir ve neyin korunup neyin yenileneceği açıkça paylaşılır. Çoğu zaman sıfırdan başlamak yerine hızlandırmak ve düzeltmek en verimli yoldur.',
      en: 'Yes. Your current setup is reviewed first, and what to keep versus rebuild is laid out clearly. Often, speeding it up and fixing it beats starting over.',
    },
  },
  {
    q: {
      tr: 'Yayından sonra destek veriyor musunuz?',
      en: 'Do you offer support after launch?',
    },
    a: {
      tr: 'Evet. Yayın sonrasında hata düzeltme, güncelleme ve yeni özellikler için destek sürer; dilerseniz aylık bakım anlaşması da yapılabilir.',
      en: 'Yes. Support for fixes, updates and new features continues after launch, and a monthly maintenance plan is available.',
    },
  },
];

// Questions engineering leads, CTOs and agencies ask before a contract (home page).
// Company structure stays deliberately general; rates are on request.
export const faq: FaqItem[] = [
  {
    q: {
      tr: 'Saat dilimi örtüşmesi nasıl?',
      en: 'What is your timezone overlap?',
    },
    a: {
      tr: 'Türkiye’den çalışıyorum (UTC+3, yaz saati uygulaması yok). Çalışma günüm İngiltere ve AB mesaisiyle, ABD Doğu Yakası’nda ise sabah saatleriyle örtüşüyor. Daily’ler ve review’lar bu örtüşen saatlere planlanır.',
      en: 'I work from Türkiye (UTC+3, no daylight saving). My working day overlaps UK and EU hours, and US East Coast mornings. Stand-ups and reviews are planned into that overlap.',
    },
  },
  {
    q: {
      tr: 'Mevcut bir kod tabanına nasıl adapte oluyorsunuz?',
      en: 'How do you onboard into an existing codebase?',
    },
    a: {
      tr: 'Önce projeyi yerelde çalıştırıp mimariyi ve yayın sürecini çıkarırım, ardından küçük ve review’dan geçmiş bir değişikliği erkenden canlıya taşırım. Sorular erken ve yazılı gelir; kod tabanındaki mevcut kurallar değiştirilmez, takip edilir.',
      en: 'Local setup first, then a map of the architecture and release path, then a small, reviewed change to production early. Questions come early and in writing, and the conventions already in the codebase are followed rather than replaced.',
    },
  },
  {
    q: {
      tr: 'Ne kadar hızlı başlayabilirsiniz?',
      en: 'How quickly can you start?',
    },
    a: {
      tr: 'Başlangıç tarihi tanışma görüşmesinde, mevcut taahhütlere göre netleşir. Sayfanın üstündeki durum etiketi şu an yeni iş alıp almadığımı gösterir.',
      en: 'Start dates are agreed on the intro call, based on current commitments. The status badge at the top of this page shows whether I am taking on new work.',
    },
  },
  {
    q: {
      tr: 'Sözleşme yapısı nasıl?',
      en: 'How is the contract structured?',
    },
    a: {
      tr: 'Tamamen uzaktan, saatlik ya da günlük faturalandırma. Sözleşmenin ayrıntıları, satın alma sürecinize uyacak şekilde her iş için ayrıca kararlaştırılır.',
      en: 'Fully remote, billed hourly or daily. The details are agreed per engagement to fit your procurement process.',
    },
  },
  {
    q: {
      tr: 'Ücretleriniz nedir?',
      en: 'What are your rates?',
    },
    a: {
      tr: 'Talep üzerine; kapsama, süreye ve haftalık çalışma saatine göre paylaşılır.',
      en: 'Shared on request, based on scope, duration and weekly hours.',
    },
  },
  {
    q: {
      tr: 'Sadece frontend mi, full-stack mi?',
      en: 'Frontend only, or full stack?',
    },
    a: {
      tr: 'Ağırlık frontend’de, full-stack yetkinlikle: frontend’de arayüz mimarisi, design system’ler ve performans; backend’de Node.js, Express ve NestJS ile REST API’ler, PostgreSQL ya da MongoDB ile.',
      en: 'Frontend-led and full-stack capable: UI architecture, design systems and performance on the frontend; REST APIs with Node.js, Express and NestJS on the backend, on PostgreSQL or MongoDB.',
    },
  },
  {
    q: {
      tr: 'Referans verebilir misiniz?',
      en: 'Can you provide references?',
    },
    a: {
      tr: 'Evet, önceki rollerden referanslar talep üzerine paylaşılır.',
      en: 'Yes, references from previous roles are available on request.',
    },
  },
];
