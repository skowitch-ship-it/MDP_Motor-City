/**
 * Error page: show different copy by ?type= (network, unavailable, validation).
 * NR-01: non-technical, actionable messages.
 */
(function () {
  'use strict';

  var messages = {
    network: {
      text: "We couldn't connect. Check your Wi‑Fi or cellular connection and try again.",
      action: 'Try again'
    },
    unavailable: {
      text: "This restaurant isn't taking orders right now. Pick another venue or check back during their hours.",
      action: 'See all venues'
    },
    validation: {
      text: "Please check your payment details and try again. If it keeps happening, use a different card or pay with comp credits.",
      action: 'Back to checkout'
    },
    faq: {
      text: "Support is temporarily unavailable. Try again in a few minutes or visit the front desk.",
      action: 'Back to home'
    }
  };

  function getQueryParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : '';
  }

  $(function () {
    var type = getQueryParam('type') || 'network';
    var msg = messages[type] || messages.network;
    var el = document.getElementById('error-message');
    if (el) el.textContent = msg.text;
    var retry = document.getElementById('retry-btn');
    if (retry) {
      retry.textContent = msg.action;
      if (type === 'unavailable') retry.onclick = function () { window.location.href = 'index.html'; };
      else if (type === 'validation') retry.onclick = function () { window.location.href = 'checkout.html'; };
      else retry.onclick = function () { window.location.reload(); };
    }
  });
})();
