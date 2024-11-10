// How to create Object in JavaScript
// 1. Object Literal

let student = {
  name: "Hanif Hafizhan",
  nrp: "13523069",
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
  name: "Nadi Jafar",
  nrp: "13523029",
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

// Blueprint
// function Mahasiswa(name, energy, health) {
//   let mahasiswa = {};
//   mahasiswa.name = name;
//   mahasiswa.energy = energy;
//   mahasiswa.health = health;

//   mahasiswa.move = function (move, exhaust) {
//     this.energy -= exhaust;
//     console.log(
//       `${this.name} is moving towards ${move} with exhausted ${exhaust} energy with ${this.energy} left`
//     );
//   };

//   mahasiswa.rest = function (replenished) {
//     this.energy += replenished;
//     console.log(
//       `${this.name} has rest , replenished ${replenished} energy, current energy ${this.energy}`
//     );
//   };
//   return mahasiswa;
// }

// let newStudent = Mahasiswa("Andi", 100, 10);

// 3. Constructor Function

function Mahasiswa(name, energy, health) {
  this.name = name;
  this.energy = energy;
  this.health = health;

  this.move = function (move, exhaust) {
    this.energy -= exhaust;
    console.log(
      `${this.name} is moving towards ${move} with exhausted ${exhaust} energy with ${this.energy} left`
    );
  };

  this.rest = function (replenished) {
    this.energy += replenished;
    console.log(
      `${this.name} has rest , replenished ${replenished} energy, current energy ${this.energy}`
    );
  };
}

let andi = new Mahasiswa("Andi", 100, 10);

// 4. Object.create
