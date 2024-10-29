var passengers = [];
function newPassengers(passengerName, passengers) {
  //Jika awal mula ankgot kosong
  if (passengers.length === 0) {
    //tambah penumpang di awal array
    passengers.unshift(passengerName);
    //keluar dari function
    return passengers;
  }
  //Jika angkot ada penumpang
  else {
    //Loop untuk mengecek seluruh kursi pada angkot
    for (var i = 0; i < passengers.length; i++) {
      //Jika ada kursi kosong
      if (passengers[i] == undefined) {
        for (var j = 0; j < passengers.length; j++) {
          if (passengers[j] == passengerName && passengers[j] != undefined) {
            passengers[i] = undefined;
            console.log('Penumpang ' + passengerName + ' sudah ada diangkot');
            return passengers;
          } else if (j == passengers.length - 1) {
            passengers[i] = passengerName;
            return passengers;
          }
        }
      }
      //Jika sudah ada nama
      else if (passengers[i] == passengerName) {
        console.log('Penumpang ' + passengerName + ' sudah ada diangkot');
        //keluar dari function
        return passengers;
      }
      //Jika semua kursi sudah penuh
      else if (i == passengers.length - 1) {
        //tambah penumpang di akhir array
        passengers.push(passengerName);
        //keluar dari function
        return passengers;
      }
    }
  }
}

function removedPassengers(passengerName, passengers) {
  if (passengers.length == 0) {
    console.log('No Passengers at the moment');
    return passengers;
  } else {
    for (var i = 0; i < passengers.length; i++) {
      if (passengers[i] == passengerName) {
        passengers[i] = undefined;
        return passengers;
      } else if (i == passengers.length - 1) {
        console.log('Nama penumpang ' + passengerName + ' tidak ada di angkot');
        return passengers;
      }
    }
  }
}

newPassengers('Andi', passengers);
newPassengers('Joni', passengers);
newPassengers('Soni', passengers);
newPassengers('Aldo', passengers);

removedPassengers('Joni', passengers);

console.log(passengers.join(', '));

newPassengers('Hala', passengers);
console.log(passengers.join(', '));
