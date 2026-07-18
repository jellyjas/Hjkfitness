document.querySelectorAll('.subnav-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var menu = document.getElementById(btn.getAttribute('aria-controls'));
    var isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});

// scroll-behavior: smooth can prevent the browser from auto-scrolling to a
// #hash target when arriving from another page, so handle it manually.
if (window.location.hash) {
  var hashTarget = document.querySelector(window.location.hash);
  if (hashTarget) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hashTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
}
