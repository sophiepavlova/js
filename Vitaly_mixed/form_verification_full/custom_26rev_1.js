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

//on hover - tiptool appears and disappears

// keyup("#name");
// onhover("#tel");
// onhover("#email");
keyup("#password");
// onhover("#confirm");

function keyup(id) {
  document.querySelector(id).addEventListener("mouseenter", function (event) {
    // console.log("hovering!");
    // console.log(event.target.nextElementSibling);
    // console.log(event.target.nextSibling.classList);
    event.target.nextElementSibling.classList.remove("hidden");
  });

  document.querySelector(id).addEventListener("mouseout", (event) => {
    event.target.nextElementSibling.classList.add("hidden");
  });
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
//Functions to show and to hide the message
function show(messageType, errorMessageType, element) {
  messageType.classList.remove("hidden");
  messageType.innerText = errorMessageType;
  element.classList.add("error");
}

function hide(messageType) {
  messageType.classList.add("hidden");
}

// nameLog.addEventListener("keyup", function () {
//   if (nameLog.value != "" && nameLog.value.length < 8) {
//     error = true;
//     show(messageName, errorMess.nameEr, nameLog);
//   } else if (nameLog.value != "" && !isValidUsername(nameLog.value)) {
//     error = true;
//     show(messageName, errorMess.nameEr1, nameLog);
//   } else {
//     hide(messageName);
//   }
// });

// const nameValid = function () {
//   if (nameLog.value != "" && nameLog.value.length < 8) {
//     error = true;
//     show(messageName, errorMess.nameEr, nameLog);
//   } else if (nameLog.value != "" && !isValidUsername(nameLog.value)) {
//     error = true;
//     show(messageName, errorMess.nameEr1, nameLog);
//   } else {
//     hide(messageName);
//   }
//   // return error;
// };

//ONSUBMIT

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

  const nameValid = function () {
    if (nameLog.value != "" && nameLog.value.length < 8) {
      error = true;
      show(messageName, errorMess.nameEr, nameLog);
    } else if (nameLog.value != "" && !isValidUsername(nameLog.value)) {
      error = true;
      show(messageName, errorMess.nameEr1, nameLog);
    } else {
      hide(messageName);
      // error = false; // Can't do that - the form is sent immediately
    }
    return error;
  };

  //BUG - does not work - because the main event has not happened!
  nameLog.addEventListener("keyup", function () {
    nameValid();
    console.log("HI!");
    if (!nameValid()) {
      nameLog.classList.remove("error");
    }
  });

  //Email input
  const emailValid = function () {
    if (email.value != "" && !isValidEmail(email.value)) {
      error = true;
      show(messageEmail, errorMess.emailEr, email);
    } else {
      hide(messageEmail);
    }
    return error;
  };
  //Phone input
  const phoneValid = function () {
    if (inputTypeTel.value != "" && phone.length < 10) {
      error = true;
      show(messageTel, errorMess.phoneEr, inputTypeTel);
    } else {
      hide(messageTel);
    }
    return error;
  };

  //Password input
  const passValid = function () {
    if (password.value != "" && password.value.length < 8) {
      error = true;
      show(messagePas0, errorMess.passwEr0, password);
    } else if (password.value != "" && !isValidPassword(password.value)) {
      error = true;
      show(messagePas0, errorMess.passwEr2, password);
    } else {
      hide(messagePas0);
    }
    return error;
  };

  //Password confirmation
  const passConfValid = function () {
    if (
      passwordConfirm.value != "" &&
      passwordConfirm.value !== password.value
    ) {
      error = true;
      passwordConfirm.classList.add("error");
      show(messagePas, errorMess.passwEr, passwordConfirm);
      // , password
    } else {
      messagePas.innerText = "";
      hide(messagePas);
    }
    return error;
  };

  //---Functions for validation
  nameValid();
  emailValid();
  phoneValid();
  passValid();
  passConfValid();

  //Final code

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

    // from the form-sample project

    // let statusMessage = document.createElement("div");
    // statusMessage.classList.add("status");
    // event.target.appendChild(statusMessage);

    // const ajaxSend = async (formData) => {
    //   document.querySelector(".status").innerHTML = message.loading;
    //   const response = await fetch("mail3.php", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (!response.ok) {
    //     throw new Error(
    //       `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
    //     );
    //   }
    //   //console.log(response.text())
    //   return await response.text();
    // };

    // ajaxSend(formData)
    //   .then((response) => {
    //     statusMessage.innerHTML = response;
    //   })
    //   .catch((err) => {
    //     statusMessage.innerHTML = message.failed;
    //     console.error(err);
    //   })
    //   .finally(() => {
    //     event.target.reset(); // очищаем поля формы
    //     setTimeout(() => {
    //       statusMessage.remove(); // удаляем статус
    //     }, 5000);
    //   });
  }
};

