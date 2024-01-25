const tabs = document.querySelector(".tabs-header");
tabs.addEventListener("click", fTabs);
function fTabs(event) {
  // console.log(event.target);
  if (event.target.classList.contains("tab-h")) {
    const dataTab = event.target.dataset.tab;
    console.log(dataTab);
    const tabH = document.querySelectorAll(".tab-h");
    // console.log(tabH);
    tabH.forEach(function (element, index, array) {
      // console.log(index, element, array);
      element.classList.remove("active");
    });
    // for (let i = 0; i < tabH.length; i++) {
    //   tabH[i].classList.remove("active");
    // }
    event.target.classList.add("active");
    const tabBody = document.querySelectorAll(".tab-b");
    for (let i = 0; i < tabBody.length; i++) {
      if (dataTab == i) {
        tabBody[i].classList.add("active");
      } else {
        tabBody[i].classList.remove("active");
      }
    }
  }
}
