// Function Declaration
function hello() {
  console.log(this);
  console.log("Hello");
}
hello();

// this dapat mengembalikan object Global

// 2. Object Literal
var obj = { Id: 223, nama: "Valaz", species: "Human" };
obj.holla = function () {
  console.log(this);
  console.log("Holla");
};

obj.holla();
// this mengembalikan object yang bersangkutan

// 3. Constructor

// this
// Sebuah keyword special yang secara otomatis didefinisikan di setiap function
// Constructor Declaration
function Halo() {
  console.log(this);
  console.log("Halo");
}

// Call the constructor
new Halo();
object1 = new Halo();
object2 = new Halo();
// this akan mengembalikan object yang baru dibuat

// Dalam konteks "this" scope global maka akan merujuk pada window
// karena windows adalah scope global atau objek global
var a = 10;
console.log(this.a);
