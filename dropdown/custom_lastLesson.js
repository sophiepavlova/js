class Dropdown {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    console.log(this.element);
    this.items = options.items;
    this.element.querySelector(".dropdown__label").innerText =
      this.items[0].label;
    this.element.addEventListener("click", (event) => {
      const drMenu = document.querySelector(".dropdown__menu");
      let h1 = "<h1>Testing</h1>";

      if (event.target.classList.contains("dropdown__label")) {
        if (this.element.classList.contains("open")) {
          this.close();
        } else {
          this.open();
          // drMenu.insertAdjacentHTML("afterbegin", h1);
        }
        // } else if (event.target.tagName.toLowerCase() === "li") {
        //   this.element.querySelector(".dropdown__label").innerText =
        //     event.target.innerText;
      } else if (event.target.tagName.toLowerCase() === "li") {
        this.select(event.target.dataset.id);
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
  select(id) {
    // console.log(id);
    const item = this.items.find((i) => i.id === id);
    console.log(item);
    this.element.querySelector(".dropdown__label").textContent = item.label;
    this.close();
  }
}
const body = document.body;
body.onclick = function (event) {
  // console.log(event.target);
  if (event.target === document.querySelector(".container")) {
    // alert("Container!");
  }
};

const dropdown = new Dropdown("#dropdown", {
  items: [
    { label: "Ванкувер", id: "vnc" },
    { label: "Киев", id: "kiev" },
    { label: "Одесса", id: "od" },
    { label: "Николаев", id: "nik" },
    { label: "Питер", id: "pt" },
    { label: "Нью-Йорк", id: "new" },
  ],
});
console.log(dropdown);

//Доработать?
//1. меню должно закрываться, когда нажмешь снаружи
//2. Город должен пропадать из списка, когда он становится первым?
