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

// Enable & Disable Scroll
const rootElement = document.querySelector(':root');
// Disable Scroll at landing page
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  // Disable Smooth Scrolling from Bootstrap
  rootElement.style.scrollBehavior = 'auto';
}

// Enable Scroll & smooth scrolling after click "lihat undangan"
function enableScroll() {
  window.onscroll = function () {
    rootElement.style.scrollBehavior = 'smooth';
    localStorage.setItem('opened', 'true');
  };
}

if (!localStorage.getItem('opened')) {
  disableScroll();
}
