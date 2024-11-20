// Spread Operator
// memecah iterables menjadi single element

const students = [`Rivaldo Santosa`, `John Wick`, `Eren Yeager`];
console.log(students);

// Destructuring
const [student1, student2, student3] = students;
console.log(student1);
console.log(student2);
console.log(student3);

// Spread Operator
console.log(...students);
// Mecah huruf dari suatu element string
console.log(...students[0]);
console.log(...students[1]);
console.log(...students[2]);

// Practical Use of Spread Operator or when to use?

// Combining two arrays
const lecturers = [`Heimerdinger`, `Jayce Talis`, `Viktor`];

// Using Spread Operator is more flexible
console.log(...students, ...lecturers);
console.log(...students, `Singed`, ...lecturers);

// We combine it to new variable and new array
const people = [...students, `John`, ...lecturers];
console.log(people);

//or

// .concat() method
const orang = students.concat(lecturers);
console.log(orang);

// Copy an Array
const mhs = [`Andi`, `Soni`, `Aldo`];

// const mhs1 = mhs;

const mhs1 = [...mhs];
mhs1[0] = `Andi Jafar`;

console.log(mhs);
console.log(mhs1);

// Another Examples

// Display each textContent`s elements

const liMhs = document.querySelectorAll(`li`);

// liMhs
console.log(liMhs);
console.log(liMhs[0].textContent);

// Spread Operation liMhs
console.log(...liMhs);

// For loop
for (let i = 0; i < liMhs.length; i++) {
  console.log(liMhs[i].textContent);
}

// Spread Operator

// We can't do line below because liMhs is NodeList
// const listedMhs = liMhs.map(element => (element.textContent))
const listedMhs = [...liMhs].map((element) => element.textContent);
console.log(listedMhs);

// Another Examples

// Hover each character in string

const studentName = document.querySelector(`h1.name`);

console.log(studentName);
console.log(studentName.textContent);
console.log(...studentName.textContent);

// let characters = [...studentName.textContent];
// console.log(characters);

// Wihtout Curled Brackets (implicit return)

let characters = [...studentName.textContent]
  .map((char) => `<span>${char}</span>`)
  .join(``);

// With Curled Brackets

// let characters = [...studentName.textContent]
//   .map((char) => {
//     return `<span>${char}</span>`;
//   })
//   .join(``);

console.log(characters);

studentName.innerHTML = characters;
