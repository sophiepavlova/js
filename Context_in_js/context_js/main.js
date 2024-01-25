// document.querySelector("#header3").onclick = helloFunction;
// document.querySelector("#header3").onclick = byeFunction;

// document.querySelector("#header3").onclick = function () {
//   helloFunction();
//   byeFunction();
// };
document.querySelector("#header3").addEventListener("click", helloFunction);
document.querySelector("#header3").addEventListener("click", byeFunction);

function helloFunction() {
  console.log("h3");
  console.log(this);
}

function byeFunction() {
  console.log("bye!");
  console.log(this);
}
