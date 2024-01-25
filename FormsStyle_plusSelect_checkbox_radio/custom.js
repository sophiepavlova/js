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
