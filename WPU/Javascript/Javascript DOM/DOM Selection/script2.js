//DOM Selection
// document.getElementById() --> Element (mengembalikan Element)
// document.getElementsByTagName() --> HTMLCollections (berbentuk array)
// document.getElementsByClassName() --> HTMLCollection

// document.querySelector() --> Element (mengembalikan elemen)
const paragraph4 = document.querySelector('#b p');
paragraph4.style.color = 'green';
paragraph4.style.fontWeight = 'bold';
paragraph4.style.fontSize = '25px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

const paragraph1 = document.querySelector('.p1');
paragraph1.innerHTML = 'This is changed by Javascript';

// document.querySelectorAll() --> HTMLCollections
const allParagraph = document.querySelectorAll('p');
for (let i = 0; i < allParagraph.length; i++) {
  allParagraph[i].style.backgroundColor = 'lightblue';
}
