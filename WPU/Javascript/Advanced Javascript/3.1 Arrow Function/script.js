// Function Expression
// let tampilNama = function (name) {
//   console.log(`Hello, ${name}`);
// };

// tampilNama(`Jafar`);

// Arrow Function

// No Parameter

let greetings = () => `Hello World`;
console.log(greetings());

// One Parameter

let showName = (name) => {
  return `Hello, ${name}`;
};
console.log(showName(`Jafar`));

// Implicit Return
let tampilNama = (name) => `Hello, ${name}`;

console.log(tampilNama('Soni'));

// Two Parameters
let showData = (name, age) => {
  return `Hello, ${name} and your age is ${age} years old`;
};

console.log(showData(`Andi`, 18));

// Case Studies

let mahasiswa = [`Andi Jafar`, `Hanif Hafizhan`, `Wise`, `Belle`];

// Function Expression
// let totalCharacters = mahasiswa.map(function (elemetName) {
//   return elemetName.length;
// });

// console.log(totalCharacters);

// Arrow Function

// return as totalCharacters Array in form of Implicit Return
let totalCharacters = mahasiswa.map((elementName) => elementName.length);
console.log(totalCharacters);

// return jumlahHurufNama as Object in form of Implicit Return
let jumlahHurufNama = mahasiswa.map((elementName) => ({
  name: elementName,
  nameCharactersLength: elementName.length,
}));

console.log(jumlahHurufNama);
console.table(jumlahHurufNama);
