import type { Localized } from '../i18n/ui';

export interface Service {
  id: string;
  icon: 'web' | 'mobile' | 'system' | 'api' | 'test' | 'ai';
  title: Localized;
  body: Localized;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'web',
    icon: 'web',
    title: { tr: 'Web uygulamaları', en: 'Web applications' },
    body: {
      tr: 'SSR veya statik, tek sayfa ya da çok dilli: hızlı açılan, SEO dostu ve büyüdükçe dağılmayan React / Next.js uygulamaları.',
      en: 'SSR or static, single page or multilingual: React / Next.js apps that load fast, rank well and stay coherent as they grow.',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Redux'],
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: { tr: 'Mobil & PWA', en: 'Mobile & PWA' },
    body: {
      tr: 'Kurulabilir PWA’lar, native uygulamalara gömülü web katmanları ve React Native ile tek kod tabanından iOS ve Android.',
      en: 'Installable PWAs, web layers embedded in native apps, and React Native for iOS and Android from a single codebase.',
    },
    tags: ['PWA', 'Webview', 'React Native'],
  },
  {
    id: 'system',
    icon: 'system',
    title: { tr: 'Design system', en: 'Design systems' },
    body: {
      tr: 'npm paketi olarak yayınlanan component kütüphaneleri, Tailwind plugin’leri ve Storybook dokümantasyonu. Tasarım ile kod arasında tek dil.',
      en: 'Component libraries published as npm packages, Tailwind plugins and Storybook docs. One shared language between design and code.',
    },
    tags: ['shadcn/ui', 'Base UI', 'Tailwind', 'Storybook'],
  },
  {
    id: 'api',
    icon: 'api',
    title: { tr: 'Backend & API', en: 'Backend & APIs' },
    body: {
      tr: 'Frontend’i bekletmeyen REST ve GraphQL uçları; kimlik doğrulama, gerçek zamanlı veri ve üçüncü parti entegrasyonları.',
      en: 'REST and GraphQL endpoints that unblock the frontend; authentication, real-time data and third-party integrations.',
    },
    tags: ['Node.js', 'NestJS', 'Express', 'GraphQL'],
  },
  {
    id: 'test',
    icon: 'test',
    title: { tr: 'Test & kalite', en: 'Testing & quality' },
    body: {
      tr: 'Uçtan uca Playwright pipeline’ları, component ve entegrasyon testleri. Her release’e güvenle çıkmak için.',
      en: 'End-to-end Playwright pipelines, component and integration tests. So every release ships with confidence.',
    },
    tags: ['Playwright', 'Cypress', 'RTL', 'MSW'],
  },
  {
    id: 'ai',
    icon: 'ai',
    title: { tr: 'AI destekli geliştirme', en: 'AI-assisted delivery' },
    body: {
      tr: 'Claude ve Copilot’u design system üzerine kurulu, standartlara uyan kod üretecek şekilde ekibinizin akışına entegre ediyorum.',
      en: 'I wire Claude and Copilot into your team’s workflow so they generate standards-compliant code on top of your design system.',
    },
    tags: ['Claude', 'GitHub Copilot'],
  },
];
