const requestData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);

  const templates = data.map((car) => createCar(car));
  const html = templates.join(" ");
  document.querySelector(".list").innerHTML = html;
};

function createCar(car) {
  return ` 
		<div class="card">
			<div class="card-img">
				<img 
					src="${car.img}" 
					alt="${car.name}">
			</div>
			<h3>${car.name}</h3>
			<p>${car.price} $</p>
		</div>
	`;
}

requestData();

//How to get  data from wordpress sites

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// const url = "https://blog.newgrowthpress.com/wp-json/wp/v2/posts?per_page=5";

// fetchData(url).then((data) => {
//   const html = data.map((item) => `<li>${item.author_info.display_name}</li>`);
//   document
//     .querySelector("#list")
//     .insertAdjacentHTML("afterbegin", html.join(""));
// });
