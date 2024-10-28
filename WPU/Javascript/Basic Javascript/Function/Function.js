function sumTwoVolumeofCube(a, b) {
  //Deklarasi Variabel
  var total;
  var cube1;
  var cube2;
  //Menghitung volume kubus masing2
  cube1 = a * a * a;
  cube2 = b * b * b;
  //Menjumlahkan total volume
  total = cube1 + cube2;

  return total;
}

input1 = prompt('Isi sisi kubus 1');
input2 = prompt('Isi sisi kubus 2');

console.log(sumTwoVolumeofCube(5, 9));
console.log(sumTwoVolumeofCube(3, 4));
console.log(sumTwoVolumeofCube(input1, input2));
console.log('Hasil penjumlahnya adalah: ' + sumTwoVolumeofCube(input1, input2));
alert(
  'Hasil Penjumlahan yang dikalkulasikan adalah: ' +
    sumTwoVolumeofCube(input1, input2)
);
