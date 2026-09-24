export const languages = { tr: 'Türkçe', en: 'English' } as const;
export type Lang = keyof typeof languages;
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = 'tr';

export const ui = {
  tr: {
    'meta.title': 'Emre Erkorkmaz — Freelance Full-Stack Engineer',
    'meta.description':
      'Freelance full-stack yazılımcı. React, TypeScript, Next.js ve Node.js ile hızlı, ölçeklenebilir web ve mobil ürünler geliştiriyorum. Sözleşmeli ve proje bazlı işlere açığım.',
    skip: 'İçeriğe geç',
    'nav.services': 'Hizmetler',
    'nav.cases': 'İşler',
    'nav.stack': 'Teknolojiler',
    'nav.process': 'Süreç',
    'nav.contact': 'İletişim',
    'nav.lang': 'Switch to English',
    'theme.toggle': 'Temayı değiştir',

    'hero.available': 'Yeni projelere açık',
    'hero.busy': 'Şu an dolu, yine de yazabilirsiniz',
    'hero.role': 'Freelance Full-Stack Engineer',
    'hero.title.a': 'Fikirden ürüne,',
    'hero.title.b': 'uçtan uca.',
    'hero.lead':
      'React, TypeScript ve Node.js ile milyonlarca kullanıcıya dokunan ürünler geliştirdim. Şimdi aynı özeni sizin projenize getiriyorum: hızlı, erişilebilir ve bakımı kolay yazılım.',
    'hero.cta.primary': 'Proje konuşalım',
    'hero.cta.secondary': 'İşlere göz at',
    'hero.stat.years': 'yıl deneyim',
    'hero.stat.scale': 'günlük sipariş işleyen ürünler',
    'hero.stat.speed': 'daha hızlı component üretimi',
    'hero.scroll': 'Kaydır',

    'services.eyebrow': 'Hizmetler',
    'services.title': 'Ekibinize katılan bir mühendis, projenizi sahiplenen bir partner.',
    'cases.eyebrow': 'Seçili işler',
    'cases.title': 'Gerçek ölçekte, gerçek sonuçlar.',
    'cases.note':
      'Gizlilik nedeniyle müşteri ve işveren adları paylaşılmıyor. Detayları görüşmede konuşmaktan memnuniyet duyarım.',
    'cases.challenge': 'Sorun',
    'cases.approach': 'Yaklaşım',
    'stack.eyebrow': 'Teknolojiler',
    'stack.title': 'Doğru iş için doğru araç.',
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
      'Projenizi, zaman çizelgenizi ve beklentilerinizi kısaca anlatın; en kısa sürede dönüş yapayım.',
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
      'Freelance full-stack engineer building fast, scalable web and mobile products with React, TypeScript, Next.js and Node.js. Available for contract and project-based work.',
    skip: 'Skip to content',
    'nav.services': 'Services',
    'nav.cases': 'Work',
    'nav.stack': 'Stack',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.lang': 'Türkçeye geç',
    'theme.toggle': 'Toggle theme',

    'hero.available': 'Available for new projects',
    'hero.busy': 'Currently booked, but feel free to reach out',
    'hero.role': 'Freelance Full-Stack Engineer',
    'hero.title.a': 'From idea to product,',
    'hero.title.b': 'end to end.',
    'hero.lead':
      'I have built products with React, TypeScript and Node.js that reach millions of users. Now I bring the same care to your project: fast, accessible and maintainable software.',
    'hero.cta.primary': "Let's talk",
    'hero.cta.secondary': 'See the work',
    'hero.stat.years': 'years of experience',
    'hero.stat.scale': 'daily orders handled by products I built',
    'hero.stat.speed': 'faster component delivery',
    'hero.scroll': 'Scroll',

    'services.eyebrow': 'Services',
    'services.title': 'An engineer who joins your team, a partner who owns your project.',
    'cases.eyebrow': 'Selected work',
    'cases.title': 'Real scale, real results.',
    'cases.note':
      'Client and employer names are withheld for confidentiality. Happy to go into detail on a call.',
    'cases.challenge': 'Challenge',
    'cases.approach': 'Approach',
    'stack.eyebrow': 'Stack',
    'stack.title': 'The right tool for the job.',
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
      'Tell me briefly about your project, timeline and expectations; I will get back to you shortly.',
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
