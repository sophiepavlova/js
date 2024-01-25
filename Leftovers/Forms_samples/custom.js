document.querySelector(".btn").addEventListener("click", function () {
  let data = document.querySelector(".i-1").value;
  document.querySelector(".out-1").innerText = data;
});

// document.querySelector(".btn").addEventListener("click", function () {
//   document.querySelector(".i-1").value = "test";
// });
document.querySelector(".btn").addEventListener("click", function () {
  let data = document.querySelector(".i-2").value;
  document.querySelector(".out-2").innerText = data;
});

//color

document.querySelector(".btn3").addEventListener("click", function () {
  let data = document.querySelector(".i-3").value;
  this.style.backgroundColor = data;
  console.log(data);
});
//date
document.querySelector(".btn4").addEventListener("click", function () {
  let data = document.querySelector(".i-4").value;
  document.querySelector(".out-4").innerText = data;
});

//range
// document.querySelector(".i-5").addEventListener("input", function () {
//   let data = this.value;
//   document.querySelector(".out-5").innerText = data;
// });

document.querySelector(".i-5").addEventListener("change", function () {
  let data = this.value;
  document.querySelector(".out-5").innerText = data;
});

//checkbox
// document.querySelector(".btn6").addEventListener("click", function () {
//   let data = document.querySelector(".i-6").value;
//   if (document.querySelector(".i-6").checked) {
//     document.querySelector(".out-6").innerText = data;
//   } else {
//     document.querySelector(".out-6").innerText = "";
//   }
// });
document.querySelector(".btn6").addEventListener("click", function () {
  if (document.querySelector(".i-6").checked) {
    document.querySelector(".i-6").checked = false;
  } else {
    document.querySelector(".i-6").checked = true;
  }
});
let data;
//radio
document.querySelector(".btn7").addEventListener("click", function () {
  let radio = document.querySelectorAll(".i-7");
  for (let i in radio) {
    if (radio[i].checked) {
      data = radio[i].value;
      break;
    }
  }
  document.querySelector(".out-7").innerText = data;
});

//Select
document.querySelector(".btn8").addEventListener("click", function () {
  let select = document.querySelector(".sel").value;
  document.querySelector(".out-8").innerText = select;
});
