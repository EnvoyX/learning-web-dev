// Take element navbarNav and Hamburger Menu
const navbarNav = document.querySelector(`.navbar-nav`);
// const hamburgerMenu = document.querySelector(`#hamburger-menu`);

// if hamburger menu clicked
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// Click anywhere to close sidebar

const hamburger = document.querySelector(`#hamburger-menu`);
console.log(hamburger);
console.log(navbarNav);

document.addEventListener(`click`, function (event) {
  // as long as not clicking hamburger menu and navbar
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove(`active`);
  }
});
