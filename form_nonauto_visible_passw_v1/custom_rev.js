const inputs = document.querySelectorAll(".checked");
const form = document.querySelector("form");
const message = document.querySelector("#message");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm");

const messageName = document.querySelector("#message_name");
const nameLog = document.querySelector("#name");
const messageTel = document.querySelector("#message_tel");
const messagePas = document.querySelector("#message_pass");

let inputTypeTel = document.querySelector(".input-tel");

const errorMess = {
  nameEr: "The name should be Longer than 9 symbols",
  phoneEr: "Please write 10 digit number",
  passwEr: "Пароли нe совпадают",
  fieldsEr: "Пожалуйста, заполните все поля",
  successEr: "Форма успешно отправлена",
};

console.log(inputTypeTel);
console.log(password.value);

let im = new Inputmask("+1 (999) 999-99-99"); //\d\d\d\d\d\d\d\d\d\d
im.mask(inputTypeTel);
let phone;

function unmaskedPhone() {
  console.log(phone);
  phone = inputTypeTel.inputmask.unmaskedvalue();
  return phone.length === 10;
}

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
  let errorLocal = false;

  for (const item of inputs) {
    if (item.value === "") {
      error = true;
      item.classList.add("error");
    } else {
      item.classList.remove("error");
    }
  }
  //Name input

  if (nameLog.value != "" && nameLog.value.length < 10) {
    console.log(typeof nameLog.value.length);
    // errorLocal = true;
    error = true;
    // console.log("The name should be Longer than 9 symbols");
    console.log(errorMess.nameEr);
    messageName.classList.remove("hidden");
    // messageName.innerText = "Your name should be longer than 9 symbols";
    messageName.innerText = errorMess.nameEr;
    nameLog.classList.add("error");
  } else {
    messageName.classList.add("hidden");
    // nameLog.classList.remove("error");
    // errorLocal = false;
    error = false;
  }

  //Phone input
  if (inputTypeTel.value != "" && phone.length < 10) {
    // errorLocal = true;
    error = true;
    console.log("The phone is too short");
    messageTel.classList.remove("hidden");
    // messageTel.innerText = "Please write 10 digit number";
    messageTel.innerText = errorMess.phoneEr;
    console.log(messageTel);
    inputTypeTel.classList.add("error");
  } else {
    messageTel.classList.add("hidden");
    // errorLocal = false;
    error = false;
    // inputTypeTel.classList.remove("error");
  }

  //Password confirmation
  if (passwordConfirm.value !== password.value) {
    // errorLocal = true;
    error = true;
    console.log("passwords are not matching");
    console.log(`The password is: ${password.value}`);
    console.log(`The confirmation is: ${passwordConfirm.value}`);
    // messagePas.innerText = "Пароли нe совпадают";
    messagePas.innerText = errorMess.passwEr;
    messagePas.classList.remove("hidden");
    password.classList.add("error");
    passwordConfirm.classList.add("error");
  } else {
    // passwordConfirm.classList.remove("error");
    messagePas.innerText = "";
    messagePas.classList.add("hidden");
  }

  if (error) {
    // message.innerText = "Пожалуйста, заполните все поля.";
    message.innerText = errorMess.fieldsEr;
  } else {
    messageTel.innerText = "";
    messageName.innerText = "";
    message.innerText = "";
    const formData = new FormData(form);
    // message.innerText = "Форма успешно отправлена";
    message.innerText = errorMess.successEr;
    console.log(...formData);
    setTimeout(() => {
      message.innerText = "";
      form.reset();
    }, 3000);
  }
};
