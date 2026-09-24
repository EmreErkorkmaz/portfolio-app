// Single source for identity and contact details.
// Source of truth: Notion "master_cv.json" (basics). Phone is intentionally not published.
export const site = {
  name: 'Emre Erkorkmaz',
  email: 'erkorkmazemre77@gmail.com',
  linkedin: 'https://www.linkedin.com/in/emre-erkorkmaz-5b9628161',
  github: 'https://github.com/EmreErkorkmaz',
  location: { tr: 'Yalova, Türkiye', en: 'Yalova, Türkiye' },
  timezone: 'UTC+3',
  yearsOfExperience: 5,
  // Flip to false when fully booked; hides the availability badge copy.
  available: true,
} as const;
