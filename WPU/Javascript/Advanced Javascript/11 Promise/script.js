// jQuery

// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=7242ca90&s=Harry Potter",
//   //   succelss: (movie) => console.log(movie),
//   success: (movie) => console.log(movie.Search),
// });

// XHR ajax object

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.log(xhr.responseText);
//     }
//   }
//   xhr.open(`get`, "http://www.omdbapi.com/?apikey=7242ca90&s=Harry Potter");
//   xhr.send();
// };

// Fetch from Vanilla Js

// Returns as Promise (if displayed directly)
// const movies = fetch("http://www.omdbapi.com/?apikey=7242ca90&s=Harry Potter");
// console.log(movies);

// Shows actual content of API
// fetch("http://www.omdbapi.com/?apikey=7242ca90&s=Harry Potter").then(
//   (response) => response.json().then((response) => console.log(response))
// );
// fetch("http://www.omdbapi.com/?apikey=7242ca90&s=Harry Potter").then(
//   (response) => response.json().then((response) => console.log(response.Search))
// );

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronus
// di masa yang akan datang.

// janji (terpenuhi / ingkar)

// Javascript

// states (fulfilled / rejected / pending)

// Untuk menjalankan 3 keadaan ini,
// Maka ada 3 fungsi callback yang harus diperhatikan:

// callback(resolve / reject / finally)
// resolve ==> if the states/promise are fulfilled.
// reject ==> if the states/promise are rejected.
// finally ==> if the states/promise pending time is completed.

// didalam Promise ada aksi(then / catch) yang akan dilakukan jika:
// fulfilled ==> then()
// rejected ==> catch()
// then() akan menjalankan resolve
// catch() akan menjalankan reject

// Examples:
let ditepati = true;

const deal1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve(`Promise kept!`);
  } else {
    reject(`Promise reneged!`);
  }
});

deal1
  .finally(() => console.log(`Waiting for response...`))
  .then((response) => console.log(response))
  .catch((response) => console.log(response));

let kept = true;
const deal2 = new Promise((resolve, reject) => {
  if (kept) {
    setTimeout(() => {
      resolve(`Promise kept!`);
    }, 2000);
  } else {
    setTimeout(() => {
      reject(`Promise reneged!`);
    }, 2000);
  }
});

console.log(`Start`);

// If we write this way we can see the Promise process
console.log(
  deal2.then(() => console.log(deal2)).catch(() => console.log(deal2))
);

// If we write this way we can't see the Promise process displayed
deal2
  .finally(() => console.log(`Pending time is over!`))
  .then((response) => console.log(`OK! ${response}`))
  .catch((response) => console.log(`Unfortunately, ${response}`));
console.log(`Finish!`);

// Promise.all()
// use method .all() if you have multiple or more Promises to be run at once at the same time

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        title: `Avengers`,
        director: `Andi Jafar`,
        actors: `Soni, Aldo`,
      },
    ]);
  }, 1000);
});

const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        city: `Bandung`,
        temp: 26,
        condition: `Cloudy`,
      },
    ]);
  }, 500);
});

// exectuted in order (based on time)
// film.then((response) => console.log(response));
// weather.then((response) => console.log(response));

// run all Promise at the same time
// Displatyed as an array of two elements array
Promise.all([film, weather]).then((response) => console.log(response));

// Displayed individually by destructuring
Promise.all([film, weather]).then((response) => {
  const [film, weather] = response;
  console.log(film);
  console.log(weather);
});
