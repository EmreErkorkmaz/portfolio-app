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
      tr: 'Hiç sorun değil. Ne istediğinizi kendi kelimelerinizle anlatmanız yeterli; teknik kararları ben veririm ve her adımı sade bir dille açıklarım. Her hafta çalışan halini görür, yorumlarınızı iletirsiniz.',
      en: 'Not at all. Describe what you need in your own words; I handle the technical decisions and explain every step in plain language. You see a working version every week and share your feedback.',
    },
  },
  {
    q: {
      tr: 'Fiyat nasıl belirleniyor?',
      en: 'How is pricing decided?',
    },
    a: {
      tr: 'Fiyat; sayfa ve özellik sayısına, tasarım ihtiyacına ve bağlanacak sistemlere (ödeme, randevu, stok gibi) göre değişir. Önce ücretsiz bir ön görüşme yaparız, ardından kapsamı ve süreyi netleştiren yazılı bir teklif gönderirim. Sürpriz ek ücret olmaz.',
      en: 'It depends on the number of pages and features, the design work and the systems to connect (payments, bookings, stock and so on). We start with a free intro call, then I send a written quote that fixes scope and timeline. No surprise extras.',
    },
  },
  {
    q: {
      tr: 'Bir proje ne kadar sürer?',
      en: 'How long does a project take?',
    },
    a: {
      tr: 'Kapsama göre değişir. Tanıtım sitesi gibi küçük işler genelde birkaç hafta, online mağaza veya uygulama gibi daha büyük projeler birkaç ay sürer. Net süreyi teklifte yazılı olarak belirtirim.',
      en: 'It depends on scope. Smaller jobs such as a business site usually take a few weeks; larger projects such as an online store or an app take a few months. The exact timeline is written into the quote.',
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
      tr: 'Evet. Siteler hızlı açılacak ve arama motorlarının kolayca okuyacağı şekilde hazırlanır. Sıralama zamanla içerik ve rekabete göre oluşur; bunu iyileştirmek için neler yapabileceğinizi de anlatırım.',
      en: 'Yes. Sites are built to load fast and be easy for search engines to read. Rankings grow over time with content and competition, and I’ll show you what you can do to improve them.',
    },
  },
  {
    q: {
      tr: 'Mevcut sitemi yenileyebilir misiniz?',
      en: 'Can you rework my existing site?',
    },
    a: {
      tr: 'Evet. Önce mevcut durumu inceler, neyin korunup neyin yenilenmesi gerektiğini anlatırım. Bazen sıfırdan yapmak yerine hızlandırmak ve düzeltmek en doğrusudur.',
      en: 'Yes. I first review what you have and explain what to keep and what to rebuild. Often speeding it up and fixing it beats starting over.',
    },
  },
  {
    q: {
      tr: 'Yayından sonra destek veriyor musunuz?',
      en: 'Do you offer support after launch?',
    },
    a: {
      tr: 'Evet. Yayından sonra hata düzeltme, güncelleme ve yeni özellikler için yanınızdayım; isterseniz aylık bakım olarak da çalışabiliriz.',
      en: 'Yes. After launch I’m available for fixes, updates and new features, and we can also agree on a monthly maintenance plan.',
    },
  },
];
