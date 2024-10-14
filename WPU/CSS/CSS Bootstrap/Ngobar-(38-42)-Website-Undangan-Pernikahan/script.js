const offcanvas = document.querySelector(".offcanvas");
const stickyTop = document.querySelector(".sticky-top");

// Saat click btn open hamburger
offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

// Saat click btn close
const btnClose = document.querySelector(".btn-close");

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// Enable & Disable Scroll
const rootElement = document.querySelector(":root");
// Disable Scroll at landing page
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  // Disable Smooth Scrolling from Bootstrap
  rootElement.style.scrollBehavior = "auto";
}
// Audio Player
const song = document.querySelector("#song");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = true;
function playAudio() {
  song.volume = 0.5;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}
playAudio();
// ON/Off Audio
audioIconWrapper.onclick = function () {
  if (isPlaying === true) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.remove("bi-pause-circle");
    audioIcon.classList.add("bi-disc");
  }
  isPlaying = !isPlaying;
};

// Enable Scroll & smooth scrolling after click "lihat undangan"
function enableScroll() {
  window.onscroll = function () {
    rootElement.style.scrollBehavior = "smooth";
    localStorage.setItem("opened", "true");
  };
}

if (!localStorage.getItem("opened")) {
  disableScroll();
}

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama") || "";
// const pronoun = urlParams.get("pronoun") || "Bapak/Ibu/Saudara/i";
console.log(nama);

const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${nama}`;
// namaContainer.innerText = `${pronoun} ${nama},`;

document.querySelector("#nama").value = nama;

//Submit Event
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
    });
  });
});
