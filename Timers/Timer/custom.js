let sdvig = 0;
const div = document.querySelector("#test");
const btnStop = document.querySelector(".butt-st");

function move() {
  div.style.marginLeft = sdvig + "px";
  sdvig += 3;
}
let timer = setInterval(move, 50);
function stopTimer() {
  clearInterval(timer);
}

btnStop.addEventListener("click", function () {
  stopTimer();
});
