class Dropdown {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    console.log(this.element);
    this.items = options.items;
    this.element.querySelector(".dropdown__label").innerText =
      this.items[0].label;
    this.element.addEventListener("click", (event) => {
      const drMenu = document.querySelector(".dropdown__menu");
      //   let h1 = "<h1>Testing</h1>";

      if (event.target.classList.contains("dropdown__label")) {
        if (this.element.classList.contains("open")) {
          this.close();
        } else {
          this.open();
          //   drMenu.insertAdjacentHTML("afterbegin", h1);
        }
      } else if (event.target.tagName.toLowerCase() === "li") {
        // console.log(event.target.tagName.toLowerCase());
      }
    });
    const itemsHtml = this.items
      .map((i) => {
        return `<li data-id=${i.id}>${i.label}</li>`;
      })
      .join("");

    console.log(itemsHtml);
    this.element
      .querySelector(".dropdown__menu")
      .insertAdjacentHTML("afterbegin", itemsHtml);

    console.log(this.items);
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
console.log(dropdown);
