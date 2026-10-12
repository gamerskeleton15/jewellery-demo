(function () {
  function init() {
    var btn = document.getElementById('mobile-menu-btn');
    if (!btn) btn = document.querySelector('.mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) {
      console.warn('menu.js: missing button or panel', { btn: !!btn, menu: !!menu });
      return;
    }
    console.log('menu.js: ready, button and panel found');
    function toggle() {
      var open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      console.log('menu.js: toggled, is-open = ' + open);
    }
    btn.addEventListener('click', toggle);
    btn.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { menu.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('is-open')) { menu.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
