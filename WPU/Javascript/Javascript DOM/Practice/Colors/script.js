const btnFavoriteColor = document.getElementById("btnChangeColor");
btnFavoriteColor.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "light-coral");
  document.body.classList.toggle("light-coral");
});

// Case 2 : add button to randomize color
// set up new button for random color
const randomButton = document.createElement("button");
const textRandomButton = document.createTextNode("Randomized Color");
randomButton.appendChild(textRandomButton);
// add attribute to button
randomButton.setAttribute("type", "button");
randomButton.setAttribute("id", "btnRandomColor");
// if the button below favorite color button and centered
// randomButton.style.display = "block";
// randomButton.style.margin = "auto";

// set where the button placed (with new manipulation method)
btnFavoriteColor.after(randomButton);
// btnFavoriteColor.before(randomButton);
// btnFavoriteColor.remove();
// btnFavoriteColor.replaceWith(randomButton);

randomButton.addEventListener("click", function () {
  //   const random = Math.random(); --> hanya random antara 0 sampai 1
  //   const random = Math.random() * 255 + 1; // hanya random antara 1 sampai 255
  const r = Math.round(Math.random() * 255 + 1); // applied function math to round numbers(.ceiling,.floor,.round)
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// Case 3 : adding rgb slider to change body backgroundColor

// adding an rgb slider
const inputSliderRed = document.querySelector("input[name=inputSliderRed]");
const inputSliderGreen = document.querySelector("input[name=inputSliderGreen]");
const inputSliderBlue = document.querySelector("input[name=inputSliderBlue]");
// implement events to manipulate color
// method 1

// inputSliderRed.addEventListener("input", function () {
//   const r = inputSliderRed.value;
//   const g = inputSliderGreen.value;
//   const b = inputSliderBlue.value;

//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// inputSliderGreen.addEventListener("input", function () {
//   const r = inputSliderRed.value;
//   const g = inputSliderGreen.value;
//   const b = inputSliderBlue.value;

//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// inputSliderBlue.addEventListener("input", function () {
//   const r = inputSliderRed.value;
//   const g = inputSliderGreen.value;
//   const b = inputSliderBlue.value;

//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

// method 2
// inputRange = total input yang ada, lalu memilih semua tag input berdasarkan urutan
const inputRange = document.querySelectorAll("input");
console.log(inputRange);

for (let i = 0; i < inputRange.length; i++) {
  console.log(`sekarang memberikan .addEventLitsener pada input ke ${i} `);
  inputRange[i].addEventListener("input", function () {
    const r = inputRange[0].value;
    const g = inputRange[1].value;
    const b = inputRange[2].value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

// Case 4 : color changes relative to cursor position

document.body.addEventListener("mousemove", function (eventMouse) {
  // mouse position
  //   console.log(`Mouse position X: ${eventMouse.clientX}`);
  //   console.log(`Mouse position Y: ${eventMouse.clientY}`);
  // width and height browser
  //   console.log(`Lebar window: ${window.innerWidth}`);
  //   console.log(`Tinggi window: ${window.innerHeight}`);

  // PosX & PosY
  const PosX = Math.round((eventMouse.clientX / innerWidth) * 255);
  const PosY = Math.round((eventMouse.clientY / innerHeight) * 255);

  // since we can't find z value
  // side note: for value of b it can be randomized, set at fixed value, or set it same as other Position
  console.log("X: " + PosX);
  console.log("Y: " + PosY);
  document.body.style.backgroundColor = `rgb(${PosX},${PosY},${PosY})`;
  //   document.body.style.backgroundColor = `rgb(${PosX},${PosY},${Math.round(
  //     Math.random() * 255 + 1
  //   )})`;
});
