class Dropdown {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.items = options.items;
    this.element.querySelector(".dropdown__label").innerText =
      this.items[0].label;
    console.log(this.element);
    this.element.addEventListener("click", (event) => {
      if (event.target.classList.contains("dropdown__label")) {
        if (this.element.classList.contains("open")) {
          this.close();
        } else {
          this.open();
        }
      }
    });
  }
  open() {
    this.element.classList.add("open");
  }
  close() {
    this.element.classList.remove("open");
  }
}
const dropdown = new Dropdown("#dropdown", {
  items: [
    { label: "Москва", id: "spb" },
    { label: "Киев", id: "kiev" },
    { label: "Одесса", id: "od" },
    { label: "Николаев", id: "nik" },
    { label: "Питер", id: "pt" },
    { label: "Ney York", id: "new" },
  ],
});
