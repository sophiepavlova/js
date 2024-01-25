const boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) {
  box.addEventListener("click", function (event) {
    // console.log(event);
    // event.stopPropagation();
    // console.log(this.getAttribute("id"));
    console.log(event.target.getAttribute("id"));
    event.target.setAttribute("style", "border:10px solid black");
  });
});

let a = {
  name: "Olga",
  getName: function () {
    console.log(this.name);
  },
};
a.getName();

// const b = [1, 2, 3];

// function test(element) {
//   console.log(element);
// }

// b.foreach(test(element));
