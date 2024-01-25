const inputs = document.querySelectorAll(".checked");
const form = document.querySelector("form");
const message = document.querySelector("#message");

const password = document.querySelector("#password");
const messagePas0 = document.querySelector("#message_pass0");

const passwordConfirm = document.querySelector("#confirm");
const messagePas = document.querySelector("#message_pass");

const email = document.querySelector("#email");
const messageEmail = document.querySelector("#message_email");

const nameLog = document.querySelector("#name");
const messageName = document.querySelector("#message_name");

let inputTypeTel = document.querySelector(".input-tel");
const messageTel = document.querySelector("#message_tel");

const errorMess = {
  emptyEr: "Please, fill out the field",

  nameEr: "A name should have at least 8 symbols",
  nameEr1: "Use only latin letters, numbers and _",
  emailEr: "Provide a valid email address",
  phoneEr: "Please write 10 digit number",
  passwEr0: "Password should be 8 symbols or more",
  passwEr2:
    "Password should have at least 1 upper, 1 lower-case letter and 1 number",
  passwEr: "Passwords do not match",

  fieldsEr: "Please fill out all fields",
  successEr: "The form is sent",
};

let im = new Inputmask("+1 (999) 999-99-99"); //\d\d\d\d\d\d\d\d\d\d
im.mask(inputTypeTel);
let phone;

function unmaskedPhone() {
  phone = inputTypeTel.inputmask.unmaskedvalue();
  return phone.length === 10;
}

// for password toggle feaure

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

//Functions to validate the input with regex

const isValidUsername = (nameLog) => {
  const us = /[A-Za-z][A-Za-z0-9_]{7,30}$/;
  return us.test(String(nameLog));
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  const pa = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,30}$/;
  return pa.test(String(password));
};

//Onsubmit

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

  if (nameLog.value != "" && nameLog.value.length < 8) {
    error = true;
    messageName.classList.remove("hidden");
    messageName.innerText = errorMess.nameEr;
    nameLog.classList.add("error");
  } else if (nameLog.value != "" && !isValidUsername(nameLog.value)) {
    error = true;
    messageName.classList.remove("hidden");
    messageName.innerText = errorMess.nameEr1;
    nameLog.classList.add("error");
  } else {
    messageName.classList.add("hidden");
  }

  //Email input

  if (email.value != "" && !isValidEmail(email.value)) {
    error = true;
    messageEmail.classList.remove("hidden");
    messageEmail.innerText = errorMess.emailEr;
    email.classList.add("error");
  } else {
    messageEmail.classList.add("hidden");
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

  //Password input

  if (password.value != "" && password.value.length < 8) {
    error = true;
    messagePas0.classList.remove("hidden");
    messagePas0.innerText = errorMess.passwEr0;
    password.classList.add("error");
  } else if (password.value != "" && !isValidPassword(password.value)) {
    error = true;
    messagePas0.classList.remove("hidden");
    messagePas0.innerText = errorMess.passwEr2;
    password.classList.add("error");
  } else {
    messagePas0.classList.add("hidden");
  }

  //Password confirmation

  if (passwordConfirm.value !== password.value) {
    error = true;
    messagePas.innerText = errorMess.passwEr;
    messagePas.classList.remove("hidden");
    password.classList.add("error");
    passwordConfirm.classList.add("error");
  } else {
    messagePas.innerText = "";
    messagePas.classList.add("hidden");
  }

  //Final code

  if (error) {
    message.innerText = errorMess.fieldsEr;
    message.classList.remove("colorSuccess");
    message.classList.add("colorErr");
    // console.log(error);
  } else {
    messageTel.innerText = "";
    messageName.innerText = "";
    message.innerText = "";
    message.classList.remove("colorErr");
    message.classList.add("colorSuccess");
    const formData = new FormData(form);
    message.innerText = errorMess.successEr;
    setTimeout(() => {
      message.innerText = "";
      form.reset();
    }, 3000);
  }
};

//BUGs
//1. Tab не работает правильно, только ввод или кнопка отправить;

///---Нужно доработать:
//3. Текст сообщений улучшить
//4. Может быть как-то уменьшить повторения одинаковых кусков в коде, сделать его более DRY - в if- else каждого элемента повторения идут.
//5. Сделать красивее
//2. Может, сразу и sing-up и log-in сделать

//ДОРАБОТАНО
//1. Все должно быть на английском, у меня сейчас смесь языков
//2. Почему-то нельзя начать имя с цифры
//Hard to implement
//1. Сейчас во всех формах есть упрощенные варианты логина или sign-up. например, через google или фейсбук. Как это сделать? - It should be done with the server and back end, can not be done willy-nilly.
//3. сделать шапку-заголовок
//4. Сообщение об успешной отправке должно быть или черным или зеленым, но не красным
//5. Сейчас, если отправить пустую форму, выдаются сразу все сообщения об ошибках под всеми полями. Может стоит их показывать только, если в полу действительно что-то делали? Или нормально, как подсказка? -- changed that.

//---Вопросы
//1. Может, когда поле попадает в фокус сделать подсказку -tip или текстом под блоком? Чтобы он напрасно не набирал то, что заведомо не подойдет?
