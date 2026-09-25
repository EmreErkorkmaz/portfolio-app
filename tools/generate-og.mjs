// Renders the Open Graph cards (public/og-tr.png, public/og-en.png) from inline SVG.
// Run with: node tools/generate-og.mjs
import sharp from 'sharp';

const cards = {
  tr: {
    kicker: 'EMRE ERKORKMAZ · SERBEST YAZILIM GELİŞTİRİCİ',
    line1: 'Fikrinizi, çalışan bir',
    line2: 'yazılıma dönüştürüyorum.',
    tag: 'Yeni projelere açık',
    right: 'Web siteleri · Online mağazalar · Mobil',
  },
  en: {
    kicker: 'EMRE ERKORKMAZ · FREELANCE SOFTWARE DEVELOPER',
    line1: 'I turn your idea into',
    line2: 'a working product.',
    tag: 'Available for new projects',
    right: 'Websites · Online stores · Mobile apps',
  },
};

for (const [lang, c] of Object.entries(cards)) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="a" cx="85%" cy="10%" r="60%">
      <stop offset="0" stop-color="#ff6d40" stop-opacity=".55"/>
      <stop offset="1" stop-color="#ff6d40" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b" cx="5%" cy="100%" r="60%">
      <stop offset="0" stop-color="#9d8cff" stop-opacity=".45"/>
      <stop offset="1" stop-color="#9d8cff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="t" x1="0" x2="1">
      <stop offset="0" stop-color="#ff6d40"/>
      <stop offset="1" stop-color="#9d8cff"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b0b0f"/>
  <rect width="1200" height="630" fill="url(#a)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <g font-family="Helvetica Neue, Arial, sans-serif">
    <text x="80" y="120" fill="#a4a2ad" font-size="28" letter-spacing="1">${c.kicker}</text>
    <text x="76" y="315" fill="#f2f0ea" font-size="84" font-weight="700" letter-spacing="-3">${c.line1}</text>
    <text x="76" y="415" fill="url(#t)" font-size="84" font-weight="700" letter-spacing="-3">${c.line2}</text>
    <circle cx="94" cy="530" r="8" fill="#22c55e"/>
    <text x="116" y="540" fill="#f2f0ea" font-size="28">${c.tag}</text>
    <text x="1120" y="540" fill="#a4a2ad" font-size="26" text-anchor="end">${c.right}</text>
  </g>
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`public/og-${lang}.png`);
  console.log(`public/og-${lang}.png`);
}
