// Destructuring Variable / Assignment

// Destructuring Array

const myName = [`Hello`, `my`, `name`, `Hanif Hafizhan`];

const [Greet, one, two, Name] = myName;

// Skipping items
// const [Greet, , , Name] = myName;

console.log(Greet);
console.log(Name);

// Swap Items
let a = 10;
let b = 20;

// Before swap
console.log(a);
console.log(b);

[a, b] = [b, a];

// After swap
console.log(a);
console.log(b);

// Return value on function

function callArray() {
  return [`Jinx`, `Violet`, `Caitlyn`];
}

const arcaneCharacters = callArray();

// Map each element to new variables (Destructuring)
const [Jinx, Vi, Caitlyn] = callArray();

console.log(Jinx);
console.log(Vi);
console.log(arcaneCharacters);
console.log(arcaneCharacters[2]);

// Rest Parameters

// const [c, d, e] = [1, 2, 3, 4, 5];

const [firstValue, ...values] = [1, 2, 3, 4, 5];
console.log(firstValue);
console.log(values);
console.log(values[2]);

// Destructuring Object

const mhs = {
  name: `Andi Jafar`,
  age: 20,
  university: `Unikom`,
};

const { name, age, university } = mhs;
console.log(name);
console.log(university);

// Assigment without Declaration
({ major, studentID } = { major: `Computer Science`, studentID: `13523069` });
console.log(major);
console.log(studentID);

// Assign to new Variable

const mahasiswa = {
  name: `Hanif Hafizhan`,
  age: 20,
  university: `Institut Teknologi Bandung`,
};

console.log(mahasiswa.name);
console.log(mahasiswa.university);

const { name: newName, age: newAge, university: newUniversity } = mahasiswa;

console.log(newName);
console.log(newUniversity);

// Give a default value

// const mahasiswa1 = {
//   name: `Jayce Talis`,
//   age: 33,
//   university: `Institut Teknologi Bandung`,
// };

// const {
//   name =`Lorem Ipsum`,
//   age = `x`,
//   university = `University/College in Indonesia`,
//   email = `email@default.com`
// } = mahasiswa1;

// console.log(email);

// Give a default value + assignment to new variable

// case given default value
const student = {
  name: `Jayce Talis`,
  age: 33,
  university: `Institut Teknologi Bandung`,
};

const {
  name: studentName = `Lorem Ipsum`,
  age: studentAge = `x`,
  university: studentUniversity = `University/College in Indonesia`,
  email: studentEmail = `email@default.com`,
} = student;

console.log(studentEmail);

// case value of property are given

const student1 = {
  name: `John Wick`,
  age: 25,
  university: `Institut Teknologi Bandung`,
  email: `13523060@mahasiswa.itb.ac.id`,
};

const {
  name: student1Name = `Lorem Ipsum`,
  age: student1Age = `x`,
  university: student1University = `University/College in Indonesia`,
  email: student1Email = `email@default.com`,
} = student1;

console.log(student1Email);

// Rest Parameter Objects
const jinxArcane = {
  name: `Jinx`,
  age: 20,
  faction: `Zaun`,
  sibling: `Violet`,
  signatureWeapon: `Arsenal of Ranged Weapon and Ordances`,
  id: 12345,
};

const { nama, ...property } = jinxArcane;
console.log(nama);
console.log(property);
console.log(property.sibling);
console.log(property.faction);

// Mengambil field pada object, setelah dikirim sebagai Parameter untuk function

function getZaunCitizenId(jinxArcane) {
  return jinxArcane.id;
}

function getZaunCitizenName(jinxArcane) {
  return jinxArcane.name;
}

// We can also give the parameter object's property directly
function getArcaneCharacterFaction({ faction }) {
  return faction;
}

console.log(getZaunCitizenName(jinxArcane));
console.log(getZaunCitizenId(jinxArcane));
console.log(getArcaneCharacterFaction(jinxArcane));
