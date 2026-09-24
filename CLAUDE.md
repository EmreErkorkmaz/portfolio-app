# Project notes for agents

- Static Astro 7 site, bilingual (EN default at `/`, TR at `/tr/`). All copy lives in `src/data/*` and `src/i18n/ui.ts`.
- Language: an inline script on `/` only sends visitors to `/tr/` when their saved choice (`localStorage.lang`, set by the nav switch) or, failing that, their primary browser language is Turkish. `/tr/` never redirects.
- Content source of truth: the Notion page "master_cv.json". Follow its skill levels and notes. Java, Spring Boot, AWS and Go are "learning"/basic, so never put them in headlines or summaries.
- Positioning: freelance/contract. Never name former employers or publish the phone number (see Notion master_cv.json). `npm run verify:privacy` enforces this on `dist/` using a private blocklist: the git-ignored `.privacy-blocklist` file locally, the `PRIVACY_BLOCKLIST` secret in CI. Never commit the blocklist terms.
- Keep `vite.build.cssMinify: 'esbuild'`. Lightning CSS merges `animation-timeline` into the `animation` shorthand, which breaks every scroll-driven animation.
- No inline `style="..."` attributes: the Astro CSP (`security.csp`) only hashes `<style>`/`<script>` blocks. Use data attributes (e.g. `data-i`) plus CSS.
- Motion must stay compositor-only (transform/opacity) and respect `prefers-reduced-motion`. GSAP loads at idle after `load`, only for the Process scene on screens ≥ 1024px. ScrollTrigger's setup cancels in-flight smooth anchor scrolls, and `main.ts` resumes them, so keep that logic when touching the scene.
- Zoom: pinch-zoom stays enabled (`touch-action: manipulation` only kills double-tap zoom). `user-scalable=no` / `maximum-scale` drops Lighthouse accessibility to 94 and breaks the CI threshold.
- Before merging, run `npm run check && npm run build && npm run verify:privacy && npm run lhci`.
