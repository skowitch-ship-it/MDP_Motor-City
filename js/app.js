/**
 * Motor City Casino Hotel — Mobile Food Ordering
 * Shared state: cart count, Figma node refs for design sync.
 */

(function () {
  'use strict';

  const CART_KEY = 'mc_cart';
  const CART_COUNT_KEY = 'mc_cart_count';

  function getCartCount() {
    try {
      var raw = localStorage.getItem(CART_COUNT_KEY);
      return raw ? parseInt(raw, 10) : 0;
    } catch (e) {
      return 0;
    }
  }

  function setCartCount(n) {
    var count = Math.max(0, parseInt(n, 10) || 0);
    try {
      localStorage.setItem(CART_COUNT_KEY, String(count));
    } catch (e) {}
    updateCartBadges();
    return count;
  }

  function updateCartBadges() {
    var count = getCartCount();
    document.querySelectorAll('#cart-count, #cart-count-2').forEach(function (el) {
      if (el) el.textContent = count;
    });
  }

  window.MC = window.MC || {};
  window.MC.getCartCount = getCartCount;
  window.MC.setCartCount = setCartCount;
  window.MC.updateCartBadges = updateCartBadges;

  $(function () {
    updateCartBadges();
  });
})();
