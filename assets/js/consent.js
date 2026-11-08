// Cookie consent banner (GA4 Consent Mode). Choice kept 6 months in localStorage.
// GA starts with analytics_storage denied (set in each page's gtag block).
(function () {
  // MAX_AGE must match the 15724800000 (ms) in the consent snippet of every page <head>.
  var KEY = 'dc_consent', MAX_AGE = 182 * 24 * 3600 * 1000;

  function saved() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY));
      return c && Date.now() - c.t < MAX_AGE ? c.v : null;
    } catch (e) { return null; }
  }

  function choose(v) {
    try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {}
    if (window.gtag) gtag('consent', 'update', { analytics_storage: v });
    var el = document.getElementById('dc-consent');
    if (el) el.remove();
  }

  function show() {
    if (document.getElementById('dc-consent')) return;
    var bar = document.createElement('div');
    bar.id = 'dc-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookies');
    bar.innerHTML =
      '<style>' +
      '#dc-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 24px;' +
      'max-width:1100px;margin:0 auto;padding:16px 20px;background:#fff;color:#515151;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.18);' +
      'font:15px/1.4 "Helvetica Neue",Helvetica,Arial,sans-serif}' +
      '#dc-consent a{color:#FF3C00}' +
      '#dc-consent .dc-actions{display:flex;gap:12px;flex:0 0 auto}' +
      '#dc-consent button{min-width:110px;padding:10px 18px;border-radius:999px;font:600 15px "Helvetica Neue",Helvetica,Arial,sans-serif;cursor:pointer}' +
      '#dc-consent .dc-no{background:#fff;color:#FF3C00;border:2px solid #FF3C00}' +
      '#dc-consent .dc-yes{background:linear-gradient(to right,#FF0000,#FF7800);color:#fff;border:2px solid transparent}' +
      '@media (max-width:600px){#dc-consent{justify-content:center;text-align:center}#dc-consent .dc-actions{width:100%}#dc-consent button{flex:1}}' +
      '</style>' +
      '<span>This site uses cookies to improve your visiting experience. We use Google Analytics technology. ' +
      '<a href="/privacypolicy.html">More info</a></span>' +
      '<span class="dc-actions"><button type="button" class="dc-no" data-v="denied">Decline</button>' +
      '<button type="button" class="dc-yes" data-v="granted">Accept</button></span>';
    bar.addEventListener('click', function (e) {
      var v = e.target.getAttribute('data-v');
      if (v) choose(v);
    });
    document.body.prepend(bar); // first in tab order for keyboard users
  }

  window.dcShowConsent = show;
  if (!saved()) show();
})();
