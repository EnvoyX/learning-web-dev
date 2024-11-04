// DOM Events

// Event Handler (old method)
// on<event>
// ex. onclick(), onclose(), onchange(), etc.
const p3 = document.querySelector(".p3");
function changeColorP2() {
  p2.style.backgroundColor = "lightgreen";
}
function changeColorP3() {
  p3.style.backgroundColor = "lightgreen";
}

const p2 = document.querySelector(".p2");
p2.onclick = changeColorP2;

// addEventListener() (newer method)
// addEventListener("event", function(){})
const p5 = document.querySelector(".p5");
p5.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul.list1");
  // create new element or node
  const newListElement = document.createElement("li");
  const newTextListElement = document.createTextNode("new item");
  newListElement.appendChild(newTextListElement);
  ul.appendChild(newListElement);
  alert("new item added!");
});

// Perbedaan?
// Event Handler: Perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya
// addEventListsener : Menambah perubahan
// Examples:
// Event Handler
const p1 = document.querySelector(".p1");
p1.onclick = function () {
  p1.style.backgroundColor = "lightgreen";
};
p1.onclick = function () {
  p1.style.color = "coral";
};
// addEventListener
const p4 = document.querySelector(".p4");
p4.addEventListener("click", function () {
  p4.style.backgroundColor = "lightgreen";
});
p4.addEventListener("click", function () {
  p4.style.color = "salmon";
});

const sectionA = document.getElementById("a");
const link = sectionA.getElementsByTagName("a")[0];
link.addEventListener("mouseenter", function () {
  link.style.backgroundColor = "lightgreen";
  link.style.color = "lightblue";
  link.style.textDecoration = "none";
});
link.addEventListener("mouseleave", function () {
  link.style.backgroundColor = "coral";
  link.style.color = "lightgreen";
  link.style.textDecoration = "none";
});
