import type { Localized } from '../i18n/ui';

export type ServiceIcon =
  'web' | 'store' | 'mobile' | 'improve' | 'system' | 'api' | 'test' | 'ai' | 'team';

// First layer: what a business owner buys, in their words. Technology is a footnote.
export interface Service {
  id: string;
  icon: ServiceIcon;
  title: Localized;
  body: Localized;
  includes: Localized<string[]>;
  tech: string[];
}

export const services: Service[] = [
  {
    id: 'website',
    icon: 'web',
    title: { tr: 'Kurumsal web sitesi', en: 'Business website' },
    body: {
      tr: 'İşletmenizi en iyi şekilde anlatan, hızlı açılan ve Google’da bulunan bir site. Ziyaretçiyi müşteriye dönüştürmek için tasarlanır.',
      en: 'A site that presents your business at its best, loads fast and gets found on Google. Built to turn visitors into customers.',
    },
    includes: {
      tr: [
        'Telefonda ve bilgisayarda kusursuz görünüm',
        'Google’da görünürlük ayarları',
        'İsterseniz birden fazla dil',
      ],
      en: [
        'Looks great on phones and desktops',
        'Set up to be found on Google',
        'Multiple languages if you need them',
      ],
    },
    tech: ['Next.js', 'Astro', 'TypeScript'],
  },
  {
    id: 'store',
    icon: 'store',
    title: { tr: 'Online mağaza', en: 'Online store' },
    body: {
      tr: 'Ürünlerinizi internetten satmanız için vitrin, sepet ve ödeme. Hızlı açılan sayfalar daha çok satış demektir.',
      en: 'A storefront, cart and checkout so you can sell online. Faster pages mean more sales.',
    },
    includes: {
      tr: [
        'Ürün vitrini ve arama',
        'Sepet ve ödeme altyapısı bağlantısı',
        'Arama motorlarında bulunan ürün sayfaları',
      ],
      en: [
        'Product catalogue and search',
        'Cart and payment provider integration',
        'Product pages that rank in search',
      ],
    },
    tech: ['Next.js', 'SSR', 'TypeScript'],
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: { tr: 'Mobil uygulama', en: 'Mobile app' },
    body: {
      tr: 'Müşterilerinizin cebinde olun. iPhone ve Android için tek seferde geliştirilen uygulamalar ya da telefona kurulabilen web uygulamaları.',
      en: 'Be in your customers’ pockets. Apps built once for both iPhone and Android, or web apps people can install on their phone.',
    },
    includes: {
      tr: [
        'iPhone ve Android için tek geliştirme',
        'Bildirim gibi telefon özellikleri',
        'Uygulama mağazası yerine kurulabilen web uygulaması seçeneği',
      ],
      en: [
        'One build for iPhone and Android',
        'Phone features such as notifications',
        'Installable web app as an app-store alternative',
      ],
    },
    tech: ['React Native', 'PWA', 'TypeScript'],
  },
  {
    id: 'improve',
    icon: 'improve',
    title: { tr: 'Mevcut yazılımı iyileştirme', en: 'Improve existing software' },
    body: {
      tr: 'Siteniz ya da uygulamanız yavaş mı, hata mı veriyor, yeni özelliğe mi ihtiyaç var? Olanı çöpe atmadan hızlandırır, düzeltir ve geliştiririm.',
      en: 'Is your site or app slow, buggy or missing features? I speed it up, fix it and extend it without throwing away what works.',
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
];

// Second layer: services for engineering teams, shown in the "For technical teams" section.
export interface TechService {
  id: string;
  icon: ServiceIcon;
  title: Localized;
  body: Localized;
  tags: string[];
}

export const techServices: TechService[] = [
  {
    id: 'team',
    icon: 'team',
    title: { tr: 'Ekibinize katılım', en: 'Team augmentation' },
    body: {
      tr: 'Mevcut ekibinize sözleşmeli, kıdemli bir frontend / full-stack mühendis olarak katılırım.',
      en: 'I join your existing team as a contract senior frontend / full-stack engineer.',
    },
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 'system',
    icon: 'system',
    title: { tr: 'Design system', en: 'Design systems' },
    body: {
      tr: 'npm paketi olarak yayınlanan component kütüphaneleri, Tailwind plugin’leri ve Storybook dokümantasyonu.',
      en: 'Component libraries published as npm packages, Tailwind plugins and Storybook docs.',
    },
    tags: ['shadcn/ui', 'Base UI', 'Tailwind', 'Storybook'],
  },
  {
    id: 'api',
    icon: 'api',
    title: { tr: 'Backend & API', en: 'Backend & APIs' },
    body: {
      tr: 'Frontend’i bekletmeyen REST ve GraphQL uçları, kimlik doğrulama ve gerçek zamanlı veri.',
      en: 'REST and GraphQL endpoints that unblock the frontend, authentication and real-time data.',
    },
    tags: ['Node.js', 'NestJS', 'Express', 'GraphQL'],
  },
  {
    id: 'test',
    icon: 'test',
    title: { tr: 'Test altyapısı', en: 'Test infrastructure' },
    body: {
      tr: 'Uçtan uca Playwright pipeline’ları, component ve entegrasyon testleri.',
      en: 'End-to-end Playwright pipelines, component and integration tests.',
    },
    tags: ['Playwright', 'Cypress', 'RTL', 'MSW'],
  },
  {
    id: 'ai',
    icon: 'ai',
    title: { tr: 'AI destekli geliştirme', en: 'AI-assisted delivery' },
    body: {
      tr: 'Claude ve Copilot’u design system üzerine standart kod üretecek şekilde ekip akışına entegre ederim.',
      en: 'I wire Claude and Copilot into team workflows to generate standards-compliant code on top of the design system.',
    },
    tags: ['Claude', 'GitHub Copilot'],
  },
];
