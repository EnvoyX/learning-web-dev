const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 7];

// search for numbers >=3

// for loop

const sortedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 3) {
    sortedNumbers.push(numbers[i]);
  }
}

console.log(sortedNumbers);

// filter
// filter each element with given statement

// normal function
// const newNumbers = numbers.filter(function (element) {
//   return element >= 3;
// });

// arrow function
const newNumbers = numbers.filter((element) => element >= 3);

console.log(newNumbers);

// map
// method that map each element from an array through given function and create new array from it
//ex.  multiply all number with 2.

const multipliedNumbers = numbers.map((element) => element * 2);

// doesn't change the original arrays, instead create a new one
console.log(numbers);
console.log(multipliedNumbers);

// reduce
// ex. add whole element at array

// parameters:
// accumulator ==> result from each element iteration for given specific condition
// currentValue ==> array's element iteration in loop | i.e array[0] to array[i].
const summedNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// (accumulator, currentValue) => accumulator + currentValue, 0) ==> here's a thrid value that is initialValue, this default at zero

console.log(summedNumbers);

// Method Chaining
// ex. search number > 5
// each filtered number multiplied by 3
// and then summed all the filtered number

const result = numbers
  .filter((element) => element > 5) // [8,9,7]
  .map((element) => element * 3) //  [24,27,21]
  .reduce((acc, arr) => acc + arr); //  [72]

console.log(result);
