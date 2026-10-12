/**
 * Lumine Jewels — Single Source of Truth for All Editable Content
 *
 * INSTRUCTIONS: Edit this file to change shop name, tagline, contact details,
 * products, prices, social links, etc. Everything marked [PLACEHOLDER] must
 * be replaced with real content before launch.
 *
 * No code knowledge needed — just change the text between quotes.
 */

const LUMINE_CONTENT = {
  // ── SHOP IDENTITY ──────────────────────────────────────────────
  shop: {
    name: "Lumine Jewels",                    // [PLACEHOLDER] Your shop name
    tagline: "Curated pieces for every chapter.", // [PLACEHOLDER] Short tagline
    currency: "$",                             // [PLACEHOLDER] Currency symbol (e.g., "$", "€", "₹", "£")
  },

  // ── CONTACT DETAILS ────────────────────────────────────────────
  contact: {
    phone: "+1 555 0142",                      // [PLACEHOLDER] Fictional 555 range
    whatsapp: "+15550142",                     // [PLACEHOLDER] Same number, no spaces, for wa.me links
    email: "hello@lumine-jewels.example",      // [PLACEHOLDER] .example domain = reserved for docs
    address: "123 Jewelry Lane, Gem City, GC 10001", // [PLACEHOLDER] Fake address
    hours: "Mon–Fri 10am–7pm, Sat 10am–5pm, Sun Closed", // [PLACEHOLDER]
  },

  // ── SOCIAL LINKS ───────────────────────────────────────────────
  // Use "#" or clearly fake example URLs. Real URLs could belong to someone else.
  social: {
    instagram: "#",                            // [PLACEHOLDER] e.g., "https://instagram.com/yourhandle"
    whatsapp: "#",                             // [PLACEHOLDER] e.g., "https://wa.me/15550142"
  },

  // ── PRODUCT CATALOG ────────────────────────────────────────────
  // 12 products, 3 per category. All data is [PLACEHOLDER].
  // Fields: id (unique), name, category (Rings/Necklaces/Earrings/Bracelets),
  // material (e.g., "18k Gold", "Sterling Silver"), price (number, minor units not needed),
  // description (short, for WhatsApp message context).
  products: [
    // Rings
    { id: "r1", name: "Solitaire Whisper", category: "Rings", material: "18k Gold", price: 4500, description: "Delicate solitaire ring with a single brilliant stone." },
    { id: "r2", name: "Eternity Band", category: "Rings", material: "Platinum", price: 6200, description: "Full eternity band with channel-set diamonds." },
    { id: "r3", name: "Signet Heritage", category: "Rings", material: "14k Gold", price: 3800, description: "Classic signet ring, ready for engraving." },

    // Necklaces
    { id: "n1", name: "Pearl Drop", category: "Necklaces", material: "18k Gold & Pearl", price: 5200, description: "Single freshwater pearl on a fine chain." },
    { id: "n2", name: "Diamond Station", category: "Necklaces", material: "14k Gold", price: 7800, description: "Five-station diamond necklace, adjustable length." },
    { id: "n3", name: "Locket Keepsake", category: "Necklaces", material: "Sterling Silver", price: 2100, description: "Vintage-style locket, holds two photos." },

    // Earrings
    { id: "e1", name: "Stud Classics", category: "Earrings", material: "18k Gold", price: 2900, description: "Round brilliant studs, everyday size." },
    { id: "e2", name: "Hoop Essentials", category: "Earrings", material: "14k Gold", price: 3400, description: "Medium huggie hoops with secure latch." },
    { id: "e3", name: "Chandelier Dream", category: "Earrings", material: "Sterling Silver", price: 1800, description: "Cascading drops for evening wear." },

    // Bracelets
    { id: "b1", name: "Tennis Bracelet", category: "Bracelets", material: "18k Gold", price: 8900, description: "Continuous line of matched stones." },
    { id: "b2", name: "Chain Link", category: "Bracelets", material: "Sterling Silver", price: 1500, description: "Substantial curb chain, lobster clasp." },
    { id: "b3", name: "Bangle Stack", category: "Bracelets", material: "14k Gold", price: 4200, description: "Set of three thin bangles, sold together." },
  ],

  // ── CATEGORIES (order shown in filter) ─────────────────────────
  categories: ["Rings", "Necklaces", "Earrings", "Bracelets"],

  // ── IMAGE FILE NAMES (single source of truth) ──────────────────
  images: {
    hero: "images/hero-ring.jpg",
    about: "images/about-showroom.jpg",
    r1: "images/r1-solitaire-whisper.jpg",
    r2: "images/r2-eternity-band.jpg",
    r3: "images/r3-signet-heritage.jpg",
    n1: "images/n1-pearl-drop.jpg",
    n2: "images/n2-diamond-station.jpg",
    n3: "images/n3-locket-keepsake.jpg",
    e1: "images/e1-stud-classics.jpg",
    e2: "images/e2-hoop-essentials.jpg",
    e3: "images/e3-chandelier-dream.jpg",
    b1: "images/b1-tennis-bracelet.jpg",
    b2: "images/b2-chain-link.jpg",
    b3: "images/b3-bangle-stack.jpg",
  },

  // ── SEO & META ─────────────────────────────────────────────────
  seo: {
    title: "Lumine Jewels | Curated Fine Jewellery",           // [PLACEHOLDER] Page title
    description: "Discover hand-selected rings, necklaces, earrings, and bracelets. Order via WhatsApp or phone. Visit our Gem City showroom.", // [PLACEHOLDER] Meta description
    ogImage: "",                                               // [PLACEHOLDER] Open Graph image URL (leave empty for now)
    canonical: "https://lumine-jewels.example/",               // [PLACEHOLDER] Your real domain at launch
  },

  // ── FOOTER ─────────────────────────────────────────────────────
  footer: {
    copyright: "© 2026 Lumine Jewels. All rights reserved.",   // [PLACEHOLDER] Update year/name
  },
};

// Make available globally (no modules, works when opened directly from file)
window.LUMINE_CONTENT = LUMINE_CONTENT;