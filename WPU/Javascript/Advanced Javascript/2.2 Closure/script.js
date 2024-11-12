// Closures
// Parent Function
function init() {
  let nama = `Hanif Hafizhan`;
  let age = 20;
  function showData() {
    // Inner Function
    // Disebut Closure karena inner function membutuhkan data dari parent function
    console.log(nama);
    console.log(age);
  }
  showData();
  console.dir(showData);
}

init();

// Recall that:
// if a function is assigned to variable
// we called it Function Expression

// Closure can be utilized to create:

// Function Factory

function initial() {
  // function tampilData(nama, age) {
  //   console.log(nama);
  //   console.log(`Age: ${age}`);
  // }
  // return tampilData;
  // Alternative as an Anonymous Function
  return function (name, age) {
    console.log(name);
    console.log(`Age: ${age}`);
  };
}

panggilData = initial();
panggilData(`Andi Jafar`, 20);
panggilData(`Soni`, 25);

// Other Examples:
function greetingsAhoy(time) {
  return function (name) {
    console.log(`Greetings ${name}!, and Happy ${time}`);
  };
}

let greetMorning = greetingsAhoy(`Morning`);
let greetAfternoon = greetingsAhoy(`Afternoon`);
let greetEvening = greetingsAhoy(`Evening`);

greetMorning("Jafar");
greetAfternoon("Soni");
greetEvening("Aldo");

// Private Method

// Note that we want the counter variable unchanged by external assignment
// Only function does the change
// let counter = 0;
// let add = function () {
//   return ++counter;
// };

// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// We solved the unchange part, but the variable always set to zero
// let add = function () {
//   let counter = 0;
//   return ++counter;
// };

// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// Solved the remaing problem as Function Factory

// By doing this, if we call the add(); function, we already run the function half a way
// only the parent function runs, but the inner function hasn't
// This method is called Closure
// when inner function needs a data from parent function

let add = function () {
  let counter = 0; // as if this counter variable is a private variable
  return function () {
    return ++counter;
  };
};

// To make the inner function work,  we assigned add(); function to new variable
// add(); runs the whole function but not the inner
// addNumbers(); enable us to run the inner function
addNumbers = add();

counter = 100;

console.log(addNumbers());
console.log(addNumbers());
console.log(addNumbers());
console.log(addNumbers());
console.log(addNumbers());

// We can run this Closure without the need to assign the function to new variable
// by treat the function as Immideately Invoked Function Expression (IIFE)

// insert the whole function to new () parenthesis
// and run it immideately by adding another () parenthesis to end of the expression

// From this

// let tambah = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// To

let tambah = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(tambah());
console.log(tambah());
console.log(tambah());
console.log(tambah());
console.log(tambah());
