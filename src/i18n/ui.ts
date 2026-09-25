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
      '5 yılı aşkın deneyimle milyonlarca kişinin kullandığı uygulamalar geliştirdim. Şimdi aynı özeni sizin işinize getiriyorum: hızlı açılan, Google’da bulunan ve yıllarca sorunsuz çalışan yazılımlar.',
    'hero.cta.primary': 'Ücretsiz ön görüşme',
    'hero.cta.secondary': 'İşlere göz at',
    'hero.stat.years': 'yıl deneyim',
    'hero.stat.scale': 'günlük sipariş işleyen uygulamalar',
    'hero.stat.support.value': '%80',
    'hero.stat.support': 'daha düşük müşteri destek maliyeti',
    'hero.scroll': 'Kaydır',
    totop: 'Başa dön',

    'services.eyebrow': 'Hizmetler',
    'services.title': 'İşinizin ihtiyacı olan yazılımı baştan sona hazırlıyorum.',
    'services.includes': 'Neler dahil',
    'services.tech': 'Kullanılan teknolojiler',
    'cases.eyebrow': 'Seçili işler',
    'cases.title': 'Gerçek ölçekte, gerçek sonuçlar.',
    'cases.note':
      'Gizlilik nedeniyle müşteri ve işveren adları paylaşılmıyor. Detayları görüşmede konuşmaktan memnuniyet duyarım.',
    'cases.details': 'Teknik detay',
    'cases.challenge': 'Sorun',
    'cases.approach': 'Yaklaşım',
    'faq.eyebrow': 'SSS',
    'faq.title': 'Aklınıza takılanlar',
    'stack.eyebrow': 'Teknik ekipler için',
    'stack.title': 'Yazılım ekibiniz varsa, hızla uyum sağlarım.',
    'stack.skills': 'Teknolojiler ve seviyeler',
    'stack.learning': 'Şu an öğreniyorum',
    'level.expert': 'Uzman',
    'level.advanced': 'İleri',
    'level.intermediate': 'Orta',
    'process.eyebrow': 'Süreç',
    'process.title': 'Nasıl çalışıyorum?',
    'engagement.eyebrow': 'Çalışma modeli',
    'engagement.title': 'Size uyan şekilde.',
    'engagement.remote': 'Uzaktan çalışma',
    'engagement.languages': 'Türkçe (ana dil) · İngilizce (C2)',
    'contact.eyebrow': 'İletişim',
    'contact.title': 'Bir sonraki ürününüzü birlikte inşa edelim.',
    'contact.lead':
      'Projenizi ya da aklınızdaki fikri kısaca anlatın; ücretsiz bir ön görüşme ayarlayalım. Teknik bilgi gerekmez.',
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
      'Over 5 years I have built apps used by millions of people. Now I bring the same care to your business: software that loads fast, gets found on Google and keeps running smoothly for years.',
    'hero.cta.primary': 'Book a free intro call',
    'hero.cta.secondary': 'See the work',
    'hero.stat.years': 'years of experience',
    'hero.stat.scale': 'daily orders handled by apps I built',
    'hero.stat.support.value': '80%',
    'hero.stat.support': 'lower customer-support costs',
    'hero.scroll': 'Scroll',
    totop: 'Back to top',

    'services.eyebrow': 'Services',
    'services.title': 'The software your business needs, built end to end.',
    'services.includes': 'What’s included',
    'services.tech': 'Built with',
    'cases.eyebrow': 'Selected work',
    'cases.title': 'Real scale, real results.',
    'cases.note':
      'Client and employer names are withheld for confidentiality. Happy to go into detail on a call.',
    'cases.details': 'Technical details',
    'cases.challenge': 'Challenge',
    'cases.approach': 'Approach',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Common questions',
    'stack.eyebrow': 'For technical teams',
    'stack.title': 'Have an engineering team? I fit right in.',
    'stack.skills': 'Technologies and levels',
    'stack.learning': 'Currently learning',
    'level.expert': 'Expert',
    'level.advanced': 'Advanced',
    'level.intermediate': 'Intermediate',
    'process.eyebrow': 'Process',
    'process.title': 'How I work',
    'engagement.eyebrow': 'Engagement',
    'engagement.title': 'On your terms.',
    'engagement.remote': 'Remote',
    'engagement.languages': 'English (C2) · Turkish (native)',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build your next product together.",
    'contact.lead':
      'Tell me briefly about your project or idea and we’ll set up a free intro call. No technical knowledge needed.',
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
