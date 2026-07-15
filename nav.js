document.querySelectorAll('.subnav-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var menu = document.getElementById(btn.getAttribute('aria-controls'));
    var isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});
