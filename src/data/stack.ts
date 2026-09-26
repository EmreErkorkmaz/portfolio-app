import type { Localized } from '../i18n/ui';

// Capability pillars for technical readers (CTOs, tech leads, agencies). One sentence per
// pillar on what it delivers, then an "ecosystem" line of widely recognised technologies
// the owner has confirmed. No skill levels, no niche libraries. Java/Spring Boot
// ("learning but available" in Notion) and Go stay in these lists only, never in
// headlines or summaries. An AI pillar is
// added only when it is backed by finished projects (see src/data/ai.ts).
export interface Capability {
  id: string;
  title: Localized;
  body: Localized;
  ecosystem: string[];
}

export const capabilities: Capability[] = [
  {
    id: 'frontend',
    title: { tr: 'Frontend ve performans', en: 'Frontend & performance' },
    body: {
      tr: 'Yüksek trafikli ürünler için sürdürülebilir arayüz mimarisi: design system’ler, PWA’lar, SSR ve gerçek zamanlı veri; hızlı ve güvenli kalan sayfalar.',
      en: 'Maintainable UI architecture for high-traffic products: design systems, PWAs, SSR and real-time data, with pages that stay fast and secure.',
    },
    ecosystem: [
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Vue',
      'Redux',
      'Tailwind CSS',
      'Storybook',
    ],
  },
  {
    id: 'backend',
    title: { tr: 'Backend ve API', en: 'Backend & APIs' },
    body: {
      tr: 'Bir özelliğin ihtiyaç duyduğu API’ler ve servisler; onları kullanacak arayüzle birlikte tasarlanmış.',
      en: 'The APIs and services a feature depends on, designed together with the interface that consumes them.',
    },
    ecosystem: [
      'Node.js',
      'Express',
      'NestJS',
      'GraphQL',
      'REST',
      'WebSockets',
      'PostgreSQL',
      'MongoDB',
      'Go (Fiber)',
      'Java / Spring Boot',
    ],
  },
  {
    id: 'delivery',
    title: { tr: 'Test ve teslimat', en: 'Testing & delivery' },
    body: {
      tr: 'Pipeline’a bağlı birim, entegrasyon ve uçtan uca testler; değişiklikler güvenle yayına çıkar.',
      en: 'Unit, integration and end-to-end tests wired into the pipeline, so changes ship with confidence.',
    },
    ecosystem: ['Playwright', 'Cypress', 'React Testing Library', 'Docker', 'Git'],
  },
];

// How the work gets done; shown as a single line under the capability grid.
export const practices: Localized<string[]> = {
  tr: [
    'Code review',
    'Otomatik testler',
    'Dokümantasyon',
    'AI destekli geliştirme',
    'Uzaktan, asenkron çalışma',
    'Agile / Scrum',
  ],
  en: [
    'Code review',
    'Automated testing',
    'Documentation',
    'AI-assisted development',
    'Remote, async collaboration',
    'Agile / Scrum',
  ],
};
