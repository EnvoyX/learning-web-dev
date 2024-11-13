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

// Concept this in arrow function

// Constructor Function

let Mahasiswa = function () {
  this.name = 'Hanif Hafihzan';
  this.age = 33;
  // function expression memiliki konsep `this`,
  // sehingga akan mengacu pada lexical scope nya yaitu object Mahasiswa
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
};

// constrcutor function diperlukan untuk instatiate object terlebih dahulu
const hanif = new Mahasiswa();
hanif.sayHello();

// Arrow Function
// tidak semua function bisa dijadikan langsung ke arrow function, contoh nya Constructor Function
// Konsep "this" sebetulnya pada arrow function tidak ada

let Student = function () {
  this.name = 'Hanif Hafihzan';
  this.age = 33;

  // tetapi method dapat dibuat sebagai arrow function di dalam Constructor Function, karena
  // Arrow function masih bisa menemukan variable `this` didalamnya
  // contohnya `this.name` dan `this.age`, jika tidak menemukannya di lexical scope, dia akan mencari ke local parent terdekat
  this.sayHello = () => {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
};

let hanifH = new Student();

hanifH.sayHello();

// Object Literal
// Arrow Function akan berprilaku berbeda jika object nya dibuat dengan Object Literal

const StudentAlcent = {
  name: `Andi Jafar`,
  age: 24,
  sayHello: function () {
    // `this` masih berlaku dalam function declaration, maka `this` nya mengacu pada object StudentAlcent
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
  // Arrow function tidak akan bekerja jika ada di dalam function nya ada menggunakan konsep 'this'
  // apabila dibuat dengan Object Literal. `this` nya mengacu pada object global 'Window' dikarenakan,
  // arrow function tidak menemukan variable yang ada `this` nya di dalam Object Literal.
  // sehingga arrow function tidak bisa menemukan `this.name` dan `this.age` di dalam object StudentAlcent

  // sayAnjay: () => {
  //   console.log(
  //     `Hello, my name is ${this.name} and I am ${this.age} years old.`
  //   );
  // },
};

StudentAlcent.sayHello();

let Human = function () {
  this.name = 'Hanif Hafihzan';
  this.age = 33;
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };

  // Jika kita menggunakan function declaration,
  // maka fungsi tersebut akan terkena hoisting
  // sehingga this tidak akan mengacu pada lexical scope didalam object melainkan ke object Global yaitu Window
  // setInterval(function () {
  //   console.log(this.age++);
  // }, 500);

  // Solusi nya dengan menggunakan arrow function, karena arrow function tidak mengenal konsep `this`
  // sehingga akan mencari variable yang ada `this` nya, dalam kasus ini `this.age`
  // Arrow function akan mencari `this` di sekitar nya, yaitu di lexical scope nya atau local parent terdekat
  // jika tidak ada akan mencari ke global
  setInterval(() => {
    if (this.age == 50 + 1) return clearInterval();
    console.log(this.age++);
  }, 500);
};

// constrcutor function diperlukan untuk instatiate object terlebih dahulu
const aldo = new Human();
aldo.sayHello();

// intinya :
// - arrow function tidak memakai konsep this dan variable yang di telusuri akan dicari di lokal parent terdekat
// - declaration function memakai konsep this tapi, bila variable yang dicari tidak ada dalam localnya maka langsung di telesuri di window
// - expression function memakai konsep this tapi, bila variable yang dicari tidak dalam local maka, ditelusuri lgi ke lokal parent terdekat
