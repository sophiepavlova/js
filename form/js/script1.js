const form = document.querySelector(".form");
const inputTypeTel = document.querySelector(".input-tel");
const fileAttach = document.querySelector(".input-file");
// const fileAttach = document.querySelectorAll(".input-file");
let btn = document.querySelector(".button");
// let isValid = true;

const message = {
  loading: "Отправка...",
  failed: "Форма не отправлена...",
};

// const selectedFiles = document.querySelectorAll(".input-file");

// const im = new Inputmask("+380 (99) 999-99-99");//ukranian
const im = new Inputmask("+1 (999) 999-99-99");
im.mask(inputTypeTel);

fileAttach.addEventListener("change", () => {
  uploadFile(fileAttach.files[0]);
});

// btn.disabled = true;
console.log("HI!!! OI_____");

const uploadFile = (fileLoaded) => {
  console.log(fileLoaded);
  console.log(fileAttach.value);

  //   проверим размер файла (<2 Мб)
  if (fileLoaded.size > 2 * 1024 * 1024) {
    alert("Файл должен быть менее 2 МБ.");
    // btn.disabled = true;
    return;
  }
};

// console.log(fileAttach.HTMLInputElement.files);
const validation = new JustValidate(form, {
  //   lockForm: true,
  //   tooltip: {
  //     position: "top",
  //   },
});

validation
  .addField(".input-name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите минимум 3 символа!",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Имя должно быть максимум 30 символов!",
    },
    {
      rule: "required",
      // value: true, // required = true
      errorMessage: "Введите имя!",
    },
  ])
  .addField(".input-mail", [
    {
      rule: "required",
      // value: true,
      errorMessage: "Email обязателен",
    },
    {
      rule: "email",
      // value: true, // это писать не обязательно
      errorMessage: "Введите корректный Email",
    },
  ])
  .addField(".input-tel", [
    {
      rule: "required",
      // value: true,
      errorMessage: "Введите номер телефона",
    },
    {
      rule: "function",
      validator: function () {
        const phone = inputTypeTel.inputmask.unmaskedvalue();
        console.log(phone);

        return phone.length === 10;
      },
      errorMessage: "Вы ввели слишком короткий номер телефона",
      // isValid=false
    },
  ])

  .onSuccess((event) => {
    let formData = new FormData(event.target);
    console.log(...formData);

    let statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    event.target.appendChild(statusMessage);

    const ajaxSend = async (formData) => {
      document.querySelector(".status").innerHTML = message.loading;
      const response = await fetch("mail3.php", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(
          `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
        );
      }
      //console.log(response.text())
      return await response.text();
    };

    ajaxSend(formData)
      .then((response) => {
        statusMessage.innerHTML = response;
      })
      .catch((err) => {
        statusMessage.innerHTML = message.failed;
        console.error(err);
      })
      .finally(() => {
        event.target.reset(); // очищаем поля формы
        setTimeout(() => {
          statusMessage.remove(); // удаляем статус
        }, 5000);
      });
  });
// .onFail(fields);

// Is valid
// if (isValid === true) {
//   btn.disabled = false;
// } else {
//   btn.disabled = true;
// }
// console.log(inputTypeTel.value);
