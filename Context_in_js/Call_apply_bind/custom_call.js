const btn1 = document.querySelector(".b-1");
const btn2 = document.querySelector(".b-2");

btn2.addEventListener("click", function () {
  colorMe.apply(btn1, ["blue", "white"]);
});

function colorMe(color, textColor) {
  this.style.backgroundColor = color;
  this.style.color = textColor;
}
//call method
// colorMe.call(btn1);
