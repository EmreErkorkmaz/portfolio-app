// Renders the anonymised CV (public/cv-emre-erkorkmaz.pdf) with a local Chrome.
// Run with: npm run cv   (set CHROME_PATH if Chrome is not in the default macOS location)
//
// Content source: Notion "master_cv.json", anonymised like the site: no company or
// product names, no phone number. The HTML is checked against the private blocklist
// (.privacy-blocklist or PRIVACY_BLOCKLIST) before the PDF is written, because
// verify:privacy does not read PDFs.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const out = resolve('public/cv-emre-erkorkmaz.pdf');
const chrome =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Contact details come from the site config so the CV never drifts from the site.
const siteTs = readFileSync('src/data/site.ts', 'utf8');
const field = (name) => siteTs.match(new RegExp(`${name}: '([^']+)'`))?.[1] ?? '';
const email = field('email');
const linkedin = field('linkedin');
const github = field('github');

const cv = {
  name: 'Emre Erkorkmaz',
  title: 'Senior Frontend / Full-Stack Engineer (React, TypeScript, Node.js)',
  // No location on the CV (master_cv.json location_note).
  contact: [
    'Remote contracts',
    email,
    'emreerkorkmaz.dev',
    linkedin.replace('https://www.', ''),
    github.replace('https://', ''),
  ],
  summary:
    'Frontend-led full-stack engineer building production React and TypeScript products since 2021, together with the Node.js endpoints they depend on. On a quick-commerce platform, owned the order flow of a PWA handling millions of daily orders and added a generic proxy to the Node.js BFF that removed a deploy-and-test step from every new endpoint. Ramps up quickly on unfamiliar codebases and delivers to deadlines; available for remote contracts, hourly or daily.',
  experience: [
    {
      role: 'Software Engineer II, Frontend',
      org: 'Quick commerce and food delivery (food, local-shops and water apps)',
      dates: 'May 2023 – Sep 2026',
      bullets: [
        'Owned the order life-cycle flow of a PWA handling millions of daily orders: a REST snapshot on load, WebSocket events for new orders and status changes, and a connection-state indicator with manual refetch instead of polling.',
        'Integrated the PWA into native mobile webviews, decoupling web releases from mobile code freezes and enabling native features such as push notifications for business partners.',
        'Unblocked frontend delivery by building the REST API endpoints it depended on with Node.js and Express, and added a generic proxy endpoint to the BFF so new gateway endpoints no longer required BFF code changes.',
        'Migrated legacy Redux Saga data flows to Redux Toolkit Query, caching paginated tables and search filters so revisited pages loaded from cache, with targeted invalidation on mutations.',
        'Contributed to a centralized component library built on shadcn/ui and Base UI, published as external npm packages with a Tailwind CSS plugin exported from the same package, and documented in Storybook.',
        'Set up an AI-assisted workflow (Claude, GitHub Copilot) for generating standardized components on the design system, cutting the time to add a component from about two hours to about ten minutes.',
        'Was the technical point of contact for a vendor integrating an AI-powered live chat into the customer web app, defining how chat history and triggers were exchanged; the live chat cut support costs by 80%.',
        'Built reusable Playwright utilities (login/logout, route navigation) so the QA team could reach any page directly and focus on end-to-end scenarios.',
      ],
    },
    {
      role: 'Frontend Developer',
      org: 'Online brokerage (fintech)',
      dates: 'Jun 2021 – Jan 2023',
      bullets: [
        'Built multilingual B2C and B2B trading applications with React and Angular, rendering real-time, large-scale market data without frontend pagination.',
        'Built a config-driven form layer (React, TypeScript, Formik, Yup, Material UI) that let backend-focused developers ship complex, validated form pages from a typed config, including dependent fields.',
        'Wrote unit tests with React Testing Library and Mock Service Worker; introduced Cypress for end-to-end testing.',
      ],
    },
    {
      role: 'Frontend Developer',
      org: 'Software company (e-commerce and survey products)',
      dates: 'Mar 2021 – Jun 2021',
      bullets: [
        'Developed a multilingual e-commerce application with server-side rendering using Next.js, TypeScript and Redux.',
        'Delivered a survey product with React and GraphQL; turned responsive designs into semantic HTML.',
      ],
    },
  ],
  // Only skills master_cv.json marks show: 'always' and that the bullets above back up.
  skills: [
    [
      'Frontend',
      'TypeScript, JavaScript, React, Next.js (SSR), Angular, PWA, Redux (Redux Saga, RTK Query), HTML5 / CSS3',
    ],
    [
      'UI & design systems',
      'Design systems, shadcn/ui, Base UI, Tailwind CSS, Material UI, Storybook, npm packages',
    ],
    ['Backend & APIs', 'Node.js, Express, REST APIs, GraphQL, WebSockets, PostgreSQL'],
    ['Testing', 'Playwright, Cypress, React Testing Library, Jest'],
    [
      'Tooling & AI',
      'Git, Docker, CI/CD (GitHub Actions), AI-assisted development (Claude, GitHub Copilot)',
    ],
  ],
  education: 'B.Sc. Computer Engineering, Sakarya University, 2020',
  languages: 'English (C2), Turkish (native)',
  note: 'Company names are withheld for confidentiality and shared on request, together with references.',
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(cv.name)} — CV</title>
<style>
  @page { size: A4; margin: 12mm 15mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font: 9.3pt/1.42 "Helvetica Neue", Helvetica, Arial, sans-serif; color: #17161c; }
  h1 { font-size: 22pt; letter-spacing: -0.02em; line-height: 1.1; }
  .title { font-size: 11.5pt; color: #d9542c; font-weight: 600; margin-top: 2pt; }
  .contact { display: flex; flex-wrap: wrap; gap: 2pt 10pt; margin-top: 6pt; color: #55535e; font-size: 8.8pt; }
  h2 { font-size: 8.4pt; text-transform: uppercase; letter-spacing: 0.12em; color: #55535e;
       border-bottom: 1px solid #e3e1da; padding-bottom: 3pt; margin: 9pt 0 4pt; break-after: avoid; }
  .job { margin-bottom: 6pt; break-inside: avoid; }
  .job header { display: flex; justify-content: space-between; gap: 12pt; }
  .role { font-weight: 700; }
  .org { color: #55535e; }
  .dates { color: #55535e; white-space: nowrap; }
  ul { margin: 3pt 0 0 12pt; }
  li { margin-bottom: 1.5pt; }
  .skills { display: grid; grid-template-columns: 34mm 1fr; gap: 3pt 8pt; }
  .skills dt { font-weight: 700; }
  .note { margin-top: 10pt; color: #55535e; font-size: 8.4pt; }
</style>
</head>
<body>
  <h1>${esc(cv.name)}</h1>
  <p class="title">${esc(cv.title)}</p>
  <p class="contact">${cv.contact.map((c) => `<span>${esc(c)}</span>`).join('')}</p>

  <h2>Summary</h2>
  <p>${esc(cv.summary)}</p>

  <h2>Experience</h2>
  ${cv.experience
    .map(
      (j) => `<section class="job">
    <header><p><span class="role">${esc(j.role)}</span> · <span class="org">${esc(j.org)}</span></p><p class="dates">${esc(j.dates)}</p></header>
    <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
  </section>`,
    )
    .join('\n  ')}

  <h2>Skills</h2>
  <dl class="skills">${cv.skills.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>

  <h2>Education & languages</h2>
  <p>${esc(cv.education)} · ${esc(cv.languages)}</p>

  <p class="note">${esc(cv.note)}</p>
</body>
</html>`;

// Same matching rules as tools/verify-privacy.mjs.
const raw =
  process.env.PRIVACY_BLOCKLIST ??
  (existsSync('.privacy-blocklist') ? readFileSync('.privacy-blocklist', 'utf8') : '');
const terms = raw
  .split(/[\n,]/)
  .map((t) => t.trim())
  .filter(Boolean);
if (terms.length === 0) {
  console.error(
    'generate-cv: no blocklist found. Set PRIVACY_BLOCKLIST or create .privacy-blocklist.',
  );
  process.exit(1);
}
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hits = terms
  .map((t, i) => ({
    i,
    re: new RegExp(
      `(?<![\\p{L}\\p{N}])${escapeRe(t).replace(/\s+/g, '\\s*')}(?![\\p{L}\\p{N}])`,
      'iu',
    ),
  }))
  .filter(({ re }) => re.test(html));
if (hits.length) {
  console.error(`generate-cv: blocklist terms found: ${hits.map((h) => `#${h.i + 1}`).join(', ')}`);
  process.exit(1);
}

const dir = mkdtempSync(join(tmpdir(), 'cv-'));
const htmlPath = join(dir, 'cv.html');
writeFileSync(htmlPath, html);
try {
  execFileSync(
    chrome,
    [
      '--headless',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${out}`,
      `file://${htmlPath}`,
    ],
    { stdio: 'ignore' },
  );
} finally {
  rmSync(dir, { recursive: true, force: true });
}
console.log(out.replace(`${process.cwd()}/`, ''));
