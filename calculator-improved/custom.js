const inp1 = document.querySelector("#num1"),
  inp2 = document.querySelector("#num2"),
  buttons = document.querySelectorAll("button");
let result = document.querySelector("#result");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    // let operation =button.dataset.
    let operation = this.getAttribute("data-operation");
    calculateForm(operation);
  };
}

function calculateForm(operation) {
  let a = parseInt(inp1.value);
  let b = parseInt(inp2.value);
  let c;
  //   console.log(a, b);
  // if (operation == "+") {
  //   c = a + b;
  // } else if (operation == "-") {
  //   c = a - b;
  // } else if (operation == "*") {
  //   c = a * b;
  // } else if (operation == "/") {
  //   c = a / b;
  // } else {
  // }
  //SWITCH CASE - it is the alanolg of the long if-else statement,  when we compare our variable against different conditions. The syntax is unusual for js.
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
  }
  result.innerText = c;
}
