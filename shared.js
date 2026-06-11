// Progressive-enhancement motion. If GSAP is present, hide-then-animate.
// If GSAP failed to load, content stays visible (class never added).
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  document.documentElement.classList.add('js-anim');
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener('DOMContentLoaded', function () {
    // Staggered hero load: any [data-rev] inside [data-hero] animates on a timeline.
    var hero = document.querySelector('[data-hero]');
    if (hero) {
      var heroItems = hero.querySelectorAll('[data-rev]');
      gsap.to(heroItems, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, delay: 0.1
      });
    }

    // Everything else reveals on scroll.
    gsap.utils.toArray('[data-rev]').forEach(function (el) {
      if (hero && hero.contains(el)) return;
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });

    // Subtle parallax drift on glows.
    gsap.utils.toArray('.glow').forEach(function (g, i) {
      gsap.to(g, {
        yPercent: (i % 2 === 0 ? -1 : 1) * 12, ease: 'none',
        scrollTrigger: { trigger: g.closest('section') || g, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  });
})();
