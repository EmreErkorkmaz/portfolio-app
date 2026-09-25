export const languages = { en: 'English', tr: 'Türkçe' } as const;
export type Lang = keyof typeof languages;
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = 'en';

export const ui = {
  tr: {
    'meta.title': 'Emre Erkorkmaz — Freelance Full-Stack Engineer',
    'meta.description':
      'Serbest yazılım geliştirici Emre Erkorkmaz: işletmeler için hızlı web siteleri, online mağazalar ve mobil uygulamalar. Ücretsiz ön görüşme için iletişime geçin.',
    skip: 'İçeriğe geç',
    'nav.services': 'Hizmetler',
    'nav.cases': 'İşler',
    'nav.stack': 'Teknik',
    'nav.process': 'Süreç',
    'nav.faq': 'SSS',
    'nav.contact': 'İletişim',
    'nav.lang': 'Switch to English',
    'theme.toggle': 'Temayı değiştir',

    'hero.available': 'Yeni projelere açık',
    'hero.busy': 'Şu an dolu, yine de yazabilirsiniz',
    'hero.role': 'Serbest yazılım geliştirici',
    'hero.title.pre': 'Fikrinizi, çalışan bir',
    'hero.title.post': 'dönüştürüyorum.',
    'hero.title.full':
      'Fikrinizi, çalışan bir web sitesine, online mağazaya, mobil uygulamaya ya da yazılıma dönüştürüyorum.',
    'hero.lead':
      'Milyonlarca kullanıcıya hizmet veren ürünlerde edinilen 5 yılı aşkın deneyim, şimdi işletmenizin hizmetinde. Hızlı açılan, Google’da bulunan ve yıllarca sorunsuz çalışan yazılımlar.',
    'hero.cta.primary': 'Ücretsiz ön görüşme',
    'hero.cta.secondary': 'İşlere göz at',
    'hero.stat.years': 'yıl deneyim',
    'hero.stat.scale': 'günlük siparişi taşıyan sistemler',
    'hero.stat.efficiency': 'kata kadar daha verimli ekipler',
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
    'cases.title': 'Gerçek ölçekte, ölçülebilir sonuçlar.',
    'cases.note':
      'Müşteri gizliliği gereği marka adları paylaşılmamaktadır; ayrıntılar ön görüşmede aktarılır.',
    'cases.details': 'Teknik detay',
    'cases.challenge': 'İhtiyaç',
    'cases.approach': 'Çözüm',
    'faq.eyebrow': 'SSS',
    'faq.title': 'Aklınıza takılanlar',
    'stack.eyebrow': 'Teknik ekipler için',
    'stack.title': 'Uçtan uca yazılım geliştirme yetkinlikleri.',
    'stack.lead':
      'Frontend’den backend’e, veritabanından bulut altyapısına kadar ürünün her katmanında uçtan uca sorumluluk. Yeni bir teknoloji gerektiğinde hızlı adaptasyon.',
    'stack.practices': 'Çalışma pratikleri',
    'stack.ecosystem': 'Ekosistem',
    'process.eyebrow': 'Süreç',
    'process.title': 'Nasıl çalışıyorum?',
    'engagement.eyebrow': 'Çalışma modeli',
    'engagement.title': 'Size uyan şekilde.',
    'engagement.remote': 'Uzaktan çalışma',
    'engagement.languages': 'Türkçe (ana dil) · İngilizce (C2)',
    'contact.eyebrow': 'İletişim',
    'contact.title': 'Projenizi konuşmaya hazır mısınız?',
    'contact.lead':
      'Birkaç cümleyle ihtiyacınızı paylaşın; ücretsiz ön görüşmede kapsam, süre ve bütçe netleşsin. Teknik bilgi gerekmez.',
    'contact.mailSubject': 'Proje görüşmesi',
    'contact.copy': 'E-postayı kopyala',
    'contact.copied': 'Kopyalandı',
    'footer.built': 'Astro ile inşa edildi, Cloudflare üzerinde yayında.',
    'notfound.title': 'Sayfa bulunamadı',
    'notfound.lead': 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.',
    'notfound.back': 'Ana sayfaya dön',
  },
  en: {
    'meta.title': 'Emre Erkorkmaz — Freelance Full-Stack Engineer',
    'meta.description':
      'Freelance developer Emre Erkorkmaz builds fast websites, online stores and mobile apps for businesses. Get in touch for a free intro call.',
    skip: 'Skip to content',
    'nav.services': 'Services',
    'nav.cases': 'Work',
    'nav.stack': 'Technical',
    'nav.process': 'Process',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.lang': 'Türkçeye geç',
    'theme.toggle': 'Toggle theme',

    'hero.available': 'Available for new projects',
    'hero.busy': 'Currently booked, but feel free to reach out',
    'hero.role': 'Freelance software developer',
    'hero.title.pre': 'I turn your idea into a working',
    'hero.title.post': '',
    'hero.title.full':
      'I turn your idea into a working website, online store, mobile app or product.',
    'hero.lead':
      'Five-plus years of experience on products serving millions of users, now working for your business. Software that loads fast, gets found on Google and runs smoothly for years.',
    'hero.cta.primary': 'Book a free intro call',
    'hero.cta.secondary': 'See the work',
    'hero.stat.years': 'years of experience',
    'hero.stat.scale': 'daily orders carried by systems',
    'hero.stat.efficiency': 'more efficient teams, up to',
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
    'cases.title': 'Real scale, measurable results.',
    'cases.note':
      'Brand names are withheld for client confidentiality; details are shared on the intro call.',
    'cases.details': 'Technical details',
    'cases.challenge': 'Need',
    'cases.approach': 'Solution',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Common questions',
    'stack.eyebrow': 'For technical teams',
    'stack.title': 'End-to-end software engineering capabilities.',
    'stack.lead':
      'End-to-end ownership across every layer of a product, from frontend and backend to data and cloud infrastructure, with fast ramp-up whenever a new technology is needed.',
    'stack.practices': 'Ways of working',
    'stack.ecosystem': 'Ecosystem',
    'process.eyebrow': 'Process',
    'process.title': 'How I work',
    'engagement.eyebrow': 'Engagement',
    'engagement.title': 'On your terms.',
    'engagement.remote': 'Remote',
    'engagement.languages': 'English (C2) · Turkish (native)',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Ready to talk about your project?',
    'contact.lead':
      'Share your needs in a few sentences; the free intro call pins down scope, timeline and budget. No technical knowledge needed.',
    'contact.mailSubject': 'Project inquiry',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied',
    'footer.built': 'Built with Astro, served from Cloudflare.',
    'notfound.title': 'Page not found',
    'notfound.lead': 'The page you are looking for has moved or never existed.',
    'notfound.back': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['tr'];

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function localePath(lang: Lang, hash = ''): string {
  return (lang === defaultLang ? '/' : `/${lang}/`) + hash;
}
