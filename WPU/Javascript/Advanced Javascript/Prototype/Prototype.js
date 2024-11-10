// How to create Object in JavaScript
// 1. Object Literal
// Problem : Not effective if there's alot object to create
let student = {
  name: 'Hanif Hafizhan',
  nrp: '13523069',
  energy: 100,
  health: 10,
  level: 1,
  move: function (move, exhaust) {
    this.energy -= exhaust;
    console.log(
      `${this.name} is moving towards ${move} with energy reduced by ${exhaust} with energy left: ${this.energy}`
    );
  },
};

let student1 = {
  name: 'Nadi Jafar',
  nrp: '13523029',
  energy: 125,
  health: 15,
  level: 3,
  move: function (move, exhaust) {
    this.energy -= exhaust;
    console.log(
      `${this.name} is moving towards ${move} with energy reduced by ${exhaust} with energy left: ${this.energy}`
    );
  },
};

// 2. Function Declaration
// Problem : methods are created anew and placed in memory from the very same functions when instatiated new objects and thus not optimal.
// Solution: put the methods in different object, so the method still refers to the same object, not create new one again.
// so the methods are placed in memory one-time only
// Blueprint

// const methodHuman = {
//   move: function (move, exhaust) {
//     this.energy -= exhaust;
//     console.log(
//       `${this.name} is moving towards ${move} with exhausted ${exhaust} energy with ${this.energy} left`
//     );
//   },

//   rest: function (replenished) {
//     this.energy += replenished;
//     console.log(
//       `${this.name} has rest , replenished ${replenished} energy, current energy ${this.energy}`
//     );
//   },

//   sleep: function (replenished) {
//     this.energy += replenished * 2;
//     console.log(
//       `${this.name} has sleep, gained ${replenished} energy with total ${this.energy} energy`
//     );
//   },
// };
// function Mahasiswa(name, energy, health) {
//   let mahasiswa = Object.create(methodHuman);
//   mahasiswa.name = name;
//   mahasiswa.energy = energy;
//   mahasiswa.health = health;
//   // manually add methods from different objects
//   // mahasiswa.rest = methodMahasiswa.rest;
//   // mahasiswa.move = methodMahasiswa.move;
//   // mahasiswa.sleep = methodMahasiswa.sleep;

//   //to add automatically used Object.create(); instead

//   return mahasiswa;
// }

// let newStudent = Mahasiswa('Andi', 100, 10);

// 3. Constructor Function

function Student(name, energy, health) {
  // for sign what happpen under the hood
  // this = Object.create(Student.prototype)
  this.name = name;
  this.energy = energy;
  this.health = health;

  this.move = function (move, exhaust) {
    this.energy -= exhaust;
    console.log(
      `${this.name} is moving towards ${move} with ${exhaust} exhausted energy with ${this.energy} energy left`
    );
  };

  this.rest = function (replenished) {
    this.energy += replenished;
    console.log(
      `${this.name} has rest , replenished ${
        replenished * 2
      } energy, current energy ${this.energy}`
    );
  };

  // return this;
}

let soni = new Student('Soni', 100, 10);

// 4. Object.create();
// Object.create(); ==>  membuat objek baru pada sekaligus mewarisi property dari objek lain yang telah didefinisikan

// function Human(name, age, energy, health) {
//   human = Object.create(methodHuman);
//   human.name = name;
//   human.age = age;
//   human.energy = energy;
//   human.health = health;

//   return human;
// }

// Leon = Human('Leon Kennedy', 30, 100, 100);

// 5. Prototype

function Human(name, age, energy, health) {
  this.name = name;
  this.age = age;
  this.energy = energy;
  this.health = health;
}
// add methods to Human object with .prototype

Human.prototype.move = function (move, exhaust) {
  this.energy -= exhaust;
  console.log(
    `${this.name} is moving towards ${move} with exhausted ${exhaust} energy, with ${this.energy} energy left`
  );
};
Human.prototype.rest = function (replenished) {
  this.energy += replenished;
  console.log(
    `${this.name} has rest , replenished ${replenished} energy, current energy ${this.energy}`
  );
};
Human.prototype.sleep = function (replenished) {
  this.energy += replenished * 2;
  console.log(
    `${this.name} has sleep, gained ${replenished} energy with total ${this.energy} energy`
  );
};
Human.prototype.consume = function (consumable, replenished) {
  this.energy += replenished * 1.5;
  console.log(
    `${this.name} has consume ${consumable}, gained ${
      replenished * 1.5
    } energy, total energy: ${this.energy}`
  );
};

Leon = new Human('Leon Kennedy', 30, 100, 100);

// versi Class
class Manusia {
  constructor(name, energy, health) {
    this.name = name;
    this.energy = energy;
    this.health = health;
  }
  move(move, exhaust) {
    this.energy -= exhaust;
    console.log(
      `${this.name} is moving towards ${move} with exhausted ${exhaust} energy, with ${this.energy} energy left`
    );
  }
  rest(replenished) {
    this.energy += replenished;
    console.log(
      `${this.name} has rest , replenished ${replenished} energy, current energy ${this.energy}`
    );
  }
  sleep(replenished) {
    this.energy += replenished * 2;
    console.log(
      `${this.name} has sleep, gained ${replenished} energy with total ${this.energy} energy`
    );
  }
  consume(consumable, replenished) {
    this.energy += replenished * 1.5;
    console.log(
      `${this.name} has consume ${consumable}, gained ${
        replenished * 1.5
      } energy, total energy: ${this.energy}`
    );
  }
}

// calls the class same as call constructor in javascript

let Hanif = new Human('Hanif Hafizhan', 100, 100);
let Rukia = new Human('Rukia Kuchiki', 100, 100);

// Array -> an object that has included prototype methods and properties
// any variable assigned as an array type has automatically inherits all methods from object Array
let numbers = [3, 1, 2, 5, 4];
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers.sort());

// sort, reverse, and any other prototype methods of Array are
// automaticly included in object Array

// Under the hood
// function Array() {
//   let this = Object.create(Array.prototype);
// }

// Array.prototype.reverse = function(){
// }
// Array.prototype.sort = function(){
// }
// etc.

// let numbers = new Array();
