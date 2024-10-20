var valueFood = prompt(
  'Masukan nama makanan/minuman: \n (ex. nasi, daging, susu, hamburger, dan softdrink)'
);
switch (valueFood) {
  case 'nasi':
    alert('makananan/minuman HEALTHY');
  case 'daging':
    alert('makananan/minuman HEALTHY');
    break;
  case 'susu':
    alert('makananan/minuman HEALTHY');
    break;
  case 'hamburger':
    alert('makananan/minuman UNHEALTHY');
    break;
  case 'softdrink':
    alert('makananan/minuman UNHEALTHY');
    break;
  default:
    console.log('Anda memasukan angka yang salah');

    break;
}
