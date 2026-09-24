// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical origin. Update when a custom domain is attached in Cloudflare Pages.
const site = process.env.SITE_URL ?? 'https://emre-erkorkmaz.pages.dev';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', tr: 'tr-TR' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    // Single page, small stylesheet: inlining removes the render-blocking request.
    inlineStylesheets: 'always',
  },
  prefetch: false,
  markdown: { syntaxHighlight: false },
  vite: {
    build: {
      // Lightning CSS folds animation-timeline into the animation shorthand, which browsers
      // reject; esbuild keeps the longhands intact.
      cssMinify: 'esbuild',
    },
  },
  // Emits a <meta> CSP with hashes for every inline script and style Astro renders.
  security: { csp: true },
  fonts: [
    {
      // Weight-axis-only variable files (Fontsource, OFL). Latin-ext covers ğ, ş, İ.
      provider: fontProviders.local(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/bricolage-grotesque-latin-wght-normal.woff2'],
            weight: '200 800',
            style: 'normal',
            unicodeRange: [
              'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
            ],
          },
          {
            src: ['./src/assets/fonts/bricolage-grotesque-latin-ext-wght-normal.woff2'],
            weight: '200 800',
            style: 'normal',
            unicodeRange: [
              'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF',
            ],
          },
        ],
      },
    },
  ],
});
