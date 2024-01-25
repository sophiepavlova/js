const b1 = document.querySelector(".b-1");
const b2 = document.querySelector(".b-2");
let a = changeColour.bind(b1, "teal", "white");
let b = changeColour.bind(b2, "black", "yellow");

b1.onclick = a;
// b1.addEventListener("click", changeColour);
b2.addEventListener("click", function () {
  //   changeColour.call(b1, "red", "white");
  changeColour.apply(b1, ["red", "white"]);
});

function changeColour(color, textColor) {
  this.style.background = color;
  this.style.color = textColor;
}
// changeColour();

//Call method
// changeColour.call(b1);
