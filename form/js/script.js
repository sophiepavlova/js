const form = document.querySelector(".form");
const inputTypeTel = document.querySelector(".input-tel");
const fileAttach = document.querySelector(".input-file");
let btn = document.querySelector(".button");

// const im = new Inputmask("+380 (99) 999-99-99");//ukranian
const im = new Inputmask("+1 (999) 999-99-99");
im.mask(inputTypeTel);

fileAttach.addEventListener("change", () => {
  uploadFile(fileAttach.files[0]);
});
// btn.disabled = true;
console.log("hello?");
const uploadFile = (fileLoaded) => {
  //   console.log(fileLoaded);
  if (
    !["image/jpeg", "image/png", "image/gif", "image/svg+xml"].includes(
      fileLoaded.type
    )
  ) {
    alert("Разрешены только изображения.");
    return;
  }
  //   проверим размер файла (<2 Мб)
  if (fileLoaded.size > 2 * 1024 * 1024) {
    alert("Файл должен быть менее 2 МБ.");
    return;
  }
};

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
  ]);
