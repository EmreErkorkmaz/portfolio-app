import type { Localized } from '../i18n/ui';

export interface Step {
  title: Localized;
  body: Localized;
}

// Small-business project flow (the /services page).
export const smbProcess: Step[] = [
  {
    title: { tr: 'Keşif', en: 'Discovery' },
    body: {
      tr: 'Ücretsiz ön görüşmede hedefleriniz, müşterileriniz ve bütçeniz netleşir. Neyin, neden yapılacağı en baştan bellidir.',
      en: 'A free intro call clarifies your goals, customers and budget. What gets built, and why, is clear from the start.',
    },
  },
  {
    title: { tr: 'Planlama', en: 'Planning' },
    body: {
      tr: 'Kapsam, takvim ve teslim adımları yazılı bir teklifte toplanır. Sürpriz maliyet ya da belirsiz tarih yoktur.',
      en: 'Scope, timeline and milestones come together in a written proposal. No surprise costs, no vague dates.',
    },
  },
  {
    title: { tr: 'Geliştirme', en: 'Build' },
    body: {
      tr: 'Her hafta denenebilir bir sürüm; ilerlemeyi her zaman görürsünüz. Kod ilk günden sizindir ve otomatik testlerle güvence altındadır.',
      en: 'A working version to try every week, so progress is always visible. The code is yours from day one, protected by automated tests.',
    },
  },
  {
    title: { tr: 'Teslim & destek', en: 'Launch & support' },
    body: {
      tr: 'Yayına alma, dokümantasyon ve devir teslim. Yayın sonrasında bakım ve geliştirme desteği sürer.',
      en: 'Launch, documentation and handover. Maintenance and improvement support continues after go-live.',
    },
  },
];

// Contract flow for engineering teams (home page).
export const process: Step[] = [
  {
    title: { tr: 'Tanışma görüşmesi', en: 'Intro call' },
    body: {
      tr: 'Kod tabanını, ekibi ve teslim edilmesi gerekenleri konuşuruz. Herhangi bir şey imzalanmadan önce uyum konusunda net bir yanıt alırsınız.',
      en: 'We go through the codebase, the team and what needs to ship. You get a straight answer on fit before anything is signed.',
    },
  },
  {
    title: { tr: 'Adaptasyon', en: 'Onboarding' },
    body: {
      tr: 'Projeyi yerelde çalıştırma, mimariyi ve yayın sürecini çıkarma. Sorular erken ve yazılı gelir; kod tabanındaki mevcut kurallar korunur.',
      en: 'Local setup, then a map of the architecture and release path. Questions come early and in writing; the codebase’s existing conventions are followed.',
    },
  },
  {
    title: { tr: 'İlk değişiklik', en: 'First change' },
    body: {
      tr: 'Küçük, review’dan geçmiş bir değişiklik erkenden canlıya çıkar; kurulumu doğrular ve büyük işlerden önce güven oluşturur.',
      en: 'A small, reviewed change goes to production early, proving the setup and building trust before larger work.',
    },
  },
  {
    title: { tr: 'Düzenli teslimat', en: 'Steady delivery' },
    body: {
      tr: 'Testleriyle birlikte küçük pull request’ler, asenkron ilerleme notları ve sözleşme bittiğinde ekipte kalan dokümantasyon.',
      en: 'Small pull requests with tests, async progress updates, and documentation that stays with the team when the contract ends.',
    },
  },
];

// Contract terms. Rates, notice period and weekly hours are deliberately not published.
export const engagement: { title: Localized; body: Localized }[] = [
  {
    title: { tr: 'Uzaktan sözleşme', en: 'Remote contract' },
    body: {
      tr: 'Saatlik ya da günlük, tamamen uzaktan. Sözleşme yapısı her iş için ayrıca kararlaştırılır.',
      en: 'Hourly or daily, fully remote. The contract setup is agreed per engagement.',
    },
  },
  {
    title: { tr: 'Ücret', en: 'Rates' },
    body: {
      tr: 'Talep üzerine; kapsama ve süreye göre paylaşılır.',
      en: 'On request, based on scope and duration.',
    },
  },
  {
    title: { tr: 'Çalışma saatleri', en: 'Working hours' },
    body: {
      tr: 'UTC+3, yaz saati uygulaması yok. İngiltere ve AB mesaisiyle örtüşen gün, ABD Doğu Yakası sabahlarıyla kısmi örtüşme.',
      en: 'UTC+3, no daylight saving. A working day that overlaps UK and EU hours, with partial overlap on US East Coast mornings.',
    },
  },
  {
    title: { tr: 'Referanslar', en: 'References' },
    body: {
      tr: 'Önceki rollerden referanslar talep üzerine paylaşılır.',
      en: 'References from previous roles are available on request.',
    },
  },
];
