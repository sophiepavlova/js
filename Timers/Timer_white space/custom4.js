let sdvig = 0;
const square = document.querySelector("#test");
let timer;

function move() {
  square.style.marginTop = sdvig + "px";
  sdvig += 2;
  timer = setTimeout(move, 50);
}
// move();
function stop() {
  clearTimeout(timer);
}
document.addEventListener("click", function (event) {
  if (event.target === square) {
    // console.log(event.target);
    move();
  } else {
    stop();
  }
});
