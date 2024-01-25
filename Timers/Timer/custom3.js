let sdvig = 0;
const square = document.querySelector("#test");
const btnStop = document.querySelector(".butt-st");
const btnStart = document.querySelector(".butt");
let timer;

function move() {
  square.style.marginLeft = sdvig + "px";
  sdvig += 3;
  timer = setTimeout(move, 50);
}
// move();
function stop() {
  timer = clearTimeout(timer);
}

btnStop.addEventListener("click", stop);
btnStart.addEventListener("click", move);
