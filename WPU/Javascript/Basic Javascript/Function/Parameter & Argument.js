function addNumbers(a, b) {
  return a + b;
}

function addFourNumbers(a, b, c, d) {
  return a + b + c + d;
}

function tambah() {
  var hasilHitung = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasilHitung += arguments[i];
  }
  return hasilHitung;
}

var hasil = addNumbers(2, 3);
console.log(hasil);

var a = 20;
var b = 40;

var result = addNumbers(a, b);
console.log(result);

var result = addFourNumbers(3, 6, 7, 4);
console.log(result);

var a = 10;
var b = 20;
var c = 30;
var d = 40;

var result = addFourNumbers(a, b, c, d);
console.log(result);

// Lebih flexible jika menggunakan arguments (arry)
var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);

//Prompt User

// var a = parseInt(prompt('Please Input Number 1'));
// var b = parseInt(prompt('Please Input Number 2'));

// var hasil = addNumbers(a, b);
// console.log(hasil);
