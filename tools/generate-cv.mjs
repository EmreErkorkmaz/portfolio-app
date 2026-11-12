// Renders the anonymised CV (public/cv-emre-erkorkmaz.pdf) with a local Chrome.
// Run with: npm run cv   (set CHROME_PATH if Chrome is not in the default macOS location)
//
// Content source: career-ops cv.md + modes/_custom.md (was Notion "master_cv.json"), anonymised like the site: no company or
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
  title: 'Senior Full-Stack Engineer (React, TypeScript, Node.js)',
  // No location on the CV (career-ops modes/_profile.md location policy).
  contact: [
    'Remote contracts',
    email,
    'emreerkorkmaz.dev',
    linkedin.replace('https://www.', ''),
    github.replace('https://', ''),
  ],
  summary:
    'Full-stack engineer building React frontends and the Node.js services behind them since 2021, for a quick-commerce and food-delivery platform with millions of daily orders and an online brokerage with real-time trading. Brought onto critical, deadline-bound work and trusted with large inherited codebases. Available for remote contracts, hourly or daily.',
  competencies: [
    'React & TypeScript',
    'Node.js & Express',
    'REST APIs & BFF',
    'MongoDB & Redis',
    'Next.js (SSR)',
    'Docker & CI/CD (GitHub Actions)',
    'Playwright & React Testing Library',
    'AI-assisted development (Claude, GitHub Copilot)',
  ],
  experience: [
    {
      role: 'Software Engineer II, Frontend',
      org: 'Quick commerce and food delivery',
      dates: 'May 2023 – Sep 2026',
      bullets: [
        'Shipped across five teams and three verticals (food, local shops, water), on both merchant and admin panels, including two years full-stack on the restaurant order flow, which handles millions of daily orders.',
        "Maintained the team's Node.js BFF and services (Express, MongoDB, Redis), from new REST endpoints to security updates.",
        "Brought the restaurant app's order and menu pages to mobile (PWA, then native webview) ahead of deadline; recognised with an internal company award.",
        'Managed the technical side of an AI live chat integration with an external vendor; it cut customer-support costs by 80%.',
      ],
    },
    {
      role: 'Frontend Developer',
      org: 'Online brokerage (fintech)',
      dates: 'Jun 2021 – Jan 2023',
      bullets: [
        'Founding frontend engineer on critical new React projects, making their frontend architecture decisions.',
        'Built and optimised real-time trading features on large volumes of live market data, across React, Angular and AngularJS projects.',
        'Mentored junior developers and interviewed frontend candidates.',
      ],
    },
    {
      role: 'Frontend Developer',
      org: 'Software company (e-commerce and survey products)',
      dates: 'Mar 2021 – Jun 2021',
      bullets: [
        'Built the storefront of a multi-language e-commerce platform before launch (Next.js, SSR) and supported its admin panel.',
        'Delivered a survey product with a points-based reward system (React, GraphQL).',
      ],
    },
  ],
  projects: [
    [
      'emreerkorkmaz.dev',
      'Bilingual business site for client enquiries; Lighthouse 100 in all four categories, deployed automatically to Cloudflare Workers with a GitHub Actions build-and-audit check on every pull request.',
    ],
  ],
  // career-ops fullstack CV skills, minus Go and niche libraries (see CLAUDE.md).
  skills: [
    [
      'Frontend',
      'TypeScript, JavaScript, React, Next.js (SSR, Pages Router), PWA, Redux (Redux Saga, RTK Query), HTML5 / CSS3, Web accessibility (keyboard navigation, ARIA, semantic HTML)',
    ],
    ['UI', 'Tailwind CSS, Material UI'],
    ['Backend & APIs', 'Node.js, Express, REST APIs, GraphQL, WebSockets'],
    ['Data', 'MongoDB, Redis, PostgreSQL'],
    ['Testing', 'Playwright, Cypress, React Testing Library, Jest'],
    ['DevOps & cloud', 'Docker, CI/CD (GitHub Actions), Git (GitHub, GitLab, Bitbucket)'],
    ['AI', 'AI-assisted development (Claude, GitHub Copilot)'],
  ],
  education:
    'B.Sc. Computer Engineering, Sakarya University, Faculty of Computer and Information Sciences, 2020',
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

  <h2>Core competencies</h2>
  <p>${cv.competencies.map(esc).join(' • ')}</p>

  <h2>Experience</h2>
  ${cv.experience
    .map(
      (j) => `<section class="job">
    <header><p><span class="role">${esc(j.role)}</span> · <span class="org">${esc(j.org)}</span></p><p class="dates">${esc(j.dates)}</p></header>
    <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
  </section>`,
    )
    .join('\n  ')}

  <h2>Projects</h2>
  ${cv.projects.map(([k, v]) => `<p><span class="role">${esc(k)}</span> · ${esc(v)}</p>`).join('')}

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
