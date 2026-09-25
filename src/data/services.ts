import type { Localized } from '../i18n/ui';

export type ServiceIcon = 'web' | 'store' | 'mobile' | 'improve' | 'rocket' | 'team';

// First layer: what the client gets, written from the client's side (benefit first,
// present tense). Technology is a footnote.
export interface Service {
  id: string;
  icon: ServiceIcon;
  title: Localized;
  body: Localized;
  bestFor: Localized;
  includes: Localized<string[]>;
  tech: string[];
}

export const services: Service[] = [
  {
    id: 'website',
    icon: 'web',
    title: { tr: 'Kurumsal web sitesi', en: 'Business website' },
    body: {
      tr: 'İşletmenizi doğru anlatan, saniyeler içinde açılan ve Google’da bulunan bir web sitesi. Her ziyaretçi, potansiyel bir müşteri.',
      en: 'A website that tells your story well, opens in a blink and gets found on Google. Every visitor becomes a potential customer.',
    },
    bestFor: {
      tr: 'Restoranlar, klinikler, danışmanlık ve hizmet işletmeleri',
      en: 'Restaurants, clinics, consultancies and service businesses',
    },
    includes: {
      tr: [
        'Telefon, tablet ve bilgisayarda kusursuz görünüm',
        'Google’da görünürlük için teknik altyapı',
        'Çok dilli yapı seçeneği',
      ],
      en: [
        'Flawless on phones, tablets and desktops',
        'Built to be found on Google',
        'Multilingual option',
      ],
    },
    tech: ['Next.js', 'Astro', 'TypeScript'],
  },
  {
    id: 'store',
    icon: 'store',
    title: { tr: 'Online mağaza', en: 'Online store' },
    body: {
      tr: 'Ürünlerinizi 7/24 satan bir mağaza: vitrin, sepet ve güvenli ödeme. Hızlı açılan sayfalar, daha yüksek satış demektir.',
      en: 'A store that sells around the clock: catalogue, cart and secure checkout. Faster pages mean higher sales.',
    },
    bestFor: {
      tr: 'İnternetten satışa başlayan ya da mevcut mağazasını büyütmek isteyen markalar',
      en: 'Brands starting to sell online or growing an existing store',
    },
    includes: {
      tr: [
        'Ürün vitrini, arama ve filtreleme',
        'Sepet ve ödeme altyapısı entegrasyonu',
        'Arama motorlarında öne çıkan ürün sayfaları',
      ],
      en: [
        'Product catalogue, search and filters',
        'Cart and payment provider integration',
        'Product pages that stand out in search',
      ],
    },
    tech: ['Next.js', 'SSR', 'TypeScript'],
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: { tr: 'Mobil uygulama', en: 'Mobile app' },
    body: {
      tr: 'Müşterilerinize cebinden ulaşın. iPhone ve Android için tek geliştirmeyle, iki platformda birden.',
      en: 'Reach your customers in their pocket. One build, live on both iPhone and Android.',
    },
    bestFor: {
      tr: 'Sadakat, sipariş veya randevu süreçlerini telefona taşımak isteyen işletmeler',
      en: 'Businesses moving loyalty, ordering or bookings onto the phone',
    },
    includes: {
      tr: [
        'iPhone ve Android için tek kod tabanı',
        'Bildirimler ve telefon özellikleri',
        'Mağazaya gerek kalmadan kurulabilen web uygulaması seçeneği',
      ],
      en: [
        'One codebase for iPhone and Android',
        'Notifications and native phone features',
        'Installable web app option, no app store needed',
      ],
    },
    tech: ['React Native', 'PWA', 'TypeScript'],
  },
  {
    id: 'mvp',
    icon: 'rocket',
    title: { tr: 'Fikirden ilk sürüme', en: 'From idea to first version' },
    body: {
      tr: 'Fikrinizi hızla gerçek kullanıcılarla buluşturun. Önce en önemli özellikler, ardından ölçerek büyüyen bir ürün.',
      en: 'Put your idea in front of real users, fast. The essential features first, then a product that grows with evidence.',
    },
    bestFor: {
      tr: 'Teknik ekibi olmayan girişimciler ve yeni iş fikirleri',
      en: 'Founders without a tech team and new business ideas',
    },
    includes: {
      tr: [
        'Kapsamı netleştiren ücretsiz ön görüşme',
        'Haftalık, denenebilir sürümler',
        'Yatırımcıya ve kullanıcıya gösterilebilir ürün',
      ],
      en: [
        'Free intro call to shape the scope',
        'Weekly versions you can try',
        'A product ready for users and investors',
      ],
    },
    tech: ['React', 'Next.js', 'Node.js'],
  },
  {
    id: 'improve',
    icon: 'improve',
    title: { tr: 'Mevcut yazılımı iyileştirme', en: 'Improve existing software' },
    body: {
      tr: 'Yavaşlayan, hata veren ya da yeni ihtiyaçlara yetişemeyen sisteminize ikinci bir hayat. Çalışan yapı korunur, eksikler giderilir.',
      en: 'A second life for software that has slowed down, breaks or can’t keep up. What works stays; what doesn’t gets fixed.',
    },
    bestFor: {
      tr: 'Müşteri şikâyeti alan, yavaş ya da bakımsız kalmış siteler ve uygulamalar',
      en: 'Slow, unmaintained or complaint-prone sites and apps',
    },
    includes: {
      tr: [
        'Hız ve performans iyileştirmesi',
        'Hata giderme ve yeni özellikler',
        'Düzenli bakım ve destek',
      ],
      en: [
        'Speed and performance improvements',
        'Bug fixes and new features',
        'Ongoing maintenance and support',
      ],
    },
    tech: ['React', 'TypeScript', 'Playwright'],
  },
  {
    id: 'team',
    icon: 'team',
    title: { tr: 'Ekibinize geliştirici desteği', en: 'An extra developer for your team' },
    body: {
      tr: 'İşe alım süreci beklemeden ekibinize deneyimli bir geliştirici. Yoğun dönemde hız, kritik projede güvence.',
      en: 'An experienced developer on your team without a hiring process. Speed in busy periods, assurance on critical projects.',
    },
    bestFor: {
      tr: 'Teslim tarihine yetişmesi gereken şirketler ve kurum içi yazılım ekipleri',
      en: 'Companies facing a deadline and in-house software teams',
    },
    includes: {
      tr: [
        'Saatlik, günlük ya da uzun dönem çalışma',
        'Ekibinizin araç ve süreçlerine hızlı uyum',
        'Kalıcı kalite: testler ve dokümantasyon',
      ],
      en: [
        'Hourly, daily or long-term engagement',
        'Quick fit with your tools and processes',
        'Lasting quality: tests and documentation',
      ],
    },
    tech: ['React', 'Next.js', 'TypeScript'],
  },
];
