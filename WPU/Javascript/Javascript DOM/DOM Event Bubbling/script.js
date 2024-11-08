// Event Handler
//(Dom Selection)
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

// const xButton = document.querySelectorAll(".close");
// const cards = document.querySelectorAll(".card");

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

// Prevent Default adalah method yang ada di dalam object "event"
// Bertujuan untuk menghentikan aksi default yang dilakukan oleh sebuah element.

// xButton.forEach(function (element) {
//   element.addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//     event.preventDefault();
//     event.stopPropagation();
//   });
// });

// Event Bubbling
// .stopPropagation();

// What is Event Bubbling?

// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event,
//, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
// This is the default behavior of events on elements unless you stop the propagation

//the default behavior in which an event triggered on a nested element propagates up through its ancestors in the DOM hierarchy, allowing each ancestor to respond to the event

// cards.forEach(function (card) {
//   card.addEventListener("click", function (event) {
//     alert("Card Clicked!");
//   });
// });

// Rewrite for better functionality

const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  if (event.target.className == "close") {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
    event.stopPropagation();
  }
});

const personName = document.querySelector(".nama");

// Parent
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
