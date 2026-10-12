// Lumine Jewels v2 — filter, WhatsApp, footer year
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
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
