// 2.1 Execution Context, Hoisting & Scope

// Creation Phase pada Global Context
// var variableName = undefinied
// var nameFunction = fn()
// Hoisting

// Hoisting Variable

console.log(name);
var name = 'John';

// Hoisting Function

// console.log(sayHello());
// var nama = 'Andi Jafar';
// var age = 24;

// function sayHello() {
//   console.log(`Hello my name is ${nama}, and i am ${age} years old`);
// }

// window = global object
// this = window

// exection phase

let nama = 'Andi Jafar';
let age = 24;
console.log(sayHello());

function sayHello() {
  return `Hello my name is ${nama}, and i am ${age} years old`;
}

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase local
// window
// arguments
// hoisting

// Case Studies

var name = 'Hanif Hafizhan';
var username = '@nfzhn';

function createURL(username) {
  var instagramURL = 'http://instagram.com/';
  return instagramURL + username;
}

console.log(createURL(username));
