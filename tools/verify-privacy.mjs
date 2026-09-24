// Fails the build if private strings (former employer names, phone number) leak into dist/.
// The site presents anonymised case studies only.
//
// The blocklist itself is private, so it is not committed. It is read from:
//   1. the PRIVACY_BLOCKLIST env var (CI: a GitHub Actions secret), or
//   2. a local, git-ignored .privacy-blocklist file.
// One term per line (or comma-separated). Terms match as whole words, case-insensitive;
// whitespace inside a term matches any whitespace, so "555 123" also catches "555  123".
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const raw =
  process.env.PRIVACY_BLOCKLIST ??
  (existsSync('.privacy-blocklist') ? readFileSync('.privacy-blocklist', 'utf8') : '');

const terms = raw
  .split(/[\n,]/)
  .map((t) => t.trim())
  .filter(Boolean);

if (terms.length === 0) {
  console.error(
    'verify-privacy: no blocklist found. Set PRIVACY_BLOCKLIST or create .privacy-blocklist.',
  );
  process.exit(1);
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const forbidden = terms.map(
  (t) =>
    new RegExp(`(?<![\\p{L}\\p{N}])${escape(t).replace(/\s+/g, '\\s*')}(?![\\p{L}\\p{N}])`, 'iu'),
);
const textExt = /\.(html|xml|txt|js|css|json|svg)$/;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (textExt.test(name)) yield path;
  }
}

const hits = [];
for (const file of walk('dist')) {
  const content = readFileSync(file, 'utf8');
  forbidden.forEach((re, i) => {
    // Report the index, not the term, so CI logs never echo the private value.
    if (re.test(content)) hits.push(`${file}: blocklist term #${i + 1}`);
  });
}

if (hits.length) {
  console.error('Private strings found in build output:\n' + hits.join('\n'));
  process.exit(1);
}
console.log(`verify-privacy: ok (${terms.length} terms checked)`);
