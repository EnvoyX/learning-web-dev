// Tagged Templates
const name = `Hanif Hafihzan`;
const age = 20;
const email = `13523069@mahasiswa.itb.ac.id`;

// Template Literal
// const str = `Hello, my name is ${name} and I am ${age} years old.

// Tagged Templates

// Jika mengembalikan strings maka akan mengembalikan string nya saja tanpa embedded expression nya dalam bentuk array
// function cobaTag(strings, ...args) {
//   return strings;
// }

// pada paremeter setelah strings, kita menaruh parameter untuk embedded expression di template literal
// ex. name, age

// function cobaTag(strings, name, age) {
//   return name;
//   // return age;
// }

//...args ==> dalam bentuk rest Parameter sehingga menampung semua argument atau expression dari Template Literal dalam bentuk array,
// i.e [name, age] tanpa harus menulis semua parameter untuk masing-masing expression
// function cobaTag(strings, ...args) {
//   return args;
// }

function cobaTag(strings, ...args) {
  // Method 1
  // let result = ``;
  // strings.forEach((string, i) => {
  //   result += `${string} ${args[i] || ``}`;
  // });
  // return result;

  // Method 2
  return strings.reduce(
    (result, string, i) => `${result} ${string} ${args[i] || ``}`,
    ``
  );
}

const str = cobaTag`Hello, my name is ${name} and I am ${age} years old.`;

console.log(str);

// Highlight
// highlight every embedded expression
function highlight(strings, ...args) {
  return strings.reduce(
    (result, string, i) =>
      `${result} ${string} <span class="highlight"> ${args[i] || ``}</span>`,
    ``
  );
}

const stringResult = highlight`Hello, my name is ${name} and I am ${age} years old. My student email is ${email} `;

console.log(stringResult);

document.body.innerHTML = stringResult;
