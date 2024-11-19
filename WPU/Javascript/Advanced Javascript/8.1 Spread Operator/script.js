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

// We combine it to new variable
const people = [...students, `John`, ...lecturers];
console.log(people);

// .concat() method
const orang = students.concat(lecturers);
console.log(orang);

// Copy an Array
