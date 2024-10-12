const offcanvas = document.querySelector('.offcanvas');
const stickyTop = document.querySelector('.sticky-top');

// Saat click btn open hamburger
offcanvas.addEventListener('show.bs.offcanvas', function () {
  stickyTop.style.overflow = 'visible';
});

// Saat click btn close
const btnClose = document.querySelector('.btn-close');

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
  stickyTop.style.overflow = 'hidden';
});
