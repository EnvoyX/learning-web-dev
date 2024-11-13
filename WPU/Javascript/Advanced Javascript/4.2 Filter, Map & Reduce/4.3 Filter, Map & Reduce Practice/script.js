// ambil semua elemen video

// const videos = document.querySelectorAll(`li[data-duration]`); // ini masih NodeList bukan Array
let videos = Array.from(document.querySelectorAll(`li[data-duration]`));
console.log(videos);

// pilih element video yang text contentnya mengandung `Javascript Lanjutan`
let jsAdvancedVideos = videos
  .filter((video) => video.textContent.includes(`JAVASCRIPT LANJUTAN`))

  // ambil data durasi masing2 video (data-duration)
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi int, convert menit jadi detik
  .map((time) => {
    const parts = time.split(`:`).map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((totalAcc, dataDurasi) => totalAcc + dataDurasi);

// assign ke variable baru
// let totalDuration = 0;
// totalDuration = jsAdvancedVideos;

// ubah formatnya jadi jam menit detik
// Hour
const hour = Math.floor(jsAdvancedVideos / 3600);

// Minute
jsAdvancedVideos = jsAdvancedVideos - hour * 3600;
const minute = Math.floor(jsAdvancedVideos / 60);

// Seconds
jsAdvancedVideos = jsAdvancedVideos - minute * 60;
const second = Math.floor(jsAdvancedVideos);

// save di DOM

console.log(`Hour : ${hour} hours`);
console.log(`Minute : ${minute} minutes`);
console.log(`Seconds : ${second} seconds`);

const totalVideoJsLanjutan = document.querySelector(
  `ol li p span.jumlah-video`
);
const totalDurationJsLanjutan = document.querySelector(
  `ol li p span.total-durasi`
);

totalVideoJsLanjutan.textContent = `${
  videos.filter((video) => video.textContent.includes(`JAVASCRIPT LANJUTAN`))
    .length
} videos`;

totalDurationJsLanjutan.textContent = `${hour} hours , ${minute} minutes, ${second} seconds.`;
