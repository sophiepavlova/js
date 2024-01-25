const btn1 = document.querySelector(".b-1");
const btn2 = document.querySelector(".b-2");
let a = colorMe.bind(btn1, "black", "white");
let b = colorMe.bind(btn2, "yellow", "grey");
btn1.onclick = a;

btn2.addEventListener("click", function () {
  colorMe.call(btn1, "blue", "white");
});

function colorMe(color, textColor) {
  this.style.backgroundColor = color;
  this.style.color = textColor;
}
//call method
// colorMe.call(btn1);
