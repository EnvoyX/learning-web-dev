// for..of ==> new Looping in JavaScript
// Creates a loop iterating over iteratable Objects.

// Array

const students = [`Jinx`, `Jayce`, `Viktor`, `Ekko`];

// For Loop

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// For Each

students.forEach((student) => {
  console.log(student);
});

// Second parameter of forEach method is index
students.forEach((student, i) => {
  console.log(`Student ${i + 1} is ${student}`);
});

// for..of

for (const mhs of students) {
  console.log(mhs);
}

// Solution to using for..of with iterating index
// array.entries();
// use .entries(); ==> ex. result [0, Element1]

// destruct each element of students.entries();
for (const [i, mahasiswa] of students.entries()) {
  console.log(`Student ${i + 1} is ${mahasiswa}`);
}

// String

const name = `Jayce Talis`;
for (const character of name) {
  console.log(character);
}

// Nodelist

const liName = document.querySelectorAll(`li.name`);

// forEach
// liName.forEach((element) => {
//   console.log(element.innerHTML);
// });

// for..of
for (element of liName) {
  console.log(element.innerHTML);
}

// arguments

function additionNumbers() {
  let total = 0;
  // Note: arguments is not an Array

  // return arguments.reduce(acc, (elemnt) => {
  //   acc + elemnt;
  // });
  // arguments.forEach((element) => (total += element));

  for (arg of arguments) {
    total += arg;
  }
  return total;
}

console.log(additionNumbers(5, 6, 7, 10, 9));

// for..in
// Creates a loop only iterating over enumerable
// enumerable ==> property in Object.

const charKazuha = {
  name: `Kazuha Kaedahara`,
  vision: `Anemo`,
  origin: `Inazuma`,
  gender: `Male`,
};

for (data in charKazuha) {
  console.log(data); // Display properties
  console.log(charKazuha[data]); // Display properties values
  console.log(`------------`);
}
