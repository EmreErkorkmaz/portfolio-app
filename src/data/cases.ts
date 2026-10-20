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
      tr: 'Sipariş yaşam döngüsünün sahipliği: yüklemede REST ile anlık görüntü, yeni sipariş ve durum değişiklikleri için WebSocket olayları, polling yerine bağlantı durumu göstergesi ve elle yenileme. PWA’nın native webview’lara entegrasyonu ve push bildirimleri gibi native yeteneklerin web katmanına açılması. Frontend’in ihtiyaç duyduğu REST API endpoint’lerini Node.js ve Express ile geliştirme; Node.js BFF’e eklenen genel bir proxy endpoint’i.',
      en: 'Owned the order life-cycle flow: a REST snapshot on load, WebSocket events for new orders and status changes, and a connection-state indicator with manual refetch instead of polling. Integrated the PWA into native webviews and exposed native capabilities such as push notifications to the web layer. Built the REST API endpoints the frontend depended on with Node.js and Express, and added a generic proxy endpoint to the Node.js BFF.',
    },
    impact: {
      tr: 'Web sürümleri mobil code freeze’lerden bağımsız yayına çıkıyor; iş ortakları web katmanından push bildirimi alıyor; yeni gateway endpoint’leri BFF’te kod değişikliği ve ayrı bir deploy gerektirmiyor.',
      en: 'Web releases ship independently of mobile code freezes; business partners receive push notifications from the web layer; new gateway endpoints no longer need BFF code changes or a separate deploy.',
    },
    stack: ['React', 'TypeScript', 'PWA', 'WebSockets', 'Native webviews', 'Node.js'],
  },
  {
    id: 'realtime',
    sector: { tr: 'Finans teknolojisi', en: 'Fintech' },
    title: {
      tr: 'Sayfalama olmadan gerçek zamanlı finans arayüzleri',
      en: 'Real-time finance UIs without pagination',
    },
    summary: {
      tr: 'Büyük ve canlı piyasa verisini sayfalamadan gösteren, React ve Angular ile geliştirilmiş çok dilli B2B ve B2C işlem uygulamaları; config ile çalışan bir form katmanı.',
      en: 'Multilingual B2B and B2C trading apps in React and Angular that render large, live market data without paging, plus a config-driven form layer.',
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
      tr: 'Gerçek zamanlı, büyük ölçekli veriyi frontend’de sayfalamadan gösteren React ve Angular arayüzleri; backend ağırlıklı geliştiricilerin tipli bir config’ten doğrulamalı, bağımlı alanlı form sayfaları çıkarmasını sağlayan form katmanı (Formik, Yup, Material UI); React, Material UI, Redux ve Redux Saga ile yeniden kullanılabilir uygulama şablonu; React Testing Library ve Mock Service Worker ile birim testleri, Cypress ile uçtan uca testler.',
      en: 'React and Angular interfaces that render real-time, large-scale data without frontend pagination; a config-driven form layer (Formik, Yup, Material UI) that let backend-focused developers ship validated form pages with dependent fields from a typed config; a reusable app template with React, Material UI, Redux and Redux Saga; unit tests with React Testing Library and Mock Service Worker, end-to-end tests with Cypress.',
    },
    impact: {
      tr: 'Büyük canlı veri tek görünümde gezilebilir kalıyor; backend ağırlıklı geliştiriciler karmaşık form sayfalarını config’ten çıkarıyor; yeni projeler hazır bir şablondan başlıyor.',
      en: 'Large live data sets stay browsable in a single view; backend-focused developers ship complex form pages from config; new projects start from a ready template.',
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
