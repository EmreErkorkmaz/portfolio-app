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
//    allowed, and only when the section is about to enter the viewport.
const processSection = document.querySelector<HTMLElement>('[data-process]');
const wide = matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');

if (processSection) {
  let started = false;
  const start = () => {
    if (started || !wide.matches) return;
    started = true;
    import('./scene').then(({ initProcessScene }) => initProcessScene(processSection));
  };

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        start();
        if (started) io.disconnect();
      }
    },
    { rootMargin: '100% 0px' },
  );
  io.observe(processSection);
  wide.addEventListener('change', start);
}
