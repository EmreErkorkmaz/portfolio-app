import type { Localized } from '../i18n/ui';

export interface Step {
  title: Localized;
  body: Localized;
}

export const process: Step[] = [
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

export const engagement: { title: Localized; body: Localized }[] = [
  {
    title: { tr: 'Proje bazlı', en: 'Fixed scope' },
    body: {
      tr: 'Kapsamı belli bir site, mağaza ya da uygulama için net teslim tarihi ve sabit fiyat.',
      en: 'A clear deadline and a fixed price for a defined site, store or app.',
    },
  },
  {
    title: { tr: 'Sözleşmeli', en: 'Contract' },
    body: {
      tr: 'Saatlik ya da günlük çalışma; ekibinize ihtiyaç duyduğunuz anda deneyimli bir geliştirici.',
      en: 'Hourly or daily; an experienced developer on your team exactly when you need one.',
    },
  },
  {
    title: { tr: 'Uzun dönem', en: 'Long term' },
    body: {
      tr: 'Haftanın belirli günlerinde düzenli destek; ürününüz sürekli gelişir ve bakımlı kalır.',
      en: 'Regular support on set days each week, so your product keeps improving and stays maintained.',
    },
  },
];
