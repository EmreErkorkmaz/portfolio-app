import type { Localized } from '../i18n/ui';

// Capability pillars for technical readers (CTOs, tech leads, recruiters). Kept short on
// purpose: one sentence per pillar that says what it delivers, frameworks only as a small
// "ecosystem" line. No per-item tags, skill levels or niche libraries.
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
      tr: 'Web ve mobilde hızlı açılan, arama motorlarında görünen ve büyüdükçe bakımı kolay kalan arayüzler.',
      en: 'Web and mobile interfaces that load fast, rank in search and stay maintainable as they grow.',
    },
    ecosystem: ['React', 'Vue', 'Angular', 'Next.js', 'Astro', 'React Native', 'TypeScript'],
  },
  {
    id: 'backend',
    title: { tr: 'Backend ve API', en: 'Backend & APIs' },
    body: {
      tr: 'Güvenli ve ölçeklenebilir servisler, doğru modellenmiş veri ve arayüzü asla bekletmeyen API’ler.',
      en: 'Secure, scalable services, well-modelled data and APIs that never keep the interface waiting.',
    },
    ecosystem: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'cloud',
    title: { tr: 'Bulut ve kalite', en: 'Cloud & quality' },
    body: {
      tr: 'Her değişikliği otomatik test edip güvenle yayına alan, izlenebilir ve güvenli bir teslimat hattı.',
      en: 'A delivery pipeline that tests and ships every change automatically, observable and secure.',
    },
    ecosystem: ['Docker', 'GitHub Actions', 'AWS', 'Cloudflare', 'Playwright', 'Jest'],
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
