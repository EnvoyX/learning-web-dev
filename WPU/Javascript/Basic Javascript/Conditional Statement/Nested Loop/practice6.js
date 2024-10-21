// Papan Catur
let n = 5;

let string = "";

// create ROW
for (let i = 1; i <= 10; i++) {
  // printing STAR
  for (let j = 1; j <= n; j++) {
    //kita cek setiap barisnya, setiap variable i bilangan ganjil spasi di kanan, dan setiap variable i bilangan genap spasi di kiri.
    if (i % 2 == 1) {
      string += "# ";
    } else {
      string += " #";
    }
  }
  string += "\n";
}

console.log(string);
