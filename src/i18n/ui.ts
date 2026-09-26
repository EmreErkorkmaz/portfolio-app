export const languages = { en: 'English', tr: 'Türkçe' } as const;
export type Lang = keyof typeof languages;
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = 'en';

export const ui = {
  tr: {
    'meta.title': 'Emre Erkorkmaz — Kıdemli Frontend / Full-Stack Mühendis',
    'meta.description':
      'Uzaktan sözleşmeli işler için kıdemli TypeScript mühendisi: React ve Next.js arayüzleri, Node.js API’leri, design system’ler ve yapay zekâ destekli ürün özellikleri. Türkiye, UTC+3.',
    skip: 'İçeriğe geç',
    'nav.services': 'İşletmeler için',
    'nav.cases': 'İşler',
    'nav.stack': 'Yetkinlikler',
    'nav.process': 'Çalışma şekli',
    'nav.faq': 'SSS',
    'nav.ai': 'Yapay zekâ',
    'nav.contact': 'İletişim',
    'nav.lang': 'Switch to English',
    'theme.toggle': 'Temayı değiştir',

    'hero.available': 'Uzaktan sözleşmeli işlere açık',
    'hero.busy': 'Şu an dolu; ileri tarihli başlangıçlar için yazabilirsiniz',
    'hero.role': 'Kıdemli Frontend / Full-Stack Mühendis',
    'hero.title.pre': '',
    'hero.title.post': 'için kıdemli TypeScript mühendisi.',
    'hero.title.full':
      'Frontend platformları, full-stack özellikler ve yapay zekâ destekli ürünler için kıdemli TypeScript mühendisi.',
    'hero.lead':
      '2021’den bu yana canlı ortamda React ve TypeScript ürünleri geliştiriyorum: milyonlarca günlük siparişi taşıyan bir PWA’nın çekirdeği, npm paketi olarak dağıtılan bir design system ve gerçek zamanlı finans arayüzleri. Şimdi bu deneyimi LLM destekli ürün özelliklerine taşıyorum; İngiltere, AB ve ABD’deki ekiplerle uzaktan sözleşmeli çalışmaya açığım.',
    'hero.cta.primary': 'CV’yi indir (İngilizce)',
    'hero.cta.secondary': 'İletişime geç',
    'hero.stat.since': 'yılından beri canlı ortamda',
    'hero.stat.scale': 'günlük siparişi taşıyan sistemler',
    'hero.stat.timezone': 'İngiltere ve AB mesai saatleriyle örtüşme',
    'hero.scroll': 'Kaydır',
    totop: 'Başa dön',

    'services.eyebrow': 'Hizmetler',
    'services.title': 'Hangi konuda destek olabilirim?',
    'services.lead':
      'İhtiyacınız bir web sitesi, bir online mağaza ya da ekibinize ek güç olsun: fikirden yayına kadar tüm süreç tek elden yönetilir.',
    'services.bestFor': 'İdeal olduğu durum',
    'services.includes': 'Neler dahil',
    'services.tech': 'Teknik kapsam',
    'cases.eyebrow': 'Referans işler',
    'cases.title': 'Gerçek ölçekte, canlı ortamda.',
    'cases.note':
      'Gizlilik gereği marka adları paylaşılmıyor; ayrıntılar ve referanslar talep üzerine.',
    'cases.details': 'İhtiyaç, çözüm, etki',
    'cases.challenge': 'İhtiyaç',
    'cases.approach': 'Çözüm',
    'cases.impact': 'Etki',
    'ai.eyebrow': 'Yapay zekâ ürün çalışmaları',
    'ai.title': 'LLM destekli özellikler, ölçülerek.',
    'ai.lead':
      'Her proje için problem, mimari, neyin nasıl ölçüldüğü ve neyin işe yaramadığı; kod ya da yazı bağlantısıyla.',
    'ai.problem': 'Problem',
    'ai.architecture': 'Mimari',
    'ai.measured': 'Ölçülen',
    'ai.lessons': 'İşe yaramayan ve nedeni',
    'faq.eyebrow': 'SSS',
    'faq.title': 'Teknik ekiplerin sorduğu sorular',
    'stack.eyebrow': 'Yetkinlikler',
    'stack.title': 'Frontend derinliği, full-stack erişim.',
    'stack.lead':
      'Arayüz mimarisi ve performansın sahipliği, bir özelliğin ihtiyaç duyduğu API’lerin geliştirilmesi ve otomatik testlerle güvenli teslimat.',
    'stack.practices': 'Çalışma pratikleri',
    'stack.ecosystem': 'Ekosistem',
    'process.eyebrow': 'Çalışma şekli',
    'process.title': 'İlk görüşmeden düzenli teslimata.',
    'engagement.eyebrow': 'Çalışma modeli',
    'engagement.title': 'Sade sözleşme koşulları.',
    'engagement.remote': 'Uzaktan çalışma',
    'engagement.languages': 'Türkçe (ana dil) · İngilizce (C2)',
    'contact.eyebrow': 'İletişim',
    'contact.title': 'Ekibinize destek mi lazım?',
    'contact.lead':
      'Rolü, stack’i ve takvimi birkaç satırla paylaşın; kısa bir tanışma görüşmesi planlayalım.',
    'contact.mailSubject': 'Sözleşmeli iş görüşmesi',
    'contact.copy': 'E-postayı kopyala',
    'contact.copied': 'Kopyalandı',
    'footer.built': 'Astro ile inşa edildi, Cloudflare üzerinde yayında.',
    'notfound.title': 'Sayfa bulunamadı',
    'notfound.lead': 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.',
    'notfound.back': 'Ana sayfaya dön',
    'smb.meta.title': 'İşletmeler için web sitesi, online mağaza ve uygulama — Emre Erkorkmaz',
    'smb.meta.description':
      'Serbest yazılım geliştirici Emre Erkorkmaz: işletmeler için hızlı web siteleri, online mağazalar ve mobil uygulamalar. Ücretsiz ön görüşme için iletişime geçin.',
    'smb.eyebrow': 'İşletmeler için',
    'smb.title': 'Fikrinizi çalışan bir web sitesine, mağazaya ya da uygulamaya dönüştürüyorum.',
    'smb.lead':
      'Milyonlarca kullanıcıya hizmet veren ürünlerde edinilen deneyim, şimdi işletmenizin hizmetinde. Hızlı açılan, Google’da bulunan ve yıllarca sorunsuz çalışan yazılımlar.',
    'smb.cta': 'Ücretsiz ön görüşme',
    'smb.process.eyebrow': 'Süreç',
    'smb.process.title': 'Nasıl çalışıyorum?',
    'smb.faq.title': 'Aklınıza takılanlar',
    'smb.contact.title': 'Projenizi konuşmaya hazır mısınız?',
    'smb.contact.lead':
      'Birkaç cümleyle ihtiyacınızı paylaşın; ücretsiz ön görüşmede kapsam, süre ve bütçe netleşsin. Teknik bilgi gerekmez.',
    'smb.contact.mailSubject': 'Proje görüşmesi',
    'nav.home': 'Ana sayfa',
  },
  en: {
    'meta.title': 'Emre Erkorkmaz — Senior Frontend / Fullstack Engineer',
    'meta.description':
      'Senior TypeScript engineer for remote contracts: React and Next.js frontends, Node.js APIs, design systems and AI-powered product features. Based in Türkiye, UTC+3.',
    skip: 'Skip to content',
    'nav.services': 'For businesses',
    'nav.cases': 'Work',
    'nav.stack': 'Stack',
    'nav.process': 'How I work',
    'nav.faq': 'FAQ',
    'nav.ai': 'AI work',
    'nav.contact': 'Contact',
    'nav.lang': 'Türkçeye geç',
    'theme.toggle': 'Toggle theme',

    'hero.available': 'Available for remote contracts',
    'hero.busy': 'Currently booked; happy to talk about later start dates',
    'hero.role': 'Senior Frontend / Fullstack Engineer',
    'hero.title.pre': 'Senior TypeScript engineer for',
    'hero.title.post': '',
    'hero.title.full':
      'Senior TypeScript engineer for frontend platforms, fullstack features and AI product features.',
    'hero.lead':
      'Since 2021 I have built production React and TypeScript products: the core of a PWA handling millions of daily orders, a design system shipped as npm packages and real-time finance UIs. Now extending that into LLM-powered product features, on remote contracts with UK, EU and US teams.',
    'hero.cta.primary': 'Download CV',
    'hero.cta.secondary': 'Get in touch',
    'hero.stat.since': 'shipping to production since',
    'hero.stat.scale': 'daily orders on systems I worked on',
    'hero.stat.timezone': 'overlap with UK and EU working hours',
    'hero.scroll': 'Scroll',
    totop: 'Back to top',

    'services.eyebrow': 'Services',
    'services.title': 'How can I help?',
    'services.lead':
      'Whether you need a website, an online store or extra hands on your team, everything from idea to launch is handled in one place.',
    'services.bestFor': 'Best for',
    'services.includes': 'What’s included',
    'services.tech': 'Technical scope',
    'cases.eyebrow': 'Selected work',
    'cases.title': 'Production work at real scale.',
    'cases.note':
      'Brand names are withheld for confidentiality; details and references on request.',
    'cases.details': 'Need, solution, impact',
    'cases.challenge': 'Need',
    'cases.approach': 'Solution',
    'cases.impact': 'Impact',
    'ai.eyebrow': 'AI product work',
    'ai.title': 'LLM features, measured.',
    'ai.lead':
      'For each project: the problem, the architecture, what was measured and what did not work, with a link to the repo or write-up.',
    'ai.problem': 'Problem',
    'ai.architecture': 'Architecture',
    'ai.measured': 'What was measured',
    'ai.lessons': 'What didn’t work, and why',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions teams ask first',
    'stack.eyebrow': 'Capabilities',
    'stack.title': 'Frontend depth, full-stack reach.',
    'stack.lead':
      'Ownership of UI architecture and performance, the APIs a feature needs, and safe delivery through automated tests.',
    'stack.practices': 'Ways of working',
    'stack.ecosystem': 'Ecosystem',
    'process.eyebrow': 'How I work',
    'process.title': 'From first call to steady delivery.',
    'engagement.eyebrow': 'Engagement',
    'engagement.title': 'Contract terms, kept simple.',
    'engagement.remote': 'Remote',
    'engagement.languages': 'English (C2) · Turkish (native)',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Need an extra senior engineer?',
    'contact.lead':
      'Send a few lines about the role, the stack and the timeline, and we can set up a short intro call.',
    'contact.mailSubject': 'Contract inquiry',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied',
    'footer.built': 'Built with Astro, served from Cloudflare.',
    'notfound.title': 'Page not found',
    'notfound.lead': 'The page you are looking for has moved or never existed.',
    'notfound.back': 'Back to home',
    'smb.meta.title': 'Websites, online stores and apps for businesses — Emre Erkorkmaz',
    'smb.meta.description':
      'Freelance developer Emre Erkorkmaz builds fast websites, online stores and mobile apps for businesses. Get in touch for a free intro call.',
    'smb.eyebrow': 'For businesses',
    'smb.title': 'I turn your idea into a working website, store or app.',
    'smb.lead':
      'Experience from products serving millions of users, now working for your business. Software that loads fast, gets found on Google and runs smoothly for years.',
    'smb.cta': 'Book a free intro call',
    'smb.process.eyebrow': 'Process',
    'smb.process.title': 'How I work',
    'smb.faq.title': 'Common questions',
    'smb.contact.title': 'Ready to talk about your project?',
    'smb.contact.lead':
      'Share your needs in a few sentences; the free intro call pins down scope, timeline and budget. No technical knowledge needed.',
    'smb.contact.mailSubject': 'Project inquiry',
    'nav.home': 'Home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['tr'];

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function localePath(lang: Lang, hash = ''): string {
  return (lang === defaultLang ? '/' : `/${lang}/`) + hash;
}

/** Path of a route in a given language, e.g. routePath('tr', 'services/') → '/tr/services/'. */
export function routePath(lang: Lang, route = ''): string {
  return localePath(lang) + route;
}
