replay = true;
while (replay == true) {
  var attempts = 3;
  var remainingAttempts = 3;
  var randomizedNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomizedNumber);
  while (attempts != 0) {
    var result = "";

    userInput = parseInt(
      prompt(
        "Guess the number!" +
          "\nPlease Input Number from 1-10: " +
          "\nYour Remaining Attempts: " +
          remainingAttempts
      )
    );
    userInput = isNaN(userInput) ? 0 : userInput;

    if (userInput != randomizedNumber && remainingAttempts != 0) {
      result =
        userInput < randomizedNumber ? "Value too low!" : "Value too high!";
      attempts -= 1;
      remainingAttempts = attempts;
      alert(
        "Value that you choose: " + userInput + "\nThe result is: " + result
      );
    } else {
      remainingAttempts = attempts;
      result = "Your guess is correct!";
      attempts = 0;
    }
  }
  if (remainingAttempts > 0) {
    alert(
      result +
        "\nRandomized Number: " +
        randomizedNumber +
        "\nRemaining Attempts: " +
        remainingAttempts
    );
  } else {
    alert(
      "You have no longer attempts!" +
        "\nThe Randomized Number is: " +
        randomizedNumber
    );
  }
  replay = confirm("Try Again?");
}
alert("Thanks for Playing!");
console.log("Thanks for Playing!");
