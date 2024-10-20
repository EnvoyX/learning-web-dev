var noAngkot = 1;
var noAngkotAvailable = 6;
var totalAngkot = 10;

while (noAngkot <= noAngkotAvailable) {
  console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik.');
  noAngkot++;
}

for (noAngkot = noAngkotAvailable + 1; noAngkot <= totalAngkot; noAngkot++) {
  console.log(
    'Angkot No.' + ' ' + noAngkot + ' ' + ' sedang tidak beroperasi.'
  );
}
