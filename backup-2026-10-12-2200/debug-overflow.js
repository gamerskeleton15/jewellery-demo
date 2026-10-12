// TEMPORARY DEBUG — REMOVE AFTER USE
(function () {
  function run() {
    var vw = window.innerWidth || document.documentElement.clientWidth;
    var sw1 = document.documentElement.scrollWidth;
    var sw2 = document.body ? document.body.scrollWidth : sw1;
    var overflow = sw1 > vw ? (sw1 - vw) + 'px' : 'none';
    var offenders = [];
    var all = document.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      var rect = el.getBoundingClientRect();
      if (rect.right > vw + 2 || rect.left < -2) {
        var sel = el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : '');
        offenders.push({ selector: sel, w: Math.round(rect.width) + 'px', left: Math.round(rect.left) + 'px', right: Math.round(rect.right) + 'px', pos: (el.style.position || getComputedStyle(el).position), minW: (getComputedStyle(el).minWidth || '-') });
      }
    }
    offenders.sort(function (a, b) { return parseInt(b.w) - parseInt(a.w); });
    console.log('DEBUG scrollWidth=' + sw1 + ' body=' + sw2 + ' viewport=' + vw + ' overflow=' + overflow);
    console.table(offenders.slice(0, 8));
    for (var j = 0; j < Math.min(8, offenders.length); j++) {
      try { document.querySelector(offenders[j].selector).style.outline = '2px solid red'; } catch (e) {}
    }
    var panel = document.getElementById('debug-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'debug-panel';
      panel.style.cssText = 'position:fixed;bottom:0;left:0;width:100%;max-height:40vh;overflow-y:auto;background:#fff;color:#000;font-family:monospace;font-size:11px;z-index:9999;padding:6px 8px;border-top:2px solid red;box-sizing:border-box;line-height:1.3';
      document.body.appendChild(panel);
    }
    var lines = ['viewport=' + vw + ' scrollWidth=' + sw1 + ' bodyScroll=' + sw2 + ' overflow=' + overflow, '--- top 8 offenders ---'];
    for (var k = 0; k < Math.min(8, offenders.length); k++) {
      var o = offenders[k];
      lines.push(o.selector + ' | w=' + o.w + ' left=' + o.left + ' right=' + o.right + ' pos=' + o.pos + ' minW=' + o.minW);
    }
    // Menu state (reads only)
    var menu = document.getElementById('mobile-menu');
    var btn = document.querySelector('.mobile-menu-btn');
    var menuState = '';
    if (menu && btn) {
      var s = getComputedStyle(menu);
      menuState = 'siteHandler=' + (window.__menuToggled ? window.__menuToggled : 'no') + ' class=' + menu.className + ' display=' + s.display + ' top=' + s.top + ' left=' + s.left + ' w=' + s.width + ' h=' + s.height + ' z=' + s.zIndex;
    }
    lines.push('--- menu button / panel ---');
    lines.push(menuState || 'menu/button not found');
    panel.innerHTML = '<pre style="margin:0;font-family:monospace;font-size:11px;line-height:1.3">' + lines.join('\n') + '</pre>' + '<button onclick="navigator.clipboard.writeText(document.getElementById(\'debug-panel\').innerText).then(function(){this.textContent=\'Copied!\'})" style="margin-top:4px;padding:2px 6px;font-family:inherit;font-size:11px">Copy</button>';
  }
  if (document.readyState === 'loading') window.addEventListener('load', run); else run();
  setTimeout(run, 1000);
  if (document.fonts) document.fonts.ready.then(run);
  // Capture-phase observer (reads only)
  document.querySelector('.mobile-menu-btn')?.addEventListener('click', function () {
    setTimeout(run, 50);
  }, true);
})();
