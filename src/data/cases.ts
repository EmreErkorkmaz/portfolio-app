import type { Localized } from '../i18n/ui';

// Anonymised case studies derived from Notion "master_cv.json" experience bullets.
// Never add company or product names here; CI fails the build if they appear in dist/.
// Layering: `title`, `summary` and `metric` are plain language for anyone;
// `challenge`, `approach` and `stack` sit behind a "Technical details" disclosure.
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
      tr: 'Milyonlarca siparişi kaldıran restoran uygulaması',
      en: 'A restaurant app that handles millions of orders',
    },
    summary: {
      tr: 'Restoranların gelen siparişleri yönettiği uygulamanın çekirdeğini geliştirdim; yeni sürümler artık mobil uygulama takvimini beklemeden yayına çıkıyor.',
      en: 'I built the core of the app restaurants use to manage incoming orders; new versions now ship without waiting on the mobile app release calendar.',
    },
    metric: {
      value: { tr: 'M+', en: 'M+' },
      label: { tr: 'günlük sipariş', en: 'daily orders' },
    },
    challenge: {
      tr: 'Restoran partnerlerinin sipariş akışı kritikti; web release’leri ise mobil uygulamaların code freeze takvimine takılıyordu.',
      en: 'The partner order flow was business-critical, yet web releases were held hostage by the mobile apps’ code-freeze calendar.',
    },
    approach: {
      tr: 'PWA’nın çekirdek istemci mantığını ve sipariş yaşam döngüsünü sahiplendim. Uygulamayı native webview’lara entegre ederek web release’lerini mobil takvimden ayırdım ve push bildirimleri gibi native yetenekleri web katmanına açtım. Güvenilirlik için Playwright ile E2E pipeline’ları kurdum.',
      en: 'I owned the PWA’s core client logic and order life cycle. Integrating it into native webviews decoupled web releases from the mobile calendar and exposed native capabilities such as push notifications to the web layer. I set up Playwright E2E pipelines to keep it reliable.',
    },
    stack: ['React', 'TypeScript', 'PWA', 'Webview', 'Playwright'],
  },
  {
    id: 'ai-chat',
    sector: { tr: 'Müşteri deneyimi', en: 'Customer experience' },
    title: {
      tr: 'Müşteri desteğinde %80 tasarruf',
      en: '80% lower customer-support costs',
    },
    summary: {
      tr: 'Müşteri sorularını karşılayan yapay zekâ destekli canlı sohbeti ana müşteri uygulamasına ekledim; destek maliyeti %80 düştü.',
      en: 'I added AI-powered live chat that answers customer questions to the main customer app; support costs fell by 80%.',
    },
    metric: {
      value: { tr: '−%80', en: '−80%' },
      label: { tr: 'destek maliyeti', en: 'support costs' },
    },
    challenge: {
      tr: 'Müşteri destek hacmi büyüdükçe maliyetler de doğrusal olarak artıyordu.',
      en: 'Support costs grew linearly with customer volume.',
    },
    approach: {
      tr: 'Harici bir AI sağlayıcıyla birlikte çalışarak AI destekli canlı sohbeti ana müşteri web uygulamasına entegre ettim; müşteri destek maliyetleri %80 azaldı.',
      en: 'Working with an external AI vendor, I integrated AI-powered live chat into the main customer web app, cutting customer-support costs by 80%.',
    },
    stack: ['React', 'TypeScript', 'Third-party integration'],
  },
  {
    id: 'design-system',
    sector: { tr: 'Hızlı teslimat platformu', en: 'Quick-commerce platform' },
    title: {
      tr: 'Ekiplerin aynı ekranı tekrar tekrar yapmasını bitiren ortak tasarım kütüphanesi',
      en: 'A shared design library that stopped teams rebuilding the same screens',
    },
    summary: {
      tr: 'Tüm ekiplerin kullandığı ortak bir arayüz kütüphanesi kurdum ve yapay zekâ destekli çalışma akışlarıyla birleştirdim; ekip verimliliği 10 kata kadar arttı.',
      en: 'I built a shared interface library used by every team and paired it with AI-assisted workflows, raising team efficiency by up to 10×.',
    },
    metric: {
      value: { tr: '10×', en: '10×' },
      label: { tr: 'kadar daha verimli ekip', en: 'team efficiency, up to' },
    },
    challenge: {
      tr: 'Birden fazla ürün ekibi aynı arayüz parçalarını tekrar tekrar yazıyor, tasarım tutarlılığı her release’te bozuluyordu.',
      en: 'Several product teams kept rebuilding the same UI pieces, and design consistency eroded with every release.',
    },
    approach: {
      tr: 'shadcn/ui ve Base UI üzerine merkezi bir component kütüphanesi kurdum; aynı paketten dışa aktarılan bir Tailwind plugin’i ve Storybook dokümantasyonuyla npm’de yayınladım. Ardından Claude ve Copilot ile bu sistem üzerinde standart component üreten AI akışları tasarladım.',
      en: 'I built a central component library on shadcn/ui and Base UI, shipped it to npm alongside a Tailwind plugin exported from the same package, and documented it in Storybook. Then I designed AI workflows with Claude and Copilot that generate standard components on top of it.',
    },
    stack: ['shadcn/ui', 'Base UI', 'Tailwind plugin', 'Storybook', 'npm', 'Claude'],
  },
  {
    id: 'realtime',
    sector: { tr: 'Fintech', en: 'Fintech' },
    title: {
      tr: 'Sayfa yenilemeden güncellenen canlı finans ekranları',
      en: 'Live finance screens that update without a refresh',
    },
    summary: {
      tr: 'Büyük hacimli canlı verinin sayfalara bölünmeden, anında güncellendiği çok dilli finans uygulamaları geliştirdim.',
      en: 'I built multilingual finance apps where large volumes of live data update instantly, without being split into pages.',
    },
    metric: {
      value: { tr: 'Canlı', en: 'Live' },
      label: { tr: 'anlık güncellenen veri', en: 'real-time data' },
    },
    challenge: {
      tr: 'B2B ve B2C kullanıcılar, çok dilli arayüzlerde sürekli akan büyük veri setlerini kesintisiz görmek istiyordu.',
      en: 'B2B and B2C users needed to follow large, constantly streaming data sets across multilingual interfaces without interruption.',
    },
    approach: {
      tr: 'React ve Angular ile gerçek zamanlı veriyi sayfalamadan render eden uygulamalar geliştirdim. Uygulamalar arasında paylaşılan bir form hook’u, validation kütüphanesi ve yeni projeleri hızlandıran bir şablon hazırladım; RTL, MSW ve Cypress ile test ettim.',
      en: 'I built React and Angular apps that render real-time data without pagination, plus a shared form hook, validation library and project template reused across apps, tested with RTL, MSW and Cypress.',
    },
    stack: ['React', 'Angular', 'Material UI', 'Redux Saga', 'Cypress', 'MSW'],
  },
  {
    id: 'ecommerce',
    sector: { tr: 'E-ticaret', en: 'E-commerce' },
    title: {
      tr: 'Google’da bulunan çok dilli online mağaza',
      en: 'A multilingual online store built to be found on Google',
    },
    summary: {
      tr: 'Farklı ülkelerdeki müşterilere kendi dillerinde hızlı açılan ve arama motorları için hazırlanmış bir online mağaza geliştirdim.',
      en: 'I built an online store that loads fast for customers in their own language and is prepared for search engines.',
    },
    metric: {
      value: { tr: 'SEO', en: 'SEO' },
      label: { tr: 'çok dilli vitrin', en: 'multilingual storefront' },
    },
    challenge: {
      tr: 'Ürün sayfalarının arama motorlarında görünmesi ve farklı pazarlarda hızlı açılması gerekiyordu.',
      en: 'Product pages had to rank in search and load fast across several markets.',
    },
    approach: {
      tr: 'Next.js, TypeScript ve Redux ile SSR kullanan çok dilli bir e-ticaret uygulaması geliştirdim; aynı dönemde React ve GraphQL ile bir anket ürünü teslim ettim.',
      en: 'I developed a multilingual e-commerce app with SSR using Next.js, TypeScript and Redux, and shipped a survey product with React and GraphQL in the same period.',
    },
    stack: ['Next.js', 'TypeScript', 'Redux', 'GraphQL'],
  },
];
