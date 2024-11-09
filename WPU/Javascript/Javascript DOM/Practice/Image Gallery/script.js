const container = document.querySelector('.container');
const jumboImage = document.querySelector('.jumbo');
const thumbnail = document.querySelector('.thumbnail');
const thumbImages = document.querySelectorAll('.thumb');

// Method 1

container.addEventListener('click', function (event) {
  if (event.target.className == 'thumb') {
    // jumboImage.setAttribute('src', `${event.target.getAttribute('src')}`);
    jumboImage.src = event.target.src;
    jumboImage.classList.add('fade');
    setTimeout(function () {
      jumboImage.classList.remove('fade');
    }, 500);
    thumbImages.forEach(function (thumb) {
      thumb.className = 'thumb';
    });
    event.target.classList.add('active');

    event.preventDefault();
    event.stopPropagation();
  }
});

// Method 2
// thumbImage.forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     jumboImage.setAttribute('src', `${element.getAttribute('src')}`);
//     jumboImage.src = event.target.src;
//     event.preventDefault();
//     event.stopPropagation();
//   });
// });
