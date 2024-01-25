class Slider {
  constructor(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.btnPrev = document.querySelector(obj.btnPrev);
    this.btnNext = document.querySelector(obj.btnNext);
    this.auto = obj.auto;
    this.rate = obj.rate;
    console.log(this.btnNext);
    console.log(this.btnPrev);
    let i = 0;
    let slider = this;

    slider.prev = function () {
      slider.images[i].classList.remove("showed");
      i--;
      if (i < 0) {
        i = slider.images.length - 1;
      }
      slider.images[i].classList.add("showed");
    };

    slider.next = function () {
      slider.images[i].classList.remove("showed");
      i++;
      if (i >= slider.images.length) {
        i = 0;
      }
      slider.images[i].classList.add("showed");
    };

    slider.btnNext.onclick = slider.next;
    slider.btnPrev.onclick = slider.prev;

    //auto
    if (slider.auto == true) {
      console.log(slider.auto);
      setInterval(slider.next, slider.rate);
    }
  }
}

const slider_1 = new Slider({
  images: ".gallery-1 .fhotos img",
  btnPrev: ".gallery-1 .prev",
  btnNext: ".gallery-1 .next",
  auto: true,
  rate: 3000,
});
const slider_2 = new Slider({
  images: ".gallery-2  .fhotos img",
  btnPrev: ".gallery-2 .prev",
  btnNext: ".gallery-2 .next",
  auto: false,
  rate: 3000,
});
const slider_3 = new Slider({
  images: ".gallery-3  .fhotos img",
  btnPrev: ".gallery-3 .prev",
  btnNext: ".gallery-3 .next",
  auto: false,
  rate: 3000,
});

console.log(slider_1); //Slider {images: NodeList(8)}
console.log(slider_2); //Slider {images: NodeList(8)}
console.log(slider_3); //Slider {images: NodeList(8)}
