// Stop the browser from restoring the previous scroll position on reload
// (it does this by default even without a #hash in the URL).
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.querySelectorAll('.subnav-toggle, .menu-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var menu = document.getElementById(btn.getAttribute('aria-controls'));
    var isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});

// scroll-behavior: smooth can prevent the browser from auto-scrolling to a
// #hash target when arriving from another page, so handle it manually.
// The hash is then cleared from the URL so a later refresh lands at the
// top of the page instead of re-triggering this scroll.
if (window.location.hash) {
  var hashTarget = document.querySelector(window.location.hash);
  if (hashTarget) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hashTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
