const inputs = document.querySelectorAll(".checked");
const form = document.querySelector("form");
const message = document.querySelector("#message");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm");

let inputTypeTel = document.querySelector(".input-tel");

console.log(inputTypeTel);
console.log(password.value);

let im = new Inputmask("+1 (999) 999-99-99"); //\d\d\d\d\d\d\d\d\d\d
im.mask(inputTypeTel);

//function to get the unmasked phone
// const phone = inputTypeTel.inputmask.unmaskedvalue();
// console.log(phone);
let phone;

function unmaskedPhone() {
  console.log(phone);
  phone = inputTypeTel.inputmask.unmaskedvalue();
  return phone.length === 10;
}
// unmaskedPhone();

form.onsubmit = function (event) {
  event.preventDefault();
  phone = inputTypeTel.inputmask.unmaskedvalue();
  let error = false;
  for (const item of inputs) {
    if (item.value == "") {
      error = true;
      item.classList.add("error");
    } else {
      item.classList.remove("error");
    }
  }
  if (error) {
    message.innerText = "Пожалуйста, заполните все поля.";
  } else if (passwordConfirm.value !== password.value) {
    console.log("passwords are not matching");
    console.log(`The password is: ${password.value}`);
    console.log(`The confirmation is: ${passwordConfirm.value}`);
    message.innerText = "Пароли нe совпадают";
    password.classList.add("error");
    passwordConfirm.classList.add("error");
  } else if (phone.length < 10) {
    console.log("The phone is too short");
    message.innerText = "Please write 10 digit number";
  } else {
    const formData = new FormData(form);
    message.innerText = "Форма успешно отправлена";
    console.log(...formData);
    setTimeout(() => {
      message.innerText = "";
      form.reset();
    }, 3000);
  }
};
