// POLA SEGITIGA

var n = 5; // jumlah baris
var result = "";

// buat baris
for (var row = 1; row <= n; row++) {
  // cetak spasi
  for (var space = 0; space < n - row; space++) {
    result += " ";
  }
  // buat pola
  for (var star = 0; star < row; star++) {
    // jika nilai var star lebih dari atau sama dengan 1 tambahkan simbol star (+) setelahnya
    if (star >= 1) {
      result += "+";
    }
    // selain dari itu langsung cetak *
    result += "*";
  }
  // print row
  result += "\n";
}

console.log(result);
