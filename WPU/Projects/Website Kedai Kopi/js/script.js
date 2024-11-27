//  For Hamburger menu
// Take element navbarNav and Hamburger Menu
const navbarNav = document.querySelector(`.navbar-nav`);
// const hamburgerMenu = document.querySelector(`#hamburger-menu`);

// if hamburger menu clicked
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// Click anywhere outside the element to close

const BtnHamburger = document.querySelector(`#hamburger-menu`);
const BtnSearch = document.querySelector(`#search-button`);
const BtnShopping = document.querySelector("#shopping-cart-button");

document.addEventListener(`click`, function (event) {
  // as long as not clicking hamburger menu and navbar
  if (
    !BtnHamburger.contains(event.target) &&
    !navbarNav.contains(event.target)
  ) {
    navbarNav.classList.remove(`active`);
  }
  // as long as not clicking Search button and search from
  if (!BtnSearch.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove(`active`);
  }
  // as long as not clicking shopping cart button and Shopping cart modals
  if (
    !BtnShopping.contains(event.target) &&
    !shoppingCartModal.contains(event.target)
  ) {
    shoppingCartModal.classList.remove(`active`);
  }
});

//  For Search Bar
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector(`#search-box`);

document.querySelector(`#search-button`).onclick = (event) => {
  searchForm.classList.toggle(`active`);
  // after user click button, focus to input immideately
  searchBox.focus();
};

// For Shopping Cart

const shoppingCartModal = document.querySelector(".shopping-cart");
const shoppingCartBtn = document.querySelector("#shopping-cart-button");

document.querySelector(`#shopping-cart-button`).onclick = (event) => {
  shoppingCartModal.classList.toggle(`active`);
};
// Alternative
// shoppingCartBtn.addEventListener("click", function (event) {
//   shoppingCartModal.classList.toggle(`active`);
// });

// For Modal Box
const modal = document.querySelector(`#item-detail-modal`);
const itemDetailModalButton = document.querySelector(
  `.view-item-details-button`
);
const itemDetailModalButtons = document.querySelectorAll(
  `.view-item-details-button`
);
const itemDetailModalContainer = document.querySelector(`.modal-container`);
const itemDetailModalContent = document.querySelector(`.modal-content`);
const productImages = document.querySelectorAll(`.product-img`);
console.log(productImages);
productImages.forEach((img) => console.log(img.getAttribute(`src`)));

itemDetailModalButtons.forEach((btn, i) => {
  // console.log(btn);
  // console.log(i);
  btn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // itemDetailModalContainer.innerHTML = `<a href="#"><i data-feather="x" class="close-icon"></i></a>
    //     <div class="modal-content">
    //       <img
    //         src=""
    //         alt="Product ${i + 1}"
    //       />
    //       <div class="product-content">
    //         <h3>Product ${i + 1}</h3>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           Necessitatibus totam tenetur ea nemo obcaecati velit odio
    //           consequatur laboriosam optio! Excepturi voluptatem sint ratione
    //           obcaecati aperiam.
    //         </p>
    //         <div class="product-stars">
    //           <i data-feather="star" class="star-full"></i>
    //           <i data-feather="star" class="star-full"></i>
    //           <i data-feather="star" class="star-full"></i>
    //           <i data-feather="star" class="star-full"></i>
    //           <i data-feather="star" class="star-full"></i>
    //         </div>
    //         <div class="product-price">IDR 30K <span>IDR 55K</span></div>
    //         <a href=""
    //           ><i data-feather="shopping-cart"></i><span>add to cart</span></a
    //         >
    //       </div>
    //     </div>`;
    modal.style.display = `flex`;
  };
});

// Alternative;
// itemDetailModalButton.addEventListener(`click`, function (e) {
//   itemDetailModal.style.display = `flex`;
//   // Karena element tag nya a (anchor) maka diperlukan preventDefault();
//   e.preventDefault();
//   e.stopPropagation();
// });

// Close Modal
document.querySelector(`.modal .close-icon`).onclick = (e) => {
  modal.style.display = `none`;
  e.preventDefault();
  e.stopPropagation();
};

// Click outside modal element
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = `none`;
  }
};
