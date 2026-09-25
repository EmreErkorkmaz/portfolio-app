import type { ServiceIcon } from './services';

// Minimal 24×24 stroke icons (they follow currentColor).
export const icons: Record<ServiceIcon, string> = {
  web: 'M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01',
  store: 'M4 7h16l-1.2 11.1a2 2 0 0 1-2 1.9H7.2a2 2 0 0 1-2-1.9zM9 10V6a3 3 0 0 1 6 0v4',
  mobile: 'M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2',
  improve: 'M4 18a8 8 0 1 1 16 0M12 18l4-6M4 18h2M18 18h2M12 6v2M6.3 8.3l1.4 1.4M17.7 8.3l-1.4 1.4',
  rocket:
    'M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M9 12a22 22 0 0 1 11-9c0 3-1 8-9 11zM9 12H4s.5-3 2-4 5 0 5 0M12 15v5s3-.5 4-2 0-5 0-5',
  team: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.1a4 4 0 0 1 0 7.8M22 21v-1a6 6 0 0 0-4-5.7',
};
