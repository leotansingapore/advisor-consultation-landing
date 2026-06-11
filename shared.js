// Progressive-enhancement reveal. If GSAP is present, hide-then-animate.
// If GSAP failed to load, content stays visible (class never added).
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  document.documentElement.classList.add('js-anim');
  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener('DOMContentLoaded', function () {
    gsap.utils.toArray('[data-rev]').forEach(function (el) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });
    // simple countdown for scarcity (visual only)
    var cd = document.querySelector('[data-countdown]');
    if (cd) {
      var n = parseInt(cd.getAttribute('data-countdown'), 10) || 7;
      cd.textContent = n;
    }
  });
})();
