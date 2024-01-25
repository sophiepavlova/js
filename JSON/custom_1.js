async function fetchData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// const url = "https://blog.newgrowthpress.com/wp-json/wp/v2/posts?per_page=5";

// fetchData(url).then((data) => {
//   const html = data.map((item) => `<li>${item.author_info.display_name}</li>`);
//   document
//     .querySelector(".list")
//     .insertAdjacentHTML("afterbegin", html.join(""));
// });

const url = "https://blog.newgrowthpress.com/wp-json/wp/v2/posts?per_page=7";

fetchData(url).then((data) => {
  const html = data.map((item) => `<li>${item.excerpt.rendered}</li><br>`);
  document
    .querySelector(".list")
    .insertAdjacentHTML("afterbegin", html.join(""));
});
