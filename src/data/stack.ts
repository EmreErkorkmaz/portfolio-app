import type { Localized } from '../i18n/ui';

// Capability areas for technical readers (CTOs, tech leads, recruiters). Deliberately
// broad: disciplines the industry values, with only the widely recognised technologies
// named. No per-item skill levels and no niche libraries (e.g. shadcn/ui, MSW).
export interface Capability {
  id: string;
  title: Localized;
  body: Localized;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    id: 'frontend',
    title: { tr: 'Frontend mimarisi', en: 'Frontend architecture' },
    body: {
      tr: 'Ölçeklenen, bakımı kolay ve hızlı arayüzler: component mimarisi, state yönetimi, SSR/SSG ve design system’ler.',
      en: 'Scalable, maintainable and fast interfaces: component architecture, state management, SSR/SSG and design systems.',
    },
    items: ['React', 'Next.js', 'TypeScript', 'Angular', 'Design systems'],
  },
  {
    id: 'backend',
    title: { tr: 'Backend ve API tasarımı', en: 'Backend & API design' },
    body: {
      tr: 'REST ve GraphQL API’ler, kimlik doğrulama, gerçek zamanlı iletişim ve servisler arası entegrasyon.',
      en: 'REST and GraphQL APIs, authentication, real-time communication and service-to-service integration.',
    },
    items: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'REST', 'GraphQL', 'WebSockets'],
  },
  {
    id: 'data',
    title: { tr: 'Veri ve sistem tasarımı', en: 'Data & system design' },
    body: {
      tr: 'İlişkisel ve NoSQL veritabanları, önbellekleme, mesaj kuyrukları ve mikroservis mimarisi.',
      en: 'Relational and NoSQL databases, caching, message queues and microservice architecture.',
    },
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Microservices'],
  },
  {
    id: 'mobile',
    title: { tr: 'Mobil', en: 'Mobile' },
    body: {
      tr: 'Tek kod tabanından iOS ve Android uygulamaları, kurulabilir web uygulamaları ve native entegrasyonlar.',
      en: 'iOS and Android apps from one codebase, installable web apps and native integrations.',
    },
    items: ['React Native', 'PWA', 'Webview integration'],
  },
  {
    id: 'quality',
    title: { tr: 'Kalite ve performans', en: 'Quality & performance' },
    body: {
      tr: 'Uçtan uca test otomasyonu, Core Web Vitals odaklı performans, erişilebilirlik (WCAG) ve teknik SEO.',
      en: 'End-to-end test automation, Core Web Vitals-driven performance, accessibility (WCAG) and technical SEO.',
    },
    items: ['Playwright', 'Cypress', 'Jest', 'Core Web Vitals', 'Accessibility'],
  },
  {
    id: 'devops',
    title: { tr: 'DevOps, bulut ve güvenlik', en: 'DevOps, cloud & security' },
    body: {
      tr: 'Container’lar, CI/CD pipeline’ları, bulut dağıtımı, gözlemlenebilirlik ve güvenli kimlik doğrulama.',
      en: 'Containers, CI/CD pipelines, cloud deployment, observability and secure authentication.',
    },
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS', 'Cloudflare', 'OAuth / JWT'],
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
