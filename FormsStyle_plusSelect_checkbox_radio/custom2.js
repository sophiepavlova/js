const btnText = document.querySelector(".btn1");
const btnNumber = document.querySelector(".btn2");
const btnColor = document.querySelector(".btn3");
const btnDate = document.querySelector(".btn4");
const btnChBox = document.querySelector(".btn6");
const btnRadio = document.querySelector(".btn7");
const btnSelect = document.querySelector(".btn8");

const buttonDropdown = document.querySelector("#btn-dr");
const select = document.querySelector(".dropdown");
const options = document.querySelectorAll(".option");
const selectLabel = document.querySelector("#select-label");

//input type="test"
btnText.addEventListener("click", function () {
  let data = document.querySelector(".i-1").value;
  document.querySelector(".out-1").innerText = data;
});
//input type="number"
btnNumber.addEventListener("click", function () {
  let data = document.querySelector(".i-2").value;
  document.querySelector(".out-2").innerText = data;
});
//input type="color"
btnColor.addEventListener("click", function () {
  let data = document.querySelector(".i-3").value;
  this.style.backgroundColor = data;
});
//input type="date"
btnDate.addEventListener("click", function () {
  let data = document.querySelector(".i-4").value;
  document.querySelector(".out-4").innerText = data;
});
//input type=”range” -- обработчик события input
document.querySelector(".i-5").addEventListener("input", function () {
  let data = this.value;
  document.querySelector(".out-5").innerText = data;
});

// обработчик события change
document.querySelector(".i-5").addEventListener("change", function () {
  let data = this.value;
  document.querySelector(".out-5").innerText = data;
});
//input type="checkbox":
//Assignment 1

// btnChBox.addEventListener("click", function () {
//   let data = document.querySelector(".i-6").value;
//   if (document.querySelector(".i-6").checked) {
//     document.querySelector(".out-6").innerText = data;
//   } else {
//     document.querySelector(".out-6").innerText = "";
//   }
// });

//Assignment 2
btnChBox.addEventListener("click", function () {
  let data = document.querySelector(".i-6").value;
  if (document.querySelector(".i-6").checked) {
    document.querySelector(".i-6").checked = false;
  } else {
    document.querySelector(".i-6").checked = true;
  }
});
//radio button
btnRadio.addEventListener("click", function () {
  let data;
  let radio = document.querySelectorAll(".i-7");
  for (let i in radio) {
    data = radio[i].value;
    if (radio[i].checked) {
      break;
    }
  }
  document.querySelector(".out-7").innerText = data;
});

//my solution
// btnRadio.addEventListener("click", function () {
//   const arrRadios = document.querySelectorAll(".i-7");
//   for (let i = 0; i < arrRadios.length; i++) {
//     if (arrRadios[i].checked) {
//       document.querySelector(".out-7").innerText = arrRadios[i].value;
//     }
//   }
// });

//Select
// btnSelect.addEventListener("click", function () {
//   let select = document.querySelector(".sel").value;
//   document.querySelector(".out-8").innerText = select;
// });

// For radio instead of select

// document.querySelector(".dropdown").classList.toggle("hidden");
//To prevent default behaviour of the button we need to pass in the button - to do that we need to pass in e (which stands for event) onto our function and run inside it another function e.preventDefault();
buttonDropdown.addEventListener("click", function (e) {
  e.preventDefault();
  toggleHidden();
});

function toggleHidden() {
  select.classList.toggle("hidden");
}

options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectedTitle(e);
  });
});

function setSelectedTitle(e) {
  const labelElement = document.querySelector(
    `label[for="${e.target.id}"]`
  ).innerText;
  //   console.log(selectLabel);
  selectLabel.innerText = labelElement;
  toggleHidden();
}