//BUGs

///Надо доработать:

//1. Tabs implement;
//2. Может, сразу и sing-up и log-in сделать

//3. Текст сообщений улучшить
//5. Таки-сделать сообщения под незаполненнми полями "This field should be filled" or something like that.

//4. Сделать красивее:
//4.1 пусть это будет модальное окно, вызываемое при нажатии на иконку login
//4.2 шрифты подобратьб и размеры
//4.3 цвета
//4.5 заголовки центрировать, и все остальное
//4.6 сообщения не должны выдлезать

//ДОРАБОТАНО

//1. Все должно быть на английском, у меня сейчас смесь языков
//2. Почему-то нельзя начать имя с цифры
//Hard to implement
//3. Сейчас во всех формах есть упрощенные варианты логина или sign-up. например, через google или фейсбук. Как это сделать? - It should be done with the server and back end, can not be done willy-nilly.
//4. сделать шапку-заголовок
//5. Сообщение об успешной отправке должно быть или черным или зеленым, но не красным
//6. Сейчас, если отправить пустую форму, выдаются сразу все сообщения об ошибках под всеми полями. Может стоит их показывать только, если в полу действительно что-то делали? Или нормально, как подсказка? -- changed that.
//7. Уменьшить повторения одинаковых кусков в коде в if- else каждого элемента повторения идут. - доработала - фукнции show b hide внутри циклов
//8. learn how to make a triangular in css and create the tooltip
//9. remove the red frame around the password, if it is correct, but the confirm was wrong

//ВОПРОСЫ

//3. тут мне нравятся предложения в конце, особенно 6, 9 и 10 пункты

//ПРОБЛЕМЫ

//1. Подсказка двигает остальные поля, может, она должна просто сверху ложиться
// 2. Подсказка не должна появляться, когда поле верифицировано
// 3. Гигантская проблема с ппосказкой и паролями - она нарушает функцию ввключения/выключения видимости пароля, и сдвигает саму иконку-глаз.

//4. И не вышло с отправкой формы - я до этого даже не дошла. Сначала у меня не открывался локальный сервер, долго с этим боролась, а потом перестала отправляться та форма, которую я хотела взять за образец.
// 4.1 - Я попробовала-таки добавить код, но там море ошибок при отправке. Commented it out

// --------- Сделала
//1. сделала подсказку (но неудобно стало)
//2. Сделала, чтобы при подтверждении пароля снималась красная обводка с основного пароля
//3. Сделала кнопку отправки неактивной, пока отправляется форма
// 4. Сделала спиннер при отправке формы
// -----
// 1. Вынесла каждую проверку в отдельную функцию (но как вы советовали не получилось - если поставить у всех else - error = false; то немедленно отправляется форма)

///___Вопросы__
// 1. Так как проверка форм у меня находится внутри функции form.onsubmit, если я пытаюсь сделать еще событие на keyup, оно не работает. А если я выношу эту проверку за пределы form.onsubmit - сбивается сама валидация, и переменные не входят в скоупю
