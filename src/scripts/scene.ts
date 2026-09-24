import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initProcessScene(section: HTMLElement) {
  const pin = section.querySelector<HTMLElement>('.process__pin');
  const viewport = section.querySelector<HTMLElement>('.process__viewport');
  const track = section.querySelector<HTMLElement>('.process__track');
  const progress = section.querySelector<HTMLElement>('[data-process-progress]');
  if (!pin || !viewport || !track) return;

  const mm = gsap.matchMedia();

  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    section.classList.add('is-horizontal');
    // Steps are revealed by the horizontal motion itself.
    track.querySelectorAll('[data-reveal]').forEach((el) => el.removeAttribute('data-reveal'));

    const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progress) progress.style.transform = `scaleX(${self.progress})`;
        },
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(track, { clearProps: 'transform' });
      section.classList.remove('is-horizontal');
    };
  });
}
