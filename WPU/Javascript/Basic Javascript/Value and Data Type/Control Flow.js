for (i = 1; i <= 5; i++) {
  console.log('Iterasi ke-' + i);
  console.log("I'm stuck in for loop!");
}
console.log("I'm out from for loop!");

var x = 20;

if (x % 2 == 0) {
  console.log('EVEN');
} else {
  console.log('ODD');
}

var userInput = prompt('Plase enter your number: ');
if (userInput % 2 === 0 && userInput !== 0) {
  alert('EVEN');
  console.log('EVEN');
} else {
  alert('ODD');
  console.log('ODD');
}
