const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const headerContacts = document.querySelector(".header__contacts");
const logo = document.querySelector(".nav-branding");
const navSocials = document.querySelector(".nav-socials");
const links = document.querySelectorAll(".nav-link");
const contactLinks = document.querySelectorAll(".iconnav_default");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerContacts.classList.toggle("active");
  navSocials.classList.toggle("active");
  logo.classList.toggle("hide");
  //   logo.href = "";
});
links.forEach((element) => {
  element.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    headerContacts.classList.remove("active");
    navSocials.classList.remove("active");
    logo.classList.remove("hide");
  });
});
contactLinks.forEach((element) => {
  element.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    headerContacts.classList.remove("active");
    navSocials.classList.remove("active");
    logo.classList.remove("hide");
  });
});
