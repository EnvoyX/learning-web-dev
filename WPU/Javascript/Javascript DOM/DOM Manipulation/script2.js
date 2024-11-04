// DOM Manipulation
// Manipulation node

// Study case: add one element tag <p></p> with text inside "Paragraph 1"
// document.createElement();
// document.createTextNode();
// node.appendChild();
// node.insertBefore();

// node.appendChild(newNodeOrElement) --> puts node or element at the end or last order of parent element;
// create new element
const newParagraphElement = document.createElement("p");
const newTextParagraphElement = document.createTextNode(
  "paragraph 5 (added from javascript)"
);

// put the text inside the paragraph element
newParagraphElement.appendChild(newTextParagraphElement);

// put the new created element node at the end of section A
const sectionA = document.getElementById("a");
sectionA.appendChild(newParagraphElement);

// Another example:
// node.insertBefore(newNode or Element, targeted Node or Element);

const newListElement = document.createElement("li");
const newTextListElement = document.createTextNode("new list item");
newListElement.appendChild(newTextListElement);

const ul = document.querySelector("section#b ul.list1");
// side nots: nthchild is first counted in 1 not zero
const li2 = ul.querySelector("li:nth-child(2)");
//
ul.insertBefore(newListElement, li2);

// parentNode.removeChild();
// parentNode.replaceChild();

// parentNode.replaceChild(childName);
const link = document.querySelector("section#a a");
sectionA.removeChild(link);

// parentNode.replaceChild(newChild, oldChild);
// get elementes from document
const sectionB = document.getElementById("b");
const paragraph4 = document.querySelector("section#b p.paragraph4");

// create new element
const newTitle = document.createElement("h1");
const newTitleText = document.createTextNode("Valisthea");
newTitle.appendChild(newTitleText);

sectionB.replaceChild(newTitle, paragraph4);

newParagraphElement.style.backgroundColor = "lightgreen";
newListElement.style.backgroundColor = "lightgreen";
newTitle.style.backgroundColor = "lightgreen";
