let sdvig = 0;
const div = document.querySelector("#test");
const btnStop = document.querySelector(".butt-st");
const btnStart = document.querySelector(".butt");
let timer;

function move() {
  div.style.marginLeft = sdvig + "px";
  sdvig += 3;
  timer = setTimeout(move, 50);
}
move();

function stopTimer() {
  timer = clearTimeout(timer);
}

btnStop.addEventListener("click", function () {
  stopTimer();
});
btnStart.addEventListener("click", function () {
  setTimeout(move, 50);
});
