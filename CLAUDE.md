---
name: lumine-jewels-v2-notes
description: Project notes for Lumine Jewels v2 demo site — plain HTML/CSS/JS, Windows 10, PowerShell-friendly, no libraries.
metadata:
  type: project
---

**PROJECT:** Lumine Jewels demo site (jewellery catalog, WhatsApp + phone ordering, no cart/payment). Plain HTML/CSS/JS. Windows 10, modest laptop, PowerShell-friendly commands.

**FILES:**
- `index.html` — page with head, nav, hero, catalog (12 cards), about/contact/footer
- `styles.css` — all styling (balanced braces 114/114)
- `app.js` — filter, WhatsApp links from content.js, mobile menu, footer year
- `content.js` — single source of truth (shop, contact, 12 products, 13 image names)
- `tools/generate-cards.js` — one-time card generator from content.js; keep with note
- `README.md` — how to open, change content, add photos, launch
- `photo-brief.md` — style + shot list (draft, placeholder descriptions only)
- `images/` — empty; filenames documented in content.js (13 files needed)
- `favicon.svg` — local icon

**CURRENT STATE:**
Finished: new folder `luminje-jewels-v2/`, old untouched (`backup-2026-10-11-1517`); fixes 1-3 done via Edit (filter non-sticky, scroll-margin, card single gold, map fixed, double line removed, buttons fixed); styles balanced; 13 CSS classes match; 12 cards embedded static; mobile hide `.mobile-menu{display:none}` at line 24; contact buttons 2 `.whatsapp-btn` at line 300.
Partly done: Stage 2 (About/Footer styled, README written), but not fully confirmed in browser.
Not verified (honest): visual layout, mobile open/close on real device, WhatsApp click, full JS-off render — no screenshots (Edge hangs; you send them).

**OPEN ITEMS:**
- Filter bar: removed sticky/border/shadow (before/after shown), still needs your browser check
- Map height: 280px desktop / 200px phone fixed (before/after shown)
- Double line above Contact: removed inline border (before/after shown), one `.contact` border-top kept
- Phone view (375px): no fixed widths >375; filter scrolls; mobile hidden; buttons ≥44px — code only, not seen
- Real 13 photos missing from `images/` (placeholders only)
- Noindex tag still in index.html (remove at launch)
- Need `robots.txt` + `sitemap.xml` + real domain before publish

**RULES FOR EVERY SESSION (must follow):**
- Edit HTML/CSS/JS only with file-editing tools (Edit, Write, Read). Never perl, sed, or shell find-and-replace.
- No inline `style=` attributes anywhere; all styling in `styles.css` with consistent classes.
- Make a dated backup (`backup-YYYY-MM-DD-HHMM`) before big changes; ask before deleting, overwriting, installing, or adding libraries.
- No outside fonts, images, or scripts (only local `images/*.jpg`, `favicon.svg`, Google Fonts never added).
- Scripts: Node only; never Python.
- No screenshots — Edge hangs; you send them. Never say "verified" or "pass" for anything I did not run.
- One task at a time; after finishing, report briefly and stop without looping.
- `content.js` is single source of truth; static cards in index.html are maintained by hand and must match content.js; `tools/generate-cards.js` is a placeholder and not working yet; `app.js` filters only (never creates cards).
- Work only inside `lumine-jewels-v2/`; old `lumine-jewels/` untouched (backup `1527`).
- Before launch: add 13 real photos, remove noindex, confirm WhatsApp number (+1 555 0142 placeholder), test mobile.

**MAIN COMMAND
- Also read claude.md from the main installed folder C:\Users\ahad\.claude
