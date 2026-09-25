import type { Localized } from '../i18n/ui';

// Anonymised case studies derived from Notion "master_cv.json" experience bullets.
// Never add company or product names here; CI fails the build if they appear in dist/.
//
// Tone: outcome and capability, not a diary. Titles and summaries speak to what a client
// gets; `challenge` / `approach` (shown as "Need" / "Solution") stay factual and neutral.
// `title`, `summary` and `metric` are the plain first layer; `challenge`, `approach` and
// `stack` sit behind the "Technical details" disclosure.
export interface CaseStudy {
  id: string;
  sector: Localized;
  title: Localized;
  summary: Localized;
  metric: { value: Localized; label: Localized };
  challenge: Localized;
  approach: Localized;
  stack: string[];
}

export const cases: CaseStudy[] = [
  {
    id: 'restaurant-pwa',
    sector: { tr: 'Hızlı teslimat platformu', en: 'Quick-commerce platform' },
    title: {
      tr: 'Milyonlarca günlük siparişi taşıyan restoran uygulaması',
      en: 'A restaurant app carrying millions of daily orders',
    },
    summary: {
      tr: 'Restoranların sipariş akışını yöneten uygulamanın çekirdeği. Kesintisiz çalışma ve mobil uygulama takviminden bağımsız, hızlı yayın süreci.',
      en: 'The core of the app restaurants run their orders on. Uninterrupted operation and a fast release cycle, independent of the mobile app calendar.',
    },
    metric: {
      value: { tr: 'M+', en: 'M+' },
      label: { tr: 'günlük sipariş', en: 'daily orders' },
    },
    challenge: {
      tr: 'İş açısından kritik bir sipariş akışı; web sürümlerinin ise mobil uygulamaların yayın takvimine bağımlı olması.',
      en: 'A business-critical order flow, with web releases tied to the mobile apps’ release calendar.',
    },
    approach: {
      tr: 'PWA’nın istemci tarafı çekirdek mantığı ve sipariş yaşam döngüsü; native webview entegrasyonuyla web sürümlerinin mobil takvimden ayrılması ve push bildirimleri gibi native yeteneklerin web katmanına açılması; Playwright ile uçtan uca test pipeline’ları.',
      en: 'The PWA’s client-side core and order life cycle; native webview integration that decouples web releases from the mobile calendar and exposes native capabilities such as push notifications; end-to-end Playwright pipelines.',
    },
    stack: ['React', 'TypeScript', 'PWA', 'Webview', 'Playwright'],
  },
  {
    id: 'design-system',
    sector: { tr: 'Hızlı teslimat platformu', en: 'Quick-commerce platform' },
    title: {
      tr: 'Ekip verimliliğini 10 kata kadar artıran ortak tasarım altyapısı',
      en: 'A shared design foundation that raised team efficiency up to 10×',
    },
    summary: {
      tr: 'Tüm ürün ekiplerinin kullandığı merkezi arayüz kütüphanesi ve yapay zekâ destekli geliştirme akışları. Tutarlı tasarım, çok daha hızlı teslimat.',
      en: 'A central interface library used by every product team, paired with AI-assisted development workflows. Consistent design, much faster delivery.',
    },
    metric: {
      value: { tr: '10×', en: '10×' },
      label: { tr: 'kata kadar verimlilik', en: 'team efficiency, up to' },
    },
    challenge: {
      tr: 'Aynı arayüz parçalarının farklı ekiplerce tekrar tekrar yazılması ve her sürümde bozulan tasarım tutarlılığı.',
      en: 'The same UI pieces rebuilt by different teams, and design consistency eroding with every release.',
    },
    approach: {
      tr: 'shadcn/ui ve Base UI üzerine kurulu, npm paketi olarak dağıtılan merkezi component kütüphanesi; aynı paketten sunulan Tailwind plugin’i ve Storybook dokümantasyonu; bu sistem üzerinde standart component üreten Claude ve Copilot akışları.',
      en: 'A central component library on shadcn/ui and Base UI, distributed as npm packages with a Tailwind plugin from the same package and Storybook docs; Claude and Copilot workflows that generate standard components on top of it.',
    },
    stack: ['shadcn/ui', 'Base UI', 'Tailwind plugin', 'Storybook', 'npm', 'Claude'],
  },
  {
    id: 'realtime',
    sector: { tr: 'Finans teknolojisi', en: 'Fintech' },
    title: {
      tr: 'Sayfa yenilemeden güncellenen canlı finans ekranları',
      en: 'Live finance screens that update without a refresh',
    },
    summary: {
      tr: 'Bireysel ve kurumsal kullanıcılara yönelik çok dilli finans uygulamaları. Büyük hacimli verinin sayfalara bölünmeden, anlık olarak güncellenmesi.',
      en: 'Multilingual finance apps for retail and business users. Large volumes of data, updated instantly and never split into pages.',
    },
    metric: {
      value: { tr: 'Canlı', en: 'Live' },
      label: { tr: 'anlık güncellenen veri', en: 'real-time data' },
    },
    challenge: {
      tr: 'Çok dilli B2B ve B2C arayüzlerde sürekli akan büyük veri setlerinin kesintisiz izlenebilmesi.',
      en: 'Following large, constantly streaming data sets without interruption across multilingual B2B and B2C interfaces.',
    },
    approach: {
      tr: 'React ve Angular ile gerçek zamanlı veriyi sayfalamadan gösteren arayüzler; uygulamalar arasında paylaşılan form hook’u ve validation kütüphanesi; yeni projeleri hızlandıran uygulama şablonu; RTL, MSW ve Cypress ile test.',
      en: 'React and Angular interfaces that render real-time data without pagination; a form hook and validation library shared across apps; a project template to speed up new builds; tests with RTL, MSW and Cypress.',
    },
    stack: ['React', 'Angular', 'Material UI', 'Redux Saga', 'Cypress', 'MSW'],
  },
  {
    id: 'ecommerce',
    sector: { tr: 'E-ticaret', en: 'E-commerce' },
    title: {
      tr: 'Arama motorları için hazırlanmış çok dilli online mağaza',
      en: 'A multilingual online store built for search',
    },
    summary: {
      tr: 'Farklı pazarlardaki müşterilere kendi dillerinde hızlı açılan bir mağaza. Arama motorlarının kolayca okuyup listelediği ürün sayfaları.',
      en: 'A store that loads fast for customers in their own language across markets, with product pages search engines read and list with ease.',
    },
    metric: {
      value: { tr: 'SEO', en: 'SEO' },
      label: { tr: 'çok dilli vitrin', en: 'multilingual storefront' },
    },
    challenge: {
      tr: 'Ürün sayfalarının arama sonuçlarında görünmesi ve farklı pazarlarda hızlı açılması.',
      en: 'Product pages that rank in search and load fast across several markets.',
    },
    approach: {
      tr: 'Next.js, TypeScript ve Redux ile server-side rendering kullanan çok dilli e-ticaret uygulaması; aynı dönemde React ve GraphQL ile geliştirilen anket ürünü.',
      en: 'A multilingual e-commerce app with server-side rendering on Next.js, TypeScript and Redux; a survey product built with React and GraphQL in the same period.',
    },
    stack: ['Next.js', 'TypeScript', 'Redux', 'GraphQL'],
  },
];
