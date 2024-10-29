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

//Method in array
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
