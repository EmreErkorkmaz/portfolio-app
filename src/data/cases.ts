import type { Localized } from '../i18n/ui';

// Anonymised case studies derived from Notion "master_cv.json" experience bullets.
// Never add company or product names here; CI fails the build if they appear in dist/.
export interface CaseStudy {
  id: string;
  sector: Localized;
  title: Localized;
  metric: { value: string; label: Localized };
  challenge: Localized;
  approach: Localized;
  stack: string[];
}

export const cases: CaseStudy[] = [
  {
    id: 'design-system',
    sector: { tr: 'Hızlı teslimat platformu', en: 'Quick-commerce platform' },
    title: {
      tr: 'npm’de yayınlanan design system ve AI destekli component üretimi',
      en: 'An npm-published design system with AI-assisted component delivery',
    },
    metric: {
      value: '10×',
      label: { tr: 'daha verimli geliştirme', en: 'team efficiency, up to' },
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
    id: 'restaurant-pwa',
    sector: { tr: 'Hızlı teslimat platformu', en: 'Quick-commerce platform' },
    title: {
      tr: 'Milyonlarca günlük siparişi yöneten restoran PWA’sı',
      en: 'A restaurant PWA running millions of daily orders',
    },
    metric: { value: 'M+', label: { tr: 'günlük sipariş', en: 'daily orders' } },
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
      tr: 'Ana müşteri uygulamasına AI destekli canlı sohbet',
      en: 'AI-powered live chat in the main customer app',
    },
    metric: { value: '−80%', label: { tr: 'destek maliyeti', en: 'support costs' } },
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
    id: 'realtime',
    sector: { tr: 'Fintech', en: 'Fintech' },
    title: {
      tr: 'Pagination olmadan büyük, gerçek zamanlı veri',
      en: 'Large-scale real-time data without pagination',
    },
    metric: { value: '0', label: { tr: 'frontend pagination', en: 'frontend pagination' } },
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
      tr: 'Çok dilli, server-side render edilen e-ticaret',
      en: 'A multilingual, server-rendered storefront',
    },
    metric: { value: 'SSR', label: { tr: 'çok dilli vitrin', en: 'multilingual storefront' } },
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
