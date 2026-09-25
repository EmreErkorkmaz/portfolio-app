import type { ServiceIcon } from './services';

// Minimal 24×24 stroke icons (they follow currentColor).
export const icons: Record<ServiceIcon, string> = {
  web: 'M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01',
  store: 'M4 7h16l-1.2 11.1a2 2 0 0 1-2 1.9H7.2a2 2 0 0 1-2-1.9zM9 10V6a3 3 0 0 1 6 0v4',
  mobile: 'M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2',
  improve: 'M4 18a8 8 0 1 1 16 0M12 18l4-6M4 18h2M18 18h2M12 6v2M6.3 8.3l1.4 1.4M17.7 8.3l-1.4 1.4',
  rocket:
    'M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M9 12a22 22 0 0 1 11-9c0 3-1 8-9 11zM9 12H4s.5-3 2-4 5 0 5 0M12 15v5s3-.5 4-2 0-5 0-5',
  system: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM16.5 13v7M13 16.5h7',
  api: 'M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16',
  test: 'M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9',
  ai: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z',
  team: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.1a4 4 0 0 1 0 7.8M22 21v-1a6 6 0 0 0-4-5.7',
};
