/**
 * Venue page: set banner title from ?id= query (venue id).
 */
(function () {
  'use strict';

  var venues = {
    diner: 'Cozy Retro Diner',
    burgers: 'Grand River Deli & Burgers',
    wok: 'Wok & Bowl',
    pizza: 'Pizza Place',
    pastries: 'Pastries & Starbucks',
    steakhouse: 'Steakhouse'
  };

  function getQueryParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : '';
  }

  $(function () {
    var id = getQueryParam('id') || 'burgers';
    var name = venues[id] || venues.burgers;
    var el = document.getElementById('venue-name');
    if (el) el.textContent = name;

    var banner = document.getElementById('venue-banner');
    if (banner) {
      banner.classList.remove('venue-deli');
      banner.classList.add('venue-' + id);
    }
  });
})();
