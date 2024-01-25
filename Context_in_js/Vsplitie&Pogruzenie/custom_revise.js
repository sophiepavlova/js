const boxes = document.querySelectorAll(".box"); //array with our two divs
const links = document.querySelectorAll(".link");

boxes.forEach(function (box) {
  box.addEventListener("click", function (event) {
    event.stopPropagation();
    // console.log(this.getAttribute("id"));
    console.log(event.target.getAttribute("id"));
    event.target.setAttribute("style", "border: 10px solid black");
  });
});
//For disactivating one link
const linkSecond = document.querySelector(".link2");
console.log(linkSecond);

linkSecond.addEventListener("click", function (event) {
  console.log("2-в link is pressed");
  console.log(event);
  event.stopPropagation();
  console.log(linkSecond.getAttribute("class"));
});

//Array reminder
let a = {
  name: "Olga",
  getName: function () {
    console.log(this.name);
  },
};
a.getName();
//object

// const user = {
//   name: "John",
//   hobby: "walking",
// };

// const gr = function () {
//   alert("Hello there!");
// };
// user.greating = gr;
// console.log(user);
// user.greating();

console.log("Homework");
let min;
let max;
let arrayOfNumbers = [];

function createArrayOfNumbers(min, max) {
  while (min <= max) {
    arrayOfNumbers.push(min++);
  }
}
createArrayOfNumbers(1, 3);
console.log(arrayOfNumbers);
