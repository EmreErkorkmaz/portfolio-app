import type { Localized } from '../i18n/ui';

// AI product work. Add an item only once the project is finished and its repo or write-up
// is public: the section and its nav link render only while this list is non-empty.
// No "coming soon" entries, no invented metrics; `measured` states what was actually
// measured and how.
export interface AiProject {
  id: string;
  title: Localized;
  problem: Localized;
  architecture: Localized;
  measured: Localized;
  lessons: Localized;
  stack: string[];
  link: { href: string; label: Localized };
}

export const aiProjects: AiProject[] = [];
