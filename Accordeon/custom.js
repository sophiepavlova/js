document.addEventListener("DOMContentLoaded", () => {
  const accordeon = document.querySelectorAll(".accordeon");
  accordeon.forEach(function (element, index, array) {
    // console.log(index, element, array);
    element.addEventListener("click", function (event) {
      //   console.log(event.currentTarget);
      const self = event.currentTarget;
      const control = self.querySelector(".accordeon__control");
      const content = self.querySelector(".accordeon__content");
      //   console.log(control, content);
      self.classList.toggle("open");
      if (self.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
