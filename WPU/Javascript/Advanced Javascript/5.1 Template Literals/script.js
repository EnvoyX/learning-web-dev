// Template Literal / Template String
const name = `Hanif Hafizhan`;
const age = 18;
console.log(`Hello, my name is ${name}, and I am ${age} years old`);

// Embedded Expression
console.log(`${1 + 1}`);
// console.log(alert(`halo!`));

const x = 13;
console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mahasiswa = {
  name: 'Hanif Hafizhan',
  age: 19,
  studentID: `13523069`,
  email: `13523069@mahasiswa.itb.ac.id`,
};

const el = `<div class="mhs">
<h2>${mahasiswa.name}</h2>
<span class="nrp">${mahasiswa.nrp}</span>
</div>`;

console.log(el);
