//Segitiga Pascal

var coef = 1;
var maxRows = 5;
var result = "";
// var maxRows = prompt("Enter a positive Number");

// while (maxRows <= 0) {
//   var maxRows = prompt("Please Enter a positive Number: ");
// }

//Create Triangle
// for (row = 1; row <= maxRows; row++) {
//   for (var space = 1; space <= maxRows - row; space++) {
//     result += " ";
//   }
//   for (var j = 0; j < row; j++) {
//     if (j >= 1) {
//       result += "+";
//     }
//     result += "*";
//   }
//   result += "\n";
// }

//Create Row
for (row = 0; row <= maxRows; row++) {
  console.log("Sekarang Row ke-" + row);

  for (var space = 1; space < maxRows + 2 - row; space++) {
    result += " ";
  }
  for (var col = 0; col < row + 1; col++) {
    console.log("Sekarang Col ke-" + col);

    if (row == 0 || col == 0) {
      coef = 1;
      result += coef;
    } else {
      coef = (coef * (row - col + 1)) / col;
      result += " ";
      result += coef;
    }
  }
  result += "\n";
}
console.log(result);
