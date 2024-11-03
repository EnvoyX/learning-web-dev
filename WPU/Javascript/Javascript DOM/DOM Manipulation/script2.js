//DOM Manipulation

// innerHTML & style Manipulation

// changes inner content of element HTML & changes elememt's properties
// element.innerHTML & element.style.{propertiesCSS}
const h1 = document.getElementById('judul');
h1.innerHTML = 'Hanif Hafizhan';
h1.style.backgroundColor = 'lightblue';
h1.style.color = 'coral';

const sectionD = document.getElementById('d');
sectionD.innerHTML =
  '<div><h1>Westeros</h1><p>this paragraph was changed in JavaScript</p></div>';
sectionD.style.backgroundColor = 'salmon';
sectionD.style.color = 'aqua';

const title2 = document.getElementsByTagName('h1')[1];
title2.style.backgroundColor = 'black';
title2.style.color = 'white';

// Attribute Manipulation

// changes attributes in element html
// element.getAttribute()
// element.setAttribute()
// element.removeAttribute()
const anchorA = document.getElementsByTagName('a')[0];
anchorA.innerHTML = 'Instagram Envoy';
const anchorSandhika = document.getElementsByTagName('a')[1];
// Examples:
const p1 = document.querySelector('.p1');
// .getAttribute("nama attribute")
// Mendapatkan value dari nama atttribute yang dimasukan sebagai attribute
p1.getAttribute('class');
anchorA.getAttribute('href');

//.setAttribute();
// .setAttribute("nama attribute", "value attribute");
p1.setAttribute('id', 'paragraph1');
anchorA.setAttribute('href', 'https://www.instagram.com/nfzhn/');
anchorA.setAttribute('id', 'link');

// this method replaces or overwrite the given value in attributes
// rather add a new one
const p3 = document.querySelector('.p3');
p3.setAttribute('class', 'paragrpah3');
// .removeAttribute("nama attribute")
anchorSandhika.removeAttribute('href');

// Class Manipulation

const sectionA = document.getElementById('a');
const sectionB = document.getElementById('b');
const sectionC = document.getElementById('c');

// changes class in element html
// element.classList
const p2 = document.querySelector('.p2');
p2.classList;

// element.classList.add("className")
// add more class within defined class or a whole new class
p2.classList.add('paragraph');
p2.classList.add('label');

// element.classList.remove("className")
// remove class
p2.classList.remove('paragraph');

// element.classList.toggle("className")
// toggles by giving value true and false that either remove or add the class
// try toggle it at console
// returns value of true or false
sectionA.classList.toggle('light-coral');
sectionB.classList.toggle('light-salmon');
sectionC.classList.toggle('light-blue');

// element.classList.item(anyNumber starting from zero)
// determine nth class in elements
const p4 = document.querySelector('.p4');
p4.classList.add('paragraph');
p4.classList.add('paragraph4');
p4.classList.add('temporaryClassName');
p4.classList.item(1);
p4.classList.item(2);

// element.classList.contains("nameClass")
// checks whether the elements has the mentioned class from the given argumnents
// returns value of true or false
p4.classList.contains('paragraph');
p4.classList.contains('paragraph5');

// element.classList.replace()
// element.classList.replace('oldClassName', 'newClassName');
// overwrite the old class with new class
p4.classList.replace('temporaryClassName', 'changedWithJavascript');
