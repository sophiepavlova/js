const filterItemsArray = [...document.querySelectorAll(".filter-item")];
console.log(filterItemsArray);

const projectsItemArray = [...document.querySelectorAll(".projects-item")];
console.log(projectsItemArray);

//The filtering

filterItemsArray.forEach((item) => {
  item.addEventListener("click", (event) => {
    //handle click
    console.log("hello!");
    let type = item.dataset.type;

    projectsItemArray.filter((item) => {
      item.classList.remove("gone");
      if (item.dataset.type !== type) {
        item.classList.add("gone");
      }
      //   BUG
      //   if (item.dataset.type == "all") {
      //     item.classList.remove("gone");
      //   }
    });
    if (type == "all") {
      projectsItemArray.map((item) => {
        item.classList.remove("gone");
      });
    }
  });
});

// const filtering = function (filters, fittered) {};
