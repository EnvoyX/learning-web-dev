// Recursive adalah ketika function memanggil dirinya sendiri didalam function nya, sehingga menghasilkan loop
function factorial(n) {
  //Base Case
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Menggunakan For Loop
function faktorial(n) {
  var hasil = 1;
  for (var i = n; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
}

console.log(faktorial(5));
