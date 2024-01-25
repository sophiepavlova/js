const btnOrder = document.querySelector(".button-modal");
const fadeBlock = document.querySelector(".fade-block");
const iconClose = document.querySelector(".close");

const filterItemsArray = [...document.querySelectorAll(".filter-item")];
console.log(filterItemsArray);

const projectsItemArray = [...document.querySelectorAll(".projects-item")];
console.log(projectsItemArray);

// const hamburger = document.querySelector(".hamburger");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const body = document.querySelector(".body");
const allNav = document.querySelector(".all_nav");

const navSocialArray = [...document.querySelectorAll(".nav-social")];

const headerContacts = document.querySelector(".header__contacts");
const menuList = document.querySelector(".menu-list");
const logo = document.querySelector(".logo");

const navSocials = document.querySelector(".nav-socials");
const links = document.querySelectorAll(".nav-link");
const contactLinks = document.querySelectorAll(".iconnav_default");

const form = document.querySelector(".form");
const inputs = [...document.querySelectorAll(".input_field")];
const textArea = document.querySelector(".textarea");
const message = document.querySelector(".message");
const consentCheckbox = document.querySelector(".consent__checkbox");
const buttonForm = document.querySelector(".button_form");

// Burger

burger.addEventListener("click", function () {
  overlay.classList.toggle("open");
  allNav.classList.toggle("open");
  body.classList.toggle("lock");
});

// Hamburger

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("is-active");
//   headerContacts.classList.toggle("active");
//   menuList.classList.toggle("active");
//   logo.classList.toggle("hide-left");
//   navSocials.classList.toggle("active");
// });

links.forEach((element) => {
  element.addEventListener("click", function () {
    hamburger.classList.remove("active");
    headerContacts.classList.remove("active");
    menuList.classList.remove("active");
    navSocials.classList.remove("active");
    logo.classList.remove("hide-left");
  });
});
contactLinks.forEach((element) => {
  element.addEventListener("click", function () {
    hamburger.classList.remove("active");
    headerContacts.classList.remove("active");
    menuList.classList.remove("active");
    navSocials.classList.remove("active");
    logo.classList.remove("hide-left");
  });
});

//The filtering
// item.classList.remove("colored");

filterItemsArray.forEach((item) => {
  item.addEventListener("click", (event) => {
    for (element of filterItemsArray) {
      console.log("clicked!");
      if (element.classList.contains("colored")) {
        element.classList.remove("colored");
      }
    }
    //handle click
    console.log("hello!");
    let type = item.dataset.type;

    projectsItemArray.filter((item) => {
      item.classList.remove("gone");
      if (item.dataset.type !== type) {
        item.classList.add("gone");
      }
    });
    if (type == "all") {
      projectsItemArray.map((item) => {
        item.classList.remove("gone");
      });
    }
    item.classList.add("colored");
  });
});

// The Modal window

btnOrder.addEventListener("click", function () {
  console.log("It's me, I");
  fadeBlock.classList.add("translate");
  fadeBlock.classList.remove("hidden");
});

iconClose.addEventListener("click", function () {
  fadeBlock.classList.add("hidden");
  fadeBlock.classList.remove("translate");
});

// сделаем так, чтобы событие не доходило выше modal-window
fadeBlock.addEventListener("click", function () {
  fadeBlock.classList.add("hidden");
  fadeBlock.classList.remove("translate");
});
fadeBlock
  .querySelector(".modal-window")
  .addEventListener("click", function (e) {
    // e - объект, содержащий всю информацию по произошедшему событию
    e.stopPropagation(); // остановим событие клика на модальном окне modal-window
  });
// ___________________________________________________________

// Form

//---------------ONSUBMIT
console.log(inputs);
form.onsubmit = function (event) {
  event.preventDefault();

  for (const item of inputs) {
    console.log(item.value);
    if (item.value !== "") {
      // error = true;
      console.log("LLLL");
      message.classList.remove("hidden");
      // message.innerText = "Заполните все поля";
    }
  }

  let formData = new FormData(event.target);
  console.log(...formData);
  const aiaxSend = async (formData) => {
    const response = await fetch("mail3.php", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(
        `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
      );
    }
    return await response.text();
  };
  aiaxSend(formData)
    .then((response) => {
      message.innerHTML = response;
    })
    .catch((error) => {
      message.innerHTML = error;
      console.log(error);
    })
    .finally(() => {
      // submit.removeAttribute("disabled");
      // spinner.classList.add("hidden1");
      form.reset();
      setTimeout(() => {
        message.remove();
      }, 5000);
    });
};

// FORM

// var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modalWrap.style.display = "none";
//   }
// };

// modal.addEventListener("click", function () {
//   modal.classList.add("hidden");
// });

// modalData
//   .querySelector(".modal-window")
//   .addEventListener("click", function (e) {
//     // e - объект, содержащий всю информацию по произошедшему событию
//     e.stopPropagation(); // остановим событие клика на модальном окне modal-window
//   });

// Legacy code - from John's site

// var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

// var hamburgers = document.querySelectorAll(".hamburger");
// if (hamburgers.length > 0) {
//   forEach(hamburgers, function (hamburger) {
//     hamburger.addEventListener(
//       "click",
//       function () {
//         this.classList.toggle("is-active");
//         document.querySelector(".header-nav").classList.toggle("open");
//       },
//       false
//     );
//   });
// }
