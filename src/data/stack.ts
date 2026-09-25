import type { Localized } from '../i18n/ui';

// Capability areas for technical readers (CTOs, tech leads, recruiters). Lead with what a
// capability delivers (SSR, real-time, event-driven...), not with framework names; the
// frameworks are a secondary "ecosystem" line. No per-item skill levels, no niche libraries.
export interface Capability {
  id: string;
  title: Localized;
  body: Localized;
  items: Localized<string[]>;
  ecosystem: string[];
}

export const capabilities: Capability[] = [
  {
    id: 'frontend',
    title: { tr: 'Frontend mimarisi', en: 'Frontend architecture' },
    body: {
      tr: 'Hızlı açılan, arama motorlarında görünen ve büyüdükçe bakımı kolay kalan arayüzler.',
      en: 'Interfaces that load fast, rank in search and stay maintainable as they grow.',
    },
    items: {
      tr: [
        'SSR / SSG',
        'Tek sayfa uygulamalar (SPA)',
        'Component mimarisi',
        'State yönetimi',
        'Design system',
        'Çok dilli arayüzler',
      ],
      en: [
        'SSR / SSG',
        'Single-page apps (SPA)',
        'Component architecture',
        'State management',
        'Design systems',
        'Internationalisation',
      ],
    },
    ecosystem: ['React', 'Vue', 'Angular', 'Next.js', 'Astro', 'TypeScript'],
  },
  {
    id: 'backend',
    title: { tr: 'Backend ve API tasarımı', en: 'Backend & API design' },
    body: {
      tr: 'Güvenli, ölçeklenebilir ve iyi belgelenmiş servisler; arayüzü asla bekletmeyen API’ler.',
      en: 'Secure, scalable, well-documented services and APIs that never keep the interface waiting.',
    },
    items: {
      tr: [
        'REST ve GraphQL API',
        'Gerçek zamanlı iletişim',
        'Kimlik doğrulama ve yetkilendirme',
        'Olay tabanlı mimari',
        'Mikroservisler',
        'Üçüncü parti entegrasyonlar',
      ],
      en: [
        'REST & GraphQL APIs',
        'Real-time communication',
        'Authentication & authorisation',
        'Event-driven architecture',
        'Microservices',
        'Third-party integrations',
      ],
    },
    ecosystem: ['Node.js', 'NestJS', 'Express', 'Java', 'Spring Boot'],
  },
  {
    id: 'data',
    title: { tr: 'Veri ve sistem tasarımı', en: 'Data & system design' },
    body: {
      tr: 'Veriyi doğru modelleyen, yük altında hızını koruyan ve arıza anında ayakta kalan sistemler.',
      en: 'Systems that model data well, stay fast under load and keep running when parts fail.',
    },
    items: {
      tr: [
        'İlişkisel veritabanları (SQL)',
        'NoSQL',
        'Önbellekleme',
        'Mesaj kuyrukları',
        'Veri modelleme',
        'Dayanıklılık (retry, timeout)',
      ],
      en: [
        'Relational databases (SQL)',
        'NoSQL',
        'Caching',
        'Message queues',
        'Data modelling',
        'Resilience (retries, timeouts)',
      ],
    },
    ecosystem: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
  },
  {
    id: 'mobile',
    title: { tr: 'Mobil', en: 'Mobile' },
    body: {
      tr: 'Tek kod tabanından iOS ve Android; mağaza gerektirmeyen, kurulabilir web uygulamaları.',
      en: 'iOS and Android from one codebase, plus installable web apps with no app store required.',
    },
    items: {
      tr: [
        'Cross-platform uygulama',
        'PWA ve çevrimdışı çalışma',
        'Push bildirimleri',
        'Native entegrasyon',
      ],
      en: [
        'Cross-platform apps',
        'PWA & offline support',
        'Push notifications',
        'Native integration',
      ],
    },
    ecosystem: ['React Native', 'Expo', 'PWA'],
  },
  {
    id: 'quality',
    title: { tr: 'Kalite ve performans', en: 'Quality & performance' },
    body: {
      tr: 'Her sürümde güvenle yayına çıkan, herkesin kullanabildiği ve hızlı açılan ürünler.',
      en: 'Products that ship every release with confidence, work for everyone and load fast.',
    },
    items: {
      tr: [
        'Uçtan uca test otomasyonu',
        'Birim ve entegrasyon testleri',
        'Core Web Vitals',
        'Erişilebilirlik (WCAG)',
        'Teknik SEO',
      ],
      en: [
        'End-to-end test automation',
        'Unit & integration tests',
        'Core Web Vitals',
        'Accessibility (WCAG)',
        'Technical SEO',
      ],
    },
    ecosystem: ['Playwright', 'Cypress', 'Jest', 'Lighthouse'],
  },
  {
    id: 'devops',
    title: { tr: 'DevOps, bulut ve güvenlik', en: 'DevOps, cloud & security' },
    body: {
      tr: 'Her değişikliği otomatik test edip güvenle yayına alan, izlenebilir ve güvenli altyapı.',
      en: 'Infrastructure that tests and ships every change automatically, observable and secure.',
    },
    items: {
      tr: [
        'Container’lar',
        'CI/CD',
        'Bulut dağıtımı',
        'CDN ve edge',
        'Gözlemlenebilirlik',
        'Uygulama güvenliği',
      ],
      en: [
        'Containers',
        'CI/CD',
        'Cloud deployment',
        'CDN & edge',
        'Observability',
        'Application security',
      ],
    },
    ecosystem: ['Docker', 'GitHub Actions', 'AWS', 'Cloudflare'],
  },
];

// How the work gets done; shown as a single line under the capability grid.
export const practices: Localized<string[]> = {
  tr: [
    'Agile / Scrum',
    'Code review',
    'Test odaklı teslimat',
    'Dokümantasyon',
    'AI destekli geliştirme',
    'Uzaktan ekip çalışması',
  ],
  en: [
    'Agile / Scrum',
    'Code review',
    'Test-driven delivery',
    'Documentation',
    'AI-assisted development',
    'Remote collaboration',
  ],
};
