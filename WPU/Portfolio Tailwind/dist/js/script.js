// Hamburger

const hamburger = document.querySelector(`#hamburger`);
const navMenu = document.querySelector(`#nav-menu`);

hamburger.addEventListener(`click`, function () {
  hamburger.classList.toggle(`hamburger-active`);
  navMenu.classList.toggle(`hidden`);
});

//  Navbar Fixed
window.onscroll = function () {
  const btnToTop = document.querySelector(`#backToTopBtn`);
  const header = document.querySelector(`header`);
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add(`navbar-fixed`);
    btnToTop.classList.remove(`hidden`);
    btnToTop.classList.add(`flex`);
  } else {
    header.classList.remove(`navbar-fixed`);
    btnToTop.classList.add(`hidden`);
    btnToTop.classList.remove(`flex`);
  }
};

// Click outside Hamburger
window.addEventListener(`click`, function (event) {
  if (event.target != hamburger && event.target != navMenu) {
    hamburger.classList.remove(`hamburger-active`);
    navMenu.classList.add(`hidden`);
  }
});

// Darkmode Toggle

const darkToggle = document.querySelector(`#dark-toggle`);
const html = document.querySelector(`html`);

darkToggle.addEventListener(`click`, function () {
  if (darkToggle.checked) {
    html.classList.add(`dark`);
  } else {
    html.classList.remove(`dark`);
  }
});
