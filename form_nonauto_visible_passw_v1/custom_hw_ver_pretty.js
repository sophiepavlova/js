const inputs = document.querySelectorAll(".checked");
const form = document.querySelector("form");
const message = document.querySelector("#message");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm");

const messageName = document.querySelector("#message_name");
const nameLog = document.querySelector("#name");
const messageTel = document.querySelector("#message_tel");
const messagePas = document.querySelector("#message_pass");

//BUG
// const nameRegex = /^[A-Za-zА-Яа-яЁёs]{8,}/;original
const nameRegex = /^[A-Za-zА-Яа-яЁёs]{8,}$/;
let nameResult = nameRegex.test(nameLog.value);
// alert("name:" + nameResult);

var phoneRGEX =
  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

//

let inputTypeTel = document.querySelector(".input-tel");

const errorMess = {
  nameEr: "Write your name, please",
  nameEr2: "Разрешено использовать только пробелы, русские и латинские буквы",
  phoneEr: "Please write 10 digit number",
  passwEr: "Пароли нe совпадают",
  fieldsEr: "Пожалуйста, заполните все поля",
  successEr: "Форма успешно отправлена",
};

let im = new Inputmask("+1 (999) 999-99-99"); //\d\d\d\d\d\d\d\d\d\d
im.mask(inputTypeTel);
let phone;

function unmaskedPhone() {
  phone = inputTypeTel.inputmask.unmaskedvalue();
  return phone.length === 10;
}

console.log(nameRegex);
// for password toggle
const togglePassword = document.querySelector("#togglePassword");
const togglePasswordConfirmed = document.querySelector(
  "#togglePasswordConfirm"
);

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});
togglePasswordConfirmed.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    passwordConfirm.getAttribute("type") === "password" ? "text" : "password";
  passwordConfirm.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});
//end of password toggle code

form.onsubmit = function (event) {
  event.preventDefault();
  phone = inputTypeTel.inputmask.unmaskedvalue();
  let error = false;

  for (const item of inputs) {
    if (item.value === "") {
      error = true;
      item.classList.add("error");
    } else {
      item.classList.remove("error");
    }
  }
  //Name input
  // && nameLog.value.length < 10
  // let nameResult = nameRegex.test(nameLog.value);
  if (nameLog.value != "" && nameLog.value.length < 10) {
    console.log(nameRegex);
    error = true;
    messageName.classList.remove("hidden");
    // messageName.innerText = errorMess.nameEr2;
    messageName.innerText = errorMess.nameEr;
    nameLog.classList.add("error");
    // } else if (!nameResult) {
    //   // alert("name:" + nameResult);
    //   error = true;
    //   messageName.innerText = errorMess.nameEr2;
  } else {
    messageName.classList.add("hidden");
    // let nameResult = nameRegex.test(nameLog.value);
    // alert("name:" + nameResult);
  }

  //Phone input

  if (inputTypeTel.value != "" && phone.length < 10) {
    error = true;
    messageTel.classList.remove("hidden");
    messageTel.innerText = errorMess.phoneEr;
    inputTypeTel.classList.add("error");
  } else {
    messageTel.classList.add("hidden");
  }

  //Password confirmation
  if (passwordConfirm.value !== password.value) {
    // errorLocal = true;
    error = true;
    messagePas.innerText = errorMess.passwEr;
    messagePas.classList.remove("hidden");
    password.classList.add("error");
    passwordConfirm.classList.add("error");
  } else {
    messagePas.innerText = "";
    messagePas.classList.add("hidden");
  }

  if (error) {
    message.innerText = errorMess.fieldsEr;
    console.log(error);
  } else {
    messageTel.innerText = "";
    messageName.innerText = "";
    message.innerText = "";
    const formData = new FormData(form);
    message.innerText = errorMess.successEr;
    setTimeout(() => {
      message.innerText = "";
      form.reset();
    }, 3000);
  }
};
