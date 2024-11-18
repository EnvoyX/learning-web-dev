function multiplyAddition(a, b) {
  return [a + b, a * b];
}

// Without Destructuring

// let addition = multiplyAddition(4, 5)[0];
// let multiply = multiplyAddition(4, 5)[1];

// console.log(addition);
// console.log(multiply);

// Destructuring

const [tambah, kali] = multiplyAddition(4, 5);
console.log(tambah);
console.log(kali);

// function calculate(a, b) {
//   return [a + b, a - b, a * b];
// }

// Note : This method requires to write the variable in order corresponding to the returned value

// Declaration

// function calculate(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// Destructuring

// const [addition, subtraction, multiply, division = `Not available`] = calculate(
//   10,
//   5
// );

// console.log(addition);
// console.log(subtraction);
// console.log(multiply);
// console.log(division);

// We can have method that doesn't to write in order, by write the function and return value as object

// Declare
function calculate(a, b) {
  return {
    addition: a + b,
    subtraction: a - b,
    multiply: a * b,
    division: a / b,
  };
}

// Destructuring
const { multiply, addition, division, subtraction } = calculate(6, 5);

console.log(multiply);
console.log(addition);
console.log(subtraction);
console.log(division);

// Destructuring function arguments

const student1 = {
  name: `Yuna Suuzuki`,
  age: 24,
  email: `13523069@mahasiswa.itb.ac.id`,
  report: {
    assignment: 65,
    middleTermExam: 70,
    finalExam: 80,
  },
};

// Default way
// Default Parameter

// function displayStudent1(name, age) {
//   return `Hello, my name is ${name} and I am ${age} years old`;
// }

// console.log(displayStudent1(student1.name, student1.age));

// Parameter as Object
// function displayStudent1(student) {
//   return `Hello, my name is ${student.name} and I am ${student.age} years old.`;
// }

// console.log(displayStudent1(student1));

// Parameter with specified property write it in {} (curled parenthesis)
// Note : property's name must be same
function displayStudent1({
  name,
  age,
  report: { assignment, middleTermExam, finalExam },
}) {
  return `Hello, my name is ${name} and I am ${age} years old. My average report is ${
    (assignment + middleTermExam + finalExam) / 3
  }`;
}

console.log(displayStudent1(student1));
