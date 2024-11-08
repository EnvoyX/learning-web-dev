// Event Handler (Dom Selection)
// querySelector mencari elemen yang pertama ditemukan dan hanya menangkap satu elemen saja
// const xButton = document.querySelector(".close");
// const bubbleCard = document.querySelector(".card");

// xButton.addEventListener("click", function () {
//   bubbleCard.style.display = "none";
// });

// querySelectorAll
// const xButton = document.querySelectorAll(".close");
// const bubbleCard = document.querySelectorAll(".card");

// for (let i = 0; i < xButton.length; i++) {
//   xButton[i].addEventListener("click", function () {
//     bubbleCard[i].style.display = "none";
//   });
// }

// DOM Traversal

const xButton = document.querySelectorAll(".close");
const bubbleCard = document.querySelectorAll(".card");

// for (let i = 0; i < xButton.length; i++) {
//   // Parameter di function dalam EventListener akan menghasilkan suatu object berupa "event" yang terjadi terhadap element yang dituju
//   xButton[i].addEventListener("click", function (event) {
//     // xButton[i].parentElement.style.display = "none";
//     event.target.parentElement.style.display = "none";
//     // Mengembalikan suatu object event dari event "click"
//     console.log(event);
//     console.log(event.target);
//   });
// }

xButton.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
  });
});

const personName = document.querySelector(".nama");
console.log(personName.parentNode);
console.log(personName.parentElement);
// diatas parent (grandparent)
console.log(personName.parentElement.parentElement);
// grand grand parent
console.log(personName.parentElement.parentElement.parentElement);

//sibling
console.log(personName.previousElementSibling);
console.log(personName.nextElementSibling);
console.log(personName.nextElementSibling.nextElementSibling);
