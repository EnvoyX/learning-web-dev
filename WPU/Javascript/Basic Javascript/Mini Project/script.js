replay = true;
while (replay == true) {
  //Input Player
  var player = prompt("Input pilihan : \n ex. gajah, semut, orang");
  console.log("Player Choose: " + player);
  //Input CPU
  var cpu = Math.random();
  console.log("Hasil math random CPU: " + cpu);

  if (cpu < 0.34) {
    cpu = "gajah";
    console.log("CPU Choose: " + cpu);
  } else if (cpu >= 0.34 && cpu < 0.67) {
    cpu = "orang";
    console.log("CPU Choose: " + cpu);
  } else {
    cpu = "semut";
    console.log("CPU Choose: " + cpu);
  }

  result = "";
  //Rules
  if (player == cpu) {
    alert("The Result is DRAW!");
    console.log("The Result is DRAW!");
    result = "DRAW";
  }
  //Gajah
  else if (player == "gajah") {
    result = cpu == "orang" ? "You Win!" : "You Lose!";
  }
  //   Orang
  else if (player == "orang") {
    result = cpu == "gajah" ? "You Lose!" : "You Win!";
  }
  //   Semut
  else if (player == "semut") {
    result = cpu == "orang" ? "You Lose!" : "You Win!";
  } else {
    alert("Input SALAH!");
    console.log("Input SALAH!");
  }
  //Results
  console.log(result);
  alert(
    "You Choose: " + player + "\nCPU Choose: " + cpu + "\nResult is: " + result
  );
  replay = confirm("Try Again?");
}
alert("Thanks for Playing!");
console.log("Thanks for Playing!");
