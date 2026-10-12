// Lumine Jewels v2 — filter, mobile menu, WhatsApp, footer year
function filterProducts(category, btn) {
  if (!window.LUMINE_CONTENT) return;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    const cat = card.getAttribute('data-category');
    card.classList.toggle('is-hidden', !(category === 'All' || cat === category));
  });
}
function openProductWhatsApp(name, id) {
  if (!window.LUMINE_CONTENT || !window.LUMINE_CONTENT.contact) return;
  const msg = "Hi, I'm interested in " + name + ".";
  const wa = window.LUMINE_CONTENT.contact.whatsapp || '15550142';
  window.open('https://wa.me/' + wa + '?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
}
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu: click toggles; keyboard accessible via button; close on link tap / Escape
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });
  }
  // Footer year (static 2026 already in HTML; JS updates to current year)
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
