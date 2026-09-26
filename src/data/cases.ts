import type { Localized } from '../i18n/ui';

// Anonymised case studies derived from Notion "master_cv.json" experience bullets.
// Never add company or product names here; CI fails the build if they appear in dist/.
//
// Written for technical readers (engineering leads, CTOs, agencies): the card shows the
// title, summary and a headline figure; `challenge`, `approach` and `impact` (shown as
// "Need" / "Solution" / "Impact") and `stack` sit behind the disclosure. Impact states
// what changed, never an invented number.
export interface CaseStudy {
  id: string;
  sector: Localized;
  title: Localized;
  summary: Localized;
  metric: { value: Localized; label: Localized };
  challenge: Localized;
  approach: Localized;
  impact: Localized;
  stack: string[];
}

export const cases: CaseStudy[] = [
  {
    id: 'restaurant-pwa',
    sector: { tr: 'Hızlı teslimat platformu', en: 'Quick-commerce platform' },
    title: {
      tr: 'Milyonlarca günlük siparişi taşıyan bir PWA’nın sipariş akışı',
      en: 'The order flow of a PWA handling millions of daily orders',
    },
    summary: {
      tr: 'Restoranların siparişlerini yönettiği PWA’nın istemci tarafı çekirdeği ve sipariş yaşam döngüsü; native uygulamalara webview ile gömülü.',
      en: 'Client-side core and order life cycle of the PWA restaurants run their orders on, shipped inside the native apps through webviews.',
    },
    metric: {
      value: { tr: 'M+', en: 'M+' },
      label: { tr: 'günlük sipariş', en: 'daily orders' },
    },
    challenge: {
      tr: 'Yüksek trafik altında iş açısından kritik bir sipariş akışı; web sürümlerinin mobil uygulamaların code freeze takvimine bağlı olması.',
      en: 'A business-critical order flow under high traffic, with web releases blocked by the mobile apps’ code freezes.',
    },
    approach: {
      tr: 'PWA’nın istemci tarafı çekirdek mantığı ve sipariş yaşam döngüsünün sahipliği; PWA’nın native webview’lara entegrasyonu ve push bildirimleri gibi native yeteneklerin web katmanına açılması; Playwright ile uçtan uca test pipeline’ları. Aynı platformda, frontend’in ihtiyaç duyduğu REST API endpoint’lerini Node.js, Express ve NestJS ile geliştirme.',
      en: 'Owned the PWA’s client-side core logic and order life-cycle flow; integrated the PWA into native webviews and exposed native capabilities such as push notifications to the web layer; set up Playwright end-to-end pipelines. On the same platform, built the REST API endpoints the frontend depended on with Node.js, Express and NestJS.',
    },
    impact: {
      tr: 'Web sürümleri mobil code freeze’lerden bağımsız yayına çıkıyor; iş ortakları web katmanından push bildirimi alıyor; uçtan uca testler kod kapsamını ve yayın güvenini belirgin şekilde artırdı.',
      en: 'Web releases ship independently of mobile code freezes; business partners receive push notifications from the web layer; end-to-end pipelines significantly raised coverage and release confidence.',
    },
    stack: ['React', 'TypeScript', 'PWA', 'Native webviews', 'Playwright', 'Node.js'],
  },
  {
    id: 'design-system',
    sector: { tr: 'Hızlı teslimat platformu', en: 'Quick-commerce platform' },
    title: {
      tr: 'npm paketi olarak dağıtılan bir design system',
      en: 'A design system shipped as npm packages',
    },
    summary: {
      tr: 'Tailwind CSS eklentisi ve Storybook dokümantasyonuyla birlikte, ekibin üzerine inşa ettiği merkezi React component kütüphanesi.',
      en: 'A central React component library with a Tailwind CSS plugin and Storybook docs, published as npm packages for the team to build on.',
    },
    metric: {
      value: { tr: 'npm', en: 'npm' },
      label: { tr: 'paketleri + Storybook', en: 'packages + Storybook' },
    },
    challenge: {
      tr: 'Aynı arayüz parçalarının tekrar tekrar yazılması ve her sürümde bozulan tasarım tutarlılığı.',
      en: 'The same UI pieces rebuilt again and again, and design consistency eroding with every release.',
    },
    approach: {
      tr: 'Erişilebilir headless bileşenler üzerine kurulu, harici npm paketi olarak yayınlanan component kütüphanesi; aynı paketten dışa aktarılan Tailwind CSS eklentisi; Storybook dokümantasyonu. Üzerine, standart component’ler üreten yapay zekâ destekli akışlar (Claude, GitHub Copilot).',
      en: 'A component library built on accessible headless primitives, published as external npm packages with a Tailwind CSS plugin exported from the same package and documented in Storybook. On top of it, AI-assisted workflows (Claude, GitHub Copilot) that generate standard components.',
    },
    impact: {
      tr: 'Arayüz bileşenleri ve stiller için tek, sürümlenen ve dokümante edilmiş kaynak; yeni component’ler sıfırdan değil, standart yapı taşlarından başlıyor.',
      en: 'One versioned, documented source for UI components and styling; new components start from standard building blocks instead of from scratch.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'npm', 'AI-assisted workflows'],
  },
  {
    id: 'realtime',
    sector: { tr: 'Finans teknolojisi', en: 'Fintech' },
    title: {
      tr: 'Sayfalama olmadan gerçek zamanlı finans arayüzleri',
      en: 'Real-time finance UIs without pagination',
    },
    summary: {
      tr: 'Büyük ve canlı veri setlerini sayfalamadan gösteren, React ve Angular ile geliştirilmiş çok dilli B2B ve B2C finans uygulamaları; uygulamalar arasında paylaşılan kütüphaneler.',
      en: 'Multilingual B2B and B2C finance apps in React and Angular that render large, live data sets without paging, plus libraries shared across apps.',
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
      tr: 'Gerçek zamanlı, büyük ölçekli veriyi frontend’de sayfalamadan gösteren React ve Angular arayüzleri; uygulamalar arasında paylaşılan özel form hook’u ve doğrulama kütüphanesi; React, Material UI, Redux ve Redux Saga ile yeniden kullanılabilir uygulama şablonu; React Testing Library ve Mock Service Worker ile birim testleri, Cypress ile uçtan uca testler.',
      en: 'React and Angular interfaces that render real-time, large-scale data without frontend pagination; a custom form hook and validation library shared across applications; a reusable app template with React, Material UI, Redux and Redux Saga; unit tests with React Testing Library and Mock Service Worker, end-to-end tests with Cypress.',
    },
    impact: {
      tr: 'Büyük canlı veri tek görünümde gezilebilir kalıyor; ekipler uygulamalar arasında tek bir form ve doğrulama katmanı kullanıyor; yeni projeler hazır bir şablondan başlıyor.',
      en: 'Large live data sets stay browsable in a single view; teams share one form and validation layer across apps; new projects start from a ready template.',
    },
    stack: ['React', 'Angular', 'TypeScript', 'Redux Saga', 'Material UI', 'Cypress'],
  },
  {
    id: 'ecommerce',
    sector: { tr: 'E-ticaret', en: 'E-commerce' },
    title: {
      tr: 'Next.js ile çok dilli, sunucu tarafında render edilen mağaza',
      en: 'A multilingual, server-rendered storefront on Next.js',
    },
    summary: {
      tr: 'Next.js, TypeScript ve Redux ile server-side rendering kullanan çok dilli e-ticaret uygulaması; aynı dönemde React ve GraphQL ile bir anket ürünü.',
      en: 'A multilingual e-commerce app with server-side rendering on Next.js, TypeScript and Redux, and a React + GraphQL survey product in the same period.',
    },
    metric: {
      value: { tr: 'SSR', en: 'SSR' },
      label: { tr: 'çok dilli vitrin', en: 'multilingual storefront' },
    },
    challenge: {
      tr: 'Ürün sayfalarının arama sonuçlarında görünmesi ve farklı pazarlarda hızlı açılması.',
      en: 'Product pages that rank in search and load fast across several markets.',
    },
    approach: {
      tr: 'Next.js, TypeScript ve Redux ile server-side rendering kullanan çok dilli e-ticaret uygulaması; React ve GraphQL ile geliştirilen anket ürünü; responsive tasarımların semantik HTML’e dönüştürülmesi.',
      en: 'A multilingual e-commerce app with server-side rendering on Next.js, TypeScript and Redux; a survey product built with React and GraphQL; responsive designs turned into semantic HTML.',
    },
    impact: {
      tr: 'Ürün sayfaları her dilde sunucuda render ediliyor; arama motorları tarafından indekslenebilir ve ilk yüklemede hızlı.',
      en: 'Product pages render on the server in every language, so they are indexable and fast on first load.',
    },
    stack: ['Next.js', 'TypeScript', 'SSR', 'Redux', 'GraphQL', 'i18n'],
  },
];
