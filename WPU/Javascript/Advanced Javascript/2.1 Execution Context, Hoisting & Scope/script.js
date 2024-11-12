// 2.1 Execution Context, Hoisting & Scope

// Creation Phase pada Global Context
// var variableName = undefinied
// var nameFunction = fn()
// Hoisting

// Hoisting Variable

console.log(name);
var name = "John";

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

let nama = "Andi Jafar";
let age = 24;
console.log(sayHello());

function sayHello() {
  return `Hello my name is ${nama}, and i am ${age} years old`;
}

// setiap function dipanggil JavaScript akan membuat Local Execution Context
// didalam function nya atau biasa disebut Execution Stack.
// dan di dalamnya terdapat creation dan execution phase local.
// window
// arguments
// hoisting

// Case Studies

function a() {
  console.log(`This is A`);
  function b() {
    console.log(`This is B`);
    function c() {
      console.log(`This is C`);
    }
    c();
  }
  b();
}
a();

var name = "Hanif Hafizhan";
var username = "nfzhn";

// Urutan Prioritas Function
// Variable local > Arguments dalam function > Variable global

function cetakURL() {
  // jika function tidak diberikan parameter dan argument, maka function akan mencari variable di global scope
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}
function createURL(username) {
  // function akan menggunakan paramater yang telah didefinsikan terlebih dahulu dengan argument yang telah diberikan.
  // meskipun ada variable bernama sama di scope global(diluar local scope function) dan ada variable local yang bernama sama pula
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}
function nyieunURL() {
  // function juga bisa menggunakan arguments yang diberikan walaupun tidak ada parameter
  // arguments juga bisa dimasukan ke dalam variable local, sehingga bisa diproritaskan terlebih dahulu oleh function
  // arguments berupa object
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  var username = arguments[0];
  var instagramURL = "http://instagram.com/";
  // return instagramURL + arguments[0];
  return instagramURL + username;
}

function bikinURL() {
  // menggunakan variable local yang telah didefinisikan didalem terlebih dahulu jika tidak ada parameter dan arguments yang diberikan
  // meskipun ada variable bernama sama di scope global(diluar local scope function)
  var username = `andijafar`;
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL());
console.log(createURL(`envoy`));
console.log(nyieunURL(`aldogaming`, `lazymonday`));
console.log(bikinURL());
