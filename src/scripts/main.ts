// Page-level behaviour. Everything here is progressive enhancement: the page is complete
// and readable without it.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const nativeScrollTimeline = CSS.supports('animation-timeline: view()');

// 1. Reveal fallback for browsers without CSS scroll-driven animations.
if (!nativeScrollTimeline && !reduceMotion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  document.querySelectorAll('[data-reveal], [data-draw]').forEach((el) => io.observe(el));
}

// 2. Copy-email button (only shown when the Clipboard API exists).
const copyBtn = document.querySelector<HTMLButtonElement>('[data-copy]');
if (copyBtn && navigator.clipboard) {
  copyBtn.hidden = false;
  const original = copyBtn.textContent;
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.copy ?? '');
      copyBtn.textContent = copyBtn.dataset.copiedLabel ?? original;
      setTimeout(() => (copyBtn.textContent = original), 2000);
    } catch {
      // Clipboard can be blocked by permissions; the mailto link still works.
    }
  });
}

// 3. Pinned horizontal Process scene. GSAP is fetched only on large screens with motion
//    allowed, once the page has loaded and the main thread is idle, so it never competes
//    with first paint and is usually ready before the visitor reaches the section.
const processSection = document.querySelector<HTMLElement>('[data-process]');
const wide = matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');

// ScrollTrigger restores the scroll position while it sets up the pin, which cancels any
// smooth anchor scroll in flight. Remember recent in-page link clicks and resume them.
let pendingAnchor: { hash: string; at: number } | null = null;
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest?.<HTMLAnchorElement>('a[href^="#"]');
  if (a && a.hash.length > 1) pendingAnchor = { hash: a.hash, at: performance.now() };
});

function resumeAnchorScroll() {
  if (!pendingAnchor || performance.now() - pendingAnchor.at > 4000) return;
  const target = document.getElementById(decodeURIComponent(pendingAnchor.hash.slice(1)));
  pendingAnchor = null;
  target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
}

if (processSection) {
  let started = false;
  const start = () => {
    if (started || !wide.matches) return;
    started = true;
    import('./scene').then(({ initProcessScene }) => {
      initProcessScene(processSection);
      resumeAnchorScroll();
    });
  };

  const whenIdle = () =>
    'requestIdleCallback' in window
      ? requestIdleCallback(start, { timeout: 2000 })
      : setTimeout(start, 1000);

  if (document.readyState === 'complete') whenIdle();
  else addEventListener('load', whenIdle, { once: true });
  wide.addEventListener('change', start);
}
