function getComputerChoice() {
  var cpu = Math.round(Math.random() * 100);
  console.log("Hasil math random CPU: " + cpu);

  if (cpu < 34) return "gajah";
  if (cpu >= 34 && cpu < 67) return "orang";
  return "semut";
}

function getResult(player, cpu) {
  if (player == cpu) return "DRAW!";
  if (player == "gajah") return cpu == "orang" ? "You Win!" : "You Lose!";
  if (player == "orang") return cpu == "gajah" ? "You Lose!" : "You Win!";
  if (player == "semut") return cpu == "orang" ? "You Lose!" : "You Win!";
  else {
    console.log("Input SALAH!");
    return "Wrong Input!";
  }
}

// Method 1

// const playerOrang = document.querySelector(".orang");
// const playerGajah = document.querySelector(".gajah");
// const playerSemut = document.querySelector(".semut");

// const imageComputerChoice = document.querySelector(".img-komputer");

// const resultToInterface = document.querySelector(".info");

// playerOrang.addEventListener("click", function () {
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerOrang.className;
//   const result = getResult(playerChoice, computerChoice);
//   console.log(`Computer: ${computerChoice}`);
//   console.log(`Player: ${playerChoice}`);
//   console.log(`Result: ${result}`);
//   if (computerChoice == "gajah")
//     return (
//       imageComputerChoice.setAttribute("src", "img/gajah.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
//   if (computerChoice == "orang")
//     return (
//       imageComputerChoice.setAttribute("src", "img/orang.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
//   if (computerChoice == "semut")
//     return (
//       imageComputerChoice.setAttribute("src", "img/semut.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
// });

// playerGajah.addEventListener("click", function () {
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerGajah.className;
//   const result = getResult(playerChoice, computerChoice);
//   console.log(`Computer: ${computerChoice}`);
//   console.log(`Player: ${playerChoice}`);
//   console.log(`Result: ${result}`);
//   if (computerChoice == "gajah")
//     return (
//       imageComputerChoice.setAttribute("src", "img/gajah.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
//   if (computerChoice == "orang")
//     return (
//       imageComputerChoice.setAttribute("src", "img/orang.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
//   if (computerChoice == "semut")
//     return (
//       imageComputerChoice.setAttribute("src", "img/semut.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
// });

// playerSemut.addEventListener("click", function () {
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerSemut.className;
//   const result = getResult(playerChoice, computerChoice);
//   console.log(`Computer: ${computerChoice}`);
//   console.log(`Player: ${playerChoice}`);
//   console.log(`Result: ${result}`);
//   if (computerChoice == "gajah")
//     return (
//       imageComputerChoice.setAttribute("src", "img/gajah.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
//   if (computerChoice == "orang")
//     return (
//       imageComputerChoice.setAttribute("src", "img/orang.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
//   if (computerChoice == "semut")
//     return (
//       imageComputerChoice.setAttribute("src", "img/semut.png"),
//       (resultToInterface.innerHTML = `${result}`)
//     );
// });

// Spinning image behavior for computer
function spin() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const timeStart = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - timeStart > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute(`src`, `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 100);
}

// Score-counter
const scorePlayer = document.querySelector(".score-player");
const scoreComputer = document.querySelector(".score-computer");
let scoreP = 0;
let scoreCPU = 0;

function scoreCounter(result) {
  if (result == "You Win!") return (scorePlayer.innerHTML = `${(scoreP += 1)}`);
  if (result == "You Lose!")
    return (scoreComputer.innerHTML = `${(scoreCPU += 1)}`);
}

// Method 2

const imageChoice = document.querySelectorAll("li img");
imageChoice.forEach(function (choice) {
  choice.addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    const playerChoice = choice.className;
    const result = getResult(playerChoice, computerChoice);
    console.log(`Computer: ${computerChoice}`);
    console.log(`Player: ${playerChoice}`);
    console.log(`Result: ${result}`);

    spin();
    setTimeout(function () {
      const imageComputerChoice = document.querySelector(".img-komputer");
      const resultToInterface = document.querySelector(".info");
      scoreCounter(result);
      if (computerChoice == "gajah")
        return (
          imageComputerChoice.setAttribute("src", "img/gajah.png"),
          (resultToInterface.innerHTML = `${result}`)
        );
      if (computerChoice == "orang")
        return (
          imageComputerChoice.setAttribute("src", "img/orang.png"),
          (resultToInterface.innerHTML = `${result}`)
        );
      if (computerChoice == "semut")
        return (
          imageComputerChoice.setAttribute("src", "img/semut.png"),
          (resultToInterface.innerHTML = `${result}`)
        );
    }, 1000);
  });
});
