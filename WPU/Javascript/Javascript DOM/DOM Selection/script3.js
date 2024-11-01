//DOM Selection
// document.getElementById() --> Element (mengembalikan Element)
// document.getElementsByTagName() --> HTMLCollections (berbentuk array)
// document.getElementsByClassName() --> HTMLCollection

// .querySelector
// document.querySelector() --> Element (mengembalikan elemen)
// document.querySelectorAll() --> HTMLCollections

// Contoh kasus mengubah node root
// Cara Default (kasusnya mengubah paragraf 4) dengan document sebagai node root
// sehingga diharuskan menghitung urutan kemunculan elemen secara keseluruhan
const paragraph4 = document.querySelectorAll('p');
paragraph4[3].style.backgroundColor = 'lightblue';

// Cara dengan mengubah node root
const sectionB = document.getElementById('b');
// paragraph 5 dapat diubah dari node root sectionB
const paragraph5 = sectionB.querySelectorAll('p');
paragraph5[1].style.backgroundColor = 'orange';

// change section A
const sectionA = document.querySelector('section#a');
const paragraph1 = sectionA.getElementsByClassName('p1')[0];
paragraph1.style.backgroundColor = 'lightsalmon';

// change section C
const sectionC = document.querySelector('section#c');
const paragraph6 = sectionC.getElementsByTagName('p')[0];
paragraph6.style.backgroundColor = 'salmon';
