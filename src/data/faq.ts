import type { Localized } from '../i18n/ui';

// Plain-language answers to what non-technical clients ask first.
// Also emitted as FAQPage structured data by Faq.astro.
export interface FaqItem {
  q: Localized;
  a: Localized;
}

export const faq: FaqItem[] = [
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
