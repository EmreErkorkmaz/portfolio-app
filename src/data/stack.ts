import type { Localized } from '../i18n/ui';

// Levels mirror Notion "master_cv.json" skills. "learning" items are only shown in the
// "currently learning" line, never as a strength.
export type Level = 'expert' | 'advanced' | 'intermediate';

export interface StackGroup {
  id: string;
  title: Localized;
  items: { name: string; level: Level }[];
}

export const stack: StackGroup[] = [
  {
    id: 'frontend',
    title: { tr: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Redux / Redux Saga', level: 'advanced' },
      { name: 'Angular', level: 'intermediate' },
      { name: 'GraphQL', level: 'intermediate' },
    ],
  },
  {
    id: 'mobile',
    title: { tr: 'Mobil', en: 'Mobile' },
    items: [
      { name: 'PWA', level: 'advanced' },
      { name: 'React Native', level: 'intermediate' },
    ],
  },
  {
    id: 'ui',
    title: { tr: 'UI & Design System', en: 'UI & Design Systems' },
    items: [
      { name: 'Design Systems', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'shadcn/ui', level: 'advanced' },
      { name: 'Base UI', level: 'advanced' },
      { name: 'Storybook', level: 'advanced' },
      { name: 'Material UI', level: 'advanced' },
      { name: 'npm publishing', level: 'advanced' },
      { name: 'Ant Design', level: 'intermediate' },
      { name: 'Styled-Components / Sass', level: 'intermediate' },
    ],
  },
  {
    id: 'backend',
    title: { tr: 'Backend & Veri', en: 'Backend & Data' },
    items: [
      { name: 'Node.js', level: 'intermediate' },
      { name: 'NestJS', level: 'intermediate' },
      { name: 'Express', level: 'intermediate' },
      { name: 'REST APIs', level: 'intermediate' },
      { name: 'WebSockets', level: 'intermediate' },
      { name: 'OAuth / JWT', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
    ],
  },
  {
    id: 'testing',
    title: { tr: 'Test', en: 'Testing' },
    items: [
      { name: 'Playwright', level: 'advanced' },
      { name: 'Cypress', level: 'intermediate' },
      { name: 'React Testing Library', level: 'intermediate' },
      { name: 'Mock Service Worker', level: 'intermediate' },
      { name: 'Jest', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    title: { tr: 'DevOps & Araçlar', en: 'DevOps & Tools' },
    items: [
      { name: 'Git', level: 'advanced' },
      { name: 'Claude / Copilot', level: 'advanced' },
      { name: 'GitHub Actions', level: 'intermediate' },
      { name: 'Docker', level: 'intermediate' },
    ],
  },
];

export const learning = ['Java', 'Spring Boot', 'AWS'];
