var string = "";

// Loop Biasa
// for (var i = 0; i < 5; i++) {
//   string += "*";
// }

// Setiap loop membuat barisan baru
// for (var i = 0; i < 5; i++) {
//   string += "*";
//   string += "\n";
// }

// Setiap baris ada 5 bintang
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

// Tiap baris bertambah satu bintang
// for (var i = 0; i < 5; i++) {
//   console.log("LOOP:" + " " + i);

//   for (var j = 0; j <= i; j++) {
//     string += "*";
//     console.log("j SEKARANG:" + " " + j);
//   }
//   string += "\n";
//   console.log("i SEKARANG:" + " " + i);
// }
// Tiap baris berkurang satu bintang
// for (var i = 0; i < 5; i++) {
//   for (var j = 5; j > i; j--) {
//     string += "*";
//   }
//   string += "\n";
// }
//         OR
var loop = 0;
// for (var i = 5; i > 0; i--) {
//   loop += 1;
//   console.log("LOOP:" + " " + (loop - 1));
//   for (var j = 0; j < i; j++) {
//     string += "*";
//     console.log("j SEKARANG:" + " " + j);
//   }
//   string += "\n";
//   console.log("i SEKARANG:" + " " + i);
// }

// Combination
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

// for (var i = 4; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

// Combination 2
// Row Genap
// totalRow = 10;
// for (var i = 0; i < totalRow; i++) {
//   if (i < totalRow / 2) {
//     for (var j = 0; j <= i; j++) {
//       string += "*";
//     }
//   } else {
//     for (var j = totalRow - 1; j > i; j--) {
//       string += "*";
//     }
//   }

//   string += "\n";
// }

// Row Ganjil
var totalRow = 5;

for (var i = 0; i < totalRow; i++) {
  for (j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
for (var i = 0; i < totalRow - 1; i++) {
  for (j = totalRow - 1; j > i; j--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
