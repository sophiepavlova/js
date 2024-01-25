function Slider(obj) {
  this.images = document.querySelectorAll(obj.images);
  this.btnPrev = document.querySelector(obj.btnPrev);
  this.btnNext = document.querySelector(obj.btnNext);

  this.auto = obj.auto;
  this.rate = obj.rate;
  let i = 0;
  let slider = this;
  //   console.log(this.btnNext);
  //   console.log(this.btnPrev);
  //   console.log(obj.btnNext);

  slider.prev = function () {};
  slider.next = function () {
    slider.images[i].classList.remove("showed");
    i++;
    slider.images[i].classList.add("showed");
  };

  slider.btnNext.onclick = slider.next;
}

const slider_1 = new Slider({
  images: ".gallery-1 .fhotos img",
  btnPrev: ".gallery-1 .prev",
  btnNext: ".gallery-1 .next",
  auto: true,
  rate: 3000,
});
const slider_2 = new Slider({
  images: ".gallery-2 .fhotos img",
  btnPrev: ".gallery-2 .prev",
  btnNext: ".gallery-2 .next",
  auto: false,
  rate: 3000,
});
console.log(slider_1, slider_2);
