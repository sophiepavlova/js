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

const submit = document.querySelector(".submit");
const spinner = document.querySelector(".spinner-container");

let error = false;

//----------------- ERROR MESSAGES
const errorMess = {
  // emptyEr: "Please, fill out the field",
  // nameEr: "A name should have at least 8 symbols",
  nameEr: "write 8 or more symbols, use only latin letters, numbers and _",
  emailEr: "Provide a valid email address",
  phoneEr: "Please write 10 digit number",
  passwEr0: "Password should be 8 symbols or more",
  passwEr2:
    "Password should have at least 1 upper, 1 lower-case letter and 1 number",
  passwEr: "Passwords do not match",

  fieldsEr: "Please fill out all fields",
  successEr: "The form is sent",
};

//-------------TOOLTIP ON HOVER/KEYUP
//on hover - tiptool appears and disappears

// keyup("#name");
// onhover("#tel");
// onhover("#email");
// keyup("#password");
// // onhover("#confirm");

// function keyup(id) {
//   document.querySelector(id).addEventListener("mouseenter", function (event) {
//     // console.log("hovering!");
//     // console.log(event.target.nextElementSibling);
//     // console.log(event.target.nextSibling.classList);
//     event.target.nextElementSibling.classList.remove("hidden");
//   });

//   document.querySelector(id).addEventListener("mouseout", (event) => {
//     event.target.nextElementSibling.classList.add("hidden");
//   });
// }

//-------------- FOR PASSWORD TOGGLE FEAURE

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

//-------------FUNCTIONS TO VALIDATE THE INPUT WITH REGEX

const isValidUsername = (nameLog) => {
  const us = /[A-Za-z][A-Za-z0-9_]{7,30}$/;
  console.log(us.test(String(nameLog)));
  return us.test(String(nameLog)); //true or false
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
//-------------FUNCTIONS TO SHOW AND TO HIDE THE MESSAGE
function show(messageType, errorMessageType, element) {
  messageType.classList.remove("hidden");
  messageType.innerText = errorMessageType;
  element.classList.add("error");
  element.classList.add("colorErrBord");
  // element.classList.add("colorErr");
}

function hide(messageType, element) {
  messageType.classList.add("hidden");
  element.classList.remove("error"); //???
  element.classList.remove("colorErrBord"); //???
}

// ---------------FUNCTIONS TO VALIDATE FIELDS

//1.NAME INPUT

const nameValid = function () {
  if (/*nameLog.value != "" &&*/ !isValidUsername(nameLog.value)) {
    error = true;
    console.log("name sucks");
    show(messageName, errorMess.nameEr, nameLog);
  } else {
    hide(messageName, nameLog);
    console.log("name is ok");
    error = false; // Can't do that - the form is sent immediately
  }
  // return error;
};

nameLog.addEventListener("keyup", function () {
  nameValid();
  // console.log("HI!");
  if (!error) {
    nameLog.classList.remove("error");
  }
  // return error;
});

//2.PHONE INPUT

//2.1--------------PHONE MASK
let im = new Inputmask("+1 (999) 999-99-99"); //\d\d\d\d\d\d\d\d\d\d
im.mask(inputTypeTel);
let phone;

function unmaskedPhone() {
  phone = inputTypeTel.inputmask.unmaskedvalue();
  console.log(phone);
  return phone.length === 10;
}
phone = inputTypeTel.inputmask.unmaskedvalue();

//2.2--------------PHONE FUNCTION

inputTypeTel.addEventListener("keyup", function () {
  phoneValid();
  // console.log(phone.length);
});
const phoneValid = function () {
  unmaskedPhone();
  if (/*inputTypeTel.value != "" && */ phone.length < 10) {
    console.log(inputTypeTel.value);
    console.log(phone.length);
    error = true;
    show(messageTel, errorMess.phoneEr, inputTypeTel);
  } else {
    hide(messageTel, inputTypeTel);
    error = false;
  }
  // return error;
};

//3.EMAIL INPUT
email.addEventListener("keyup", function () {
  emailValid();
});

const emailValid = function () {
  if (/*email.value != "" && */ !isValidEmail(email.value)) {
    error = true;
    show(messageEmail, errorMess.emailEr, email);
  } else {
    hide(messageEmail, email);
    error = false;
  }
  // return error;
};

//4.PASSWORD INPUT
password.addEventListener("keyup", function () {
  passValid();
});
const passValid = function () {
  if (/*password.value != "" && */ password.value.length < 8) {
    error = true;
    show(messagePas0, errorMess.passwEr0, password);
  } else if (password.value != "" && !isValidPassword(password.value)) {
    error = true;
    show(messagePas0, errorMess.passwEr2, password);
  } else {
    hide(messagePas0, password);
    error = false;
  }
  // return error;
};

//5.PASSWORD CONFIRMATION
passwordConfirm.addEventListener("keyup", function () {
  passConfValid();
});
const passConfValid = function () {
  if (
    /*passwordConfirm.value != "" &&*/ passwordConfirm.value !== password.value
  ) {
    error = true;
    passwordConfirm.classList.add("error");
    show(messagePas, errorMess.passwEr, passwordConfirm);
    // , password
  } else {
    messagePas.innerText = "";
    hide(messagePas, passwordConfirm);
    error = false;
  }
  // return error;
};

//--- CALLING FUNCTIONS FOR VALIDATION
// nameValid();
// emailValid();
// phoneValid();
// passValid();
// passConfValid();

//---------------ONSUBMIT

form.onsubmit = function (event) {
  event.preventDefault();
  // phone = inputTypeTel.inputmask.unmaskedvalue();
  // let error = false;

  for (const item of inputs) {
    if (item.value === "") {
      error = true;
      item.classList.add("error");
    } /*else {
      item.classList.remove("error");
    }*/
  }
  //--------FINAL CODE

  if (error) {
    message.innerText = errorMess.fieldsEr;
    message.classList.remove("colorSuccess");
    message.classList.add("colorErr");
  } else {
    submit.setAttribute("disabled", "");
    spinner.classList.remove("hidden1");

    let formData = new FormData(event.target);
    // formData.append("gender", "female");
    console.log(...formData);

    message.innerText = "";
    message.classList.remove("colorErr");
    message.classList.add("colorSuccess");
    // let formData = new FormData(form);
    // console.log(formData);
    message.innerText = errorMess.successEr;
    setTimeout(() => {
      message.innerText = "";
      form.reset();
      submit.removeAttribute("disabled");
      spinner.classList.add("hidden1");
    }, 3000);
  }
};

/* ПРОБЛЕМА

Поправила все мелочи - сломалась главная функциональность. Теперь форма отправляется, если поля не пустые

*/
