// Case Studies
// Arrow Function
const box = document.querySelector(`.box`);
box.addEventListener(`click`, function () {
  let size = 'size';
  let caption = 'caption';
  let temp = `none`;

  if (this.classList.contains(size)) {
    // New Way with new JavaScript
    // This syntax tells that, if box element contains class `size`
    // switch the value between `size` and `caption`
    // [size, caption] = [caption, size];

    // Old way with JavaScript
    temp = size;
    size = caption;
    caption = temp;

    // both works the same way
  }

  this.classList.toggle(size);
  setTimeout(() => {
    this.classList.toggle(caption);
  }, 600);
});
