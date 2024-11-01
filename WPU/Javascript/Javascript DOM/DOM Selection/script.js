//DOM Selection
// document.getElementById() --> Element (mengembalikan Element)

const title = document.getElementById('judul');
title.style.color = 'lightcoral';
title.style.backgroundColor = 'lightblue';
title.innerHTML = "Assalammu'alaikum";

// document.getElementsByTagName() --> HTMLCollections (berbentuk array)

const paragraph = document.getElementsByTagName('p');
// paragraph[0].style.backgroundColor = 'crimson';
// paragraph[1].style.backgroundColor = 'orange';
// paragraph[2].style.backgroundColor = 'yellow';
// paragraph[3].style.backgroundColor = 'coral';

// Loop
for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.backgroundColor = 'coral';
}

// If there is only one element
const h1 = document.getElementsByTagName('h1')[0]; // takes only at index 0
h1.style.fontWeight = 'normal';
h1.style.fontSize = '50px';

// document.getElementsByClassName() --> HTMLCollection

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'This paragraph was changed by Javascript';
