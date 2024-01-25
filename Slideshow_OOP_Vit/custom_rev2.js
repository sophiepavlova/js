class Slider {
  constructor(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.btnPrev = document.querySelector(obj.btnPrev);
    this.btnNext = document.querySelector(obj.btnNext);
    this.auto = obj.auto;
    this.rate = obj.rate;
    console.log(this.btnNext);
    console.log(this.btnPrev);
    this.i = 0
	
	if(this.auto){
		setInterval(this.next,this.rate);	
	}

	this.btnPrev.addEventListener('click', this.prev)
	this.btnNext.addEventListener('click', this.next)
	
  }
		prev = () =>{
			this.images[this.i].classList.remove('showed');
			this.i--;
			if(this.i < 0){
				this.i = this.images.length - 1;
			}
			this.images[this.i].classList.add('showed');

		}
		next = () =>{
			this.images[this.i].classList.remove('showed');
			this.i++;
			if(this.i >= this.images.length){
				this.i = 0;
			}
			this.images[this.i].classList.add('showed');
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
