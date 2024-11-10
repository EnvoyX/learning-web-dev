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

const methodHuman = {
  move: function (move, exhaust) {
    this.energy -= exhaust;
    console.log(
      `${this.name} is moving towards ${move} with exhausted ${exhaust} energy with ${this.energy} left`
    );
  },

  rest: function (replenished) {
    this.energy += replenished;
    console.log(
      `${this.name} has rest , replenished ${replenished} energy, current energy ${this.energy}`
    );
  },

  sleep: function (replenished) {
    this.energy += replenished * 2;
    console.log(
      `${this.name} has sleep, gained ${replenished} energy with total ${this.energy} energy`
    );
  },
};
function Mahasiswa(name, energy, health) {
  let mahasiswa = Object.create(methodHuman);
  mahasiswa.name = name;
  mahasiswa.energy = energy;
  mahasiswa.health = health;
  // manually add methods from different objects
  // mahasiswa.rest = methodMahasiswa.rest;
  // mahasiswa.move = methodMahasiswa.move;
  // mahasiswa.sleep = methodMahasiswa.sleep;

  //to add automatically used Object.create(); instead

  return mahasiswa;
}

let newStudent = Mahasiswa('Andi', 100, 10);

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

function Human(name, age, energy, health) {
  human = Object.create(methodHuman);
  human.name = name;
  human.age = age;
  human.energy = energy;
  human.health = health;

  return human;
}

Leon = Human('Leon Kennedy', 30, 100, 100);
