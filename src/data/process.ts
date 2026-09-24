import type { Localized } from '../i18n/ui';

export interface Step {
  title: Localized;
  body: Localized;
}

export const process: Step[] = [
  {
    title: { tr: 'Keşif', en: 'Discovery' },
    body: {
      tr: 'Kısa bir görüşmede hedefinizi, kullanıcılarınızı ve kısıtlarınızı dinliyorum. Ne inşa edeceğimizden önce neden inşa ettiğimizi netleştiriyoruz.',
      en: 'A short call to understand your goal, users and constraints. We agree on why before we decide what.',
    },
  },
  {
    title: { tr: 'Planlama', en: 'Planning' },
    body: {
      tr: 'Kapsamı, teknik mimariyi ve teslim adımlarını yazılı bir plana döküyorum. Sürpriz yok; takvim ve öncelikler baştan belli.',
      en: 'Scope, architecture and milestones in a written plan. No surprises: timeline and priorities are clear from day one.',
    },
  },
  {
    title: { tr: 'Geliştirme', en: 'Build' },
    body: {
      tr: 'Kısa iterasyonlarla ilerliyor, her hafta çalışan bir demo paylaşıyorum. Kod sizin repo’nuzda, test ve CI ile birlikte büyüyor.',
      en: 'Short iterations with a working demo every week. The code lives in your repo and grows with tests and CI.',
    },
  },
  {
    title: { tr: 'Teslim & destek', en: 'Launch & support' },
    body: {
      tr: 'Yayına alma, dokümantasyon ve ekibinize devir. Yayından sonra da iyileştirme ve bakım için yanınızdayım.',
      en: 'Release, documentation and handover to your team. I stay around after launch for improvements and maintenance.',
    },
  },
];

export const engagement: { title: Localized; body: Localized }[] = [
  {
    title: { tr: 'Proje bazlı', en: 'Fixed scope' },
    body: {
      tr: 'Kapsamı belli bir ürün veya özellik; net teslim tarihi ve sabit teklif.',
      en: 'A well-defined product or feature with a clear deadline and a fixed quote.',
    },
  },
  {
    title: { tr: 'Sözleşmeli', en: 'Contract' },
    body: {
      tr: 'Saatlik veya günlük; mevcut ekibinize kıdemli bir frontend / full-stack mühendis olarak katılırım.',
      en: 'Hourly or daily; I join your existing team as a senior frontend / full-stack engineer.',
    },
  },
  {
    title: { tr: 'Uzun dönem', en: 'Long term' },
    body: {
      tr: 'Haftada belirli gün part-time; ürününüzün sürekli gelişimi ve bakımı için.',
      en: 'Part-time on set days each week, for ongoing product development and maintenance.',
    },
  },
];
