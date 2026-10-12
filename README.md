# Lumine Jewels — How to use this site

## Open
Open index.html in any browser (Chrome, Safari, Edge, Firefox). No server needed — it works from the folder.

## Change content (no coding needed)
Edit content.js (plain text between quotes):
- Shop name, tagline, currency
- Phone (+1 555 0142), WhatsApp, email (hello@lumine-jewels.example), address, hours
- Social links (Instagram, WhatsApp)
- Products (id, name, category, material, price, description) — 12 items
- Image filenames (images/...) — 13 files (hero + 12 cards)
- SEO title/description
- Footer year and copyright

## Regenerate cards after changing products
If you add/remove/change products, open tools/generate-cards.js (note inside tells how to re-run from content.js) and generate new static <article> blocks. The static cards in index.html must match content.js — app.js only filters them; it does not create them.

## Add 13 real photos
Place in images/ folder with exact filenames from content.js:
hero-ring.jpg, r1-solitaire-whisper.jpg, r2-eternity-band.jpg, r3-signet-heritage.jpg, n1-pearl-drop.jpg, n2-diamond-station.jpg, n3-locket-keepsake.jpg, e1-stud-classics.jpg, e2-hoop-essentials.jpg, e3-chandelier-dream.jpg, b1-tennis-bracelet.jpg, b2-chain-link.jpg, b3-bangle-stack.jpg
When real photos are added, the onerror fallback stops firing and images show.

## Remove "Sample" markers
When all 13 photos are real, edit index.html and remove the <span class="img-sample-badge">Sample</span> elements from each card fallback panel (easy find/replace). Also remove the per-card "Sample images — replace with real photos before launch." note lines.

## Launch settings (before publishing)
- Remove <meta name="robots" content="noindex, nofollow" /> from index.html
- Add /robots.txt with Allow: /
- Add /sitemap.xml with the real domain (update canonical URL in content.js)
- Replace .example domain with real domain in content.js (seo.canonical)
- Confirm WhatsApp number is real (currently +1 555 0142 placeholder)

## Host for free
Upload the folder to Netlify Drop (drag folder) or GitHub Pages (push to repo, enable Pages). Custom domain: add in Netlify/GitHub settings. HTTPS automatic.

## Design notes
Cream (#F5F2EB), gold (#A6823B), ink (#121212). Serif display (Georgia) + system sans-serif body. No external fonts or libraries.
