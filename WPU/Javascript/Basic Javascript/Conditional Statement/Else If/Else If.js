var noAngkot = 1;
var noAngkotAvailable = 6;
var totalAngkot = 10;
for (noAngkot; noAngkot <= totalAngkot; noAngkot++) {
  if (noAngkot <= noAngkotAvailable) {
    console.log(
      'Angkot No.' + ' ' + noAngkot + ' ' + ' beroperasi dengan baik.'
    );
  } else if (noAngkot === 8) {
    console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'sedang lembur.');
  } else {
    console.log(
      'Angkot No.' + ' ' + noAngkot + ' ' + ' sedang tidak beroperasi.'
    );
  }
}
