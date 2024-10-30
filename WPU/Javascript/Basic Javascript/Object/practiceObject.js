// Create Object Angkot

function Angkot(driver, trayek, passengers, cash) {
  this.driver = driver;
  this.trayek = trayek;
  this.passengers = passengers;
  this.cash = cash;

  this.passengersIn = function (name) {
    // Jika Angkot Kosong
    if (this.passengers.length == 0) {
      this.passengers.push(name);
      return this.passengers;
    }
    // Jika tidak kosong
    else {
      for (var i = 0; i < this.passengers.length; i++) {
        //   Jika angkot terdapat nilai undefined ato kursi kosong
        // maka penumpang akan menduduki kursi yang bernilai undefined
        if (this.passengers[i] == undefined) {
          for (var j = 0; j < this.passengers.length; j++) {
            // cek jika ada orang yang bernama sama
            if (this.passengers[j] == name && this.passengers[j] != undefined) {
              this.passengers[i] = undefined;
              console.log("There's already passengers with name: " + name);
              return this.passengers;
            }
            // jika sudah cek seluruh kursi dan tidak ada yang bernama sama
            else if (j == this.passengers.length - 1) {
              this.passengers[i] = name;
              return this.passengers;
            }
          }
        }
        // Jika angkot sudah mengecek seluruh kursi yang penuh
        // maka penumpang akan mengisi yang kursi terakhir
        else if (i == this.passengers.length - 1) {
          this.passengers.push(name);
          return this.passengers;
        }
      }
    }
  };

  this.passengersOut = function (name, cash) {
    if (this.passengers.length === 0) {
      console.log("There's no passengers yet!");
      return this.passengers;
    }
    for (var i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i] == name) {
        this.passengers[i] = undefined;
        this.cash += cash;
        return this.passengers;
      } else if (i == this.passengers.length - 1) {
        console.log("There's no passengers with name: " + name + '!');
        return this.passengers;
      }
    }
  };
}

var angkot1 = new Angkot('Soni', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Aldo', ['Antapani', 'Ciroyom'], [], 0);

angkot1.passengersIn('Andi');
angkot1.passengersIn('Sinif');
angkot1.passengersIn('Dalang');
angkot1.passengersIn('David');

angkot1.passengersOut('Dalang', 5000);

angkot1.passengersIn('Andi');
angkot1.passengersOut('Andi', 5000);

angkot1.passengersIn('Jafar');
angkot1.passengersIn('Dicky');

angkot1.passengersOut('Danish');

console.log(angkot1);
console.log(angkot2);
