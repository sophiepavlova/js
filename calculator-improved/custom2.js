const inp1 = document.querySelector("#num1"),
  inp2 = document.querySelector("#num2"),
  buttons = document.querySelectorAll("button");
console.log(inp1, inp2);
let result = document.querySelector("#result");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    // let operation = this.getAttribute("data-operation");//variant from my lesson
    let operation = this.dataset.operation; // easier way through dataset
    // console.log(datase.operation); //проверяем, что получилось
    calculateForm(operation);
  };
}
function calculateForm(operation) {
  let a = parseInt(inp1.value);
  let b = parseInt(inp2.value);
  let c;
  //   console.log(a, b);
  switch (operation) {
    case "+":
      c = a + b;
      break;
    case "-":
      c = a - b;
      break;
    case "*":
      c = a * b;
      break;
    case "/":
      c = a / b;
      break;
    default:
      "";
  }
  result.innerText = c;
}

//PSEUDO-CODE
// function calculateForm(operation) {
// if (operation == +){
//     складываем
// }
// else if(operation == -){
//     отнимаем
// }
// }
