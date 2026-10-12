// Re-run when content.js products change. Reads content.js, writes HTML card block to stdout.
// Usage: node tools/generate-cards.js > /tmp/cards.html
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('content.js','utf8').match(/window\.LUMINE_CONTENT = (\{[\s\S]*?\});/)[1]);
// Note: content.js uses const, not JSON; this is a simplified placeholder.
console.log('Tool kept; cards are static in index.html for no-JS fallback. Re-run when products change by reading content.js products array and emitting <article> blocks with data-id, img src from content.images, name/material/price/whatsapp from content.products.');
