// Array Manipulation
var arr = [1, 'Andi', false];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);

// 1.Add a value to array
var arr2 = [];
arr2[0] = 'Hanif';
arr2[1] = 'Hafizhan';
arr2[2] = 'Muhamad';
console.log(arr2);

// 2. Remove/Replace a value from array
var arr3 = ['Muhamad', 'Hanif', 'Hafizhan'];
arr3[0] = 'Ramadhan';
arr3[2] = undefined;
console.log(arr3);

//3. Display all values within an array
var arr4 = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

var arr5 = ['Andi', 'Soni', 'Aldo', 'Hanif', 'John'];
for (var i = 0; i < arr5.length; i++) {
  console.log('Mahasiwa Ke- ' + (i + 1) + ': ' + arr5[i]);
}

//methods in array
// 1. join
// to convert all values within array to string and display it normally with a seperator "," as a default
// but the seperator can be modified within the parenthesis
var arr6 = ['Andi', 'Soni', 'Aldo', 'Hanif', 'John', 'Penguin'];
console.log(arr6.join(', '));
console.log(arr6.join(' - '));

// 2. push & pop
// push is a method to add new element at the last of an array or last index key of defined array
arr6.push('Robert');
console.log(arr6.join(', '));

//push method can add two or more elements at once
arr6.push('Silc', 'Dany');
console.log(arr6.join(', '));

// pop is a method to remove an element at the last of an array or last key index number of defined array
// but pop can't remove more than 1 element
arr6.pop();
console.log(arr6.join(', '));

// 3. unshift & shift

//unshift adds new element at the start of array (first index key)
arr6.unshift('Jafar');
console.log(arr6.join(', '));

//shift removes element at the start of array (first index key)
arr6.shift();
console.log(arr6.join(', '));

// 4. splice
//  splice(indexStart, totalElementsToBeRemoved, newElement1, newElement2,...);
// Remove or add new elements that in specified index
var array = ['Ichigo', 'Uryu', 'Gremmy'];
array.splice(2, 0, 'Yoruichi', 'Aizen');
console.log(array.join(', '));

array.splice(3, 2, 'Uruhara', 'Kenpachi', 'Unohana');
console.log(array.join(', '));

// 5.slice
// slice(indexStart,indexEnd)
//slice an array to create a new  array
var array;
var newArray = array.slice(0, 4);
newArray.splice(3, 0, 'Soi Fon', 'Shinji');
console.log(newArray.join(', '));

// 6.foreach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
angka.forEach(function (e) {
  console.log(e);
});

newArray.forEach(function (e, i) {
  console.log('Character Ke-' + (i + 1) + ': ' + e);
});
// 7. map
newArray.map(function (e, i) {
  console.log('Character Ke-' + (i + 1) + ': ' + e);
});

var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var arrayAngka = angka.map(function (e) {
  console.log(e);
  return e;
});

console.log(arrayAngka.join(', '));

// method map mengembalikan nilai array
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
tenfoldedNumbers = angka.map(function (e) {
  return e * 10;
});

console.log(tenfoldedNumbers.join(', '));

// 8. sort
var number = [2, 5, 7, 8, 3, 1, 4, 6, 9];
number.sort();
console.log(number.join(', '));

var number = [2, 5, 7, 8, 3, 1, 4, 6, 9, 10, 20];
number.sort(function (a, b) {
  return a - b;
});
console.log(number.join(', '));
// sorting algorithm using For loop
var numbers = [2, 5, 7, 8, 3, 1, 4, 6, 10, 9];
var temp = 0;
for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers.length; j++) {
    if (numbers[j] > numbers[j + 1]) {
      temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log(numbers);

for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers.length; j++) {
    if (numbers[j] < numbers[j + 1]) {
      temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log(numbers);
//  9.filter
//memberikan lebih dari satu nilai dalam bentuk array
arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50];
newArrayNumber = arrayNumber.filter(function (x) {
  return x > 5;
});
console.log(newArrayNumber.join(', '));
// 10. find
// hanya memberikan satu nilai
arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50];
newArrayNumber = arrayNumber.find(function (x) {
  return x > 5;
});
console.log(newArrayNumber);
