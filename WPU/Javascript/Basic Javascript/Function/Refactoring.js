// Tujuan Refactoring adalah untuk mengubah kode agar lebih mudah dibaca, lebih simpel, dan penulisan yang lebih singkat
// tanpa mengubah fungsi original nya.
function calculateTwoVolumeOfCube(a, b) {
  return a * a * a + b * b * b;
}

console.log(calculateTwoVolumeOfCube(2, 3));

var a = 7;
var b = 6;
console.log(calculateTwoVolumeOfCube(a, b));
