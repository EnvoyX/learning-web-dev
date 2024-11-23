// 14 Async Await
// Simple Promise
// const coba = new Promise((resolve) => resolve("Done"));
// console.log(coba);

// const newCoba = new Promise(
//   (resolve) =>
//     setTimeout(() => {
//       resolve("Done");
//     }),
//   2000
// );

// Pending Promise (because we ran the code synchronus)
// console.log(newCoba);

// Fulfilled Promise
// newCoba.then(() => console.log(newCoba));

// Promise in Function
// function tryPromise() {
//   return new Promise(
//     (resolve) =>
//       setTimeout(() => {
//         resolve("Done");
//       }),
//     2000
//   );
// }

// Pending result
// newPromise = tryPromise();
// console.log(newPromise);
// Resolved result
// newPromise.then(() => console.log(newPromise));

// Using Async Await
// async function tryAsync() {
//   const attemptAsync = await tryPromise();
//   console.log(attemptAsync);
// }

// tryAsync();

// With Error Handling

function tryPromise() {
  return new Promise((resolve, reject) => {
    const time = 6000;
    if (time < 5000) {
      setTimeout(() => {
        resolve(`Fething Data done!`);
      }, time);
    } else {
      reject(`Too long to fetch!`);
    }
  });
}

const callPromise = tryPromise();
callPromise
  .then((response) => console.log(response))
  .catch((response) => console.log(response));

// async function with error handling

async function tryAsync() {
  try {
    const attemptAsync = await tryPromise();
    console.log(attemptAsync);
  } catch (error) {
    console.error(error);
  }
}

tryAsync();
