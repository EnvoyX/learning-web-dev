// Callback
// Synchronus Callback

// function halo(name) {
//   alert(`Halo, ${name}`);
// }

// function showMessage(callback) {
//   const name = prompt(`Your name is: `);
//   callback(halo(name));
// }

// showMessage(halo);

// Alternative with shorter line of code

// function showMessage(callback) {
//   const name = prompt(`Your name is: `);
//   callback(name);
// }

// showMessage((nama) => alert(`Hello, ${nama}`));

mhs = [
  {
    nama: `Andi`,
    nrp: `13523069`,
    jurusan: `Teknik Informatika`,
    email: `13523069@mahasiswa.itb.ac.id`,
  },
  {
    nama: `Aldo`,
    nrp: `13523055`,
    jurusan: `Teknik Informatika`,
    email: `13523055@mahasiswa.itb.ac.id`,
  },
  {
    nama: `Soni`,
    nrp: `13523032`,
    jurusan: `Teknik Informatika`,
    email: `13523032@mahasiswa.itb.ac.id`,
  },
];

// Synchronus

// console.log(`Start`);
// mhs.forEach((element) => {
//   console.log(element.nama);
// });
// console.log(`Success!`);

// Fetching data simulation
// this demonstrate that it runs Synchronus and blocking noticeable

// console.log(`Start`);
// mhs.forEach((element) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(element.nama);
// });
// console.log(`Success!`);

// Asynchronus Callback
// Vanilla Javascript
// ajax
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  // Request data secara Asynchronus menggunakan ajax
  xhr.onreadystatechange = function () {
    // perubahan readyState dari 0 sampai 4,
    // dimana masing-masing state memiliki keadaaan masing-masing
    // state 4 adalah state akhir dalam keadaan siap
    if (xhr.readyState === 4) {
      // Jika berhasil mengakses halaman
      if (xhr.status === 200) {
        success(xhr.response);
      }
      // Jika gagal mengakses halaman
      else if ((xhr.status = 404)) {
        error();
      }
    }
  };

  // Run the ajax
  // xhr.open ("method", url)
  xhr.open(`get`, url);
  xhr.send();
}

console.log(`Fetching Data...`);

// Call the function

// Note: there are 3 parameter
// getDataMahasiswa(url, callbackSucess, callbackError)

// Data displayed in text
getDataMahasiswa(
  `data/mahasiswa.json`,
  (results) => {
    console.log(results);
  },
  () => {}
);

// dipslay in object
getDataMahasiswa(
  `data/mahasiswa.json`,
  (results) => {
    console.log(JSON.parse(results));
  },
  () => {}
);

// display object's specific property
getDataMahasiswa(
  `data/mahasiswa.json`,
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((element) => console.log(element.nama));
  },
  () => {}
);

console.log(`Data retrieved`);

// JQuery
console.log(`Start`);
// Result using JQuery already in Object JSON
$.ajax({
  url: `data/mahasiswa.json`,
  success: (results) => {
    console.log(results);
    const mahasiswa = results;
    mahasiswa.forEach((element) => console.log(element.nrp));
  },
  error: (error) => {
    error.responseText;
  },
});
console.log(`Done`);
