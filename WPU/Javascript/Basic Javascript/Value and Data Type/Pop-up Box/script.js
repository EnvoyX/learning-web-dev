// Alert
alert('Welcome!');
// alert('This');
// alert('Is');
// alert('Classified Website');

// Prompt
// prompt('Enter Your Name: ');
var nama = prompt('Enter Your Name: ');
alert('Your name is: ' + nama);

// Confirm
var answer = confirm('Are you sure?');
if (answer === true) {
  answer = 'Name confirmed: ' + nama;
} else {
  answer = 'Cancelled';
}
alert(answer);

var getAnswer = false;

while (getAnswer === false) {
  var yourWaifu = prompt('Please tell us your favorite waifu: ');
  alert('Your Waifu is: ' + yourWaifu);

  getAnswer = confirm('Are you sure with your choice?');
}

alert('Cool, your favorit waifu is: ' + yourWaifu);
