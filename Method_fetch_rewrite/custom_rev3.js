//Fetch method

const ul = document.querySelector("#list_users");

document.querySelector("#btn").addEventListener("click", function () {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const html = data.map((cur) => {
        return `<li>${cur.name}</li>`;
      });
      console.log(html);
      ul.insertAdjacentHTML("afterbegin", html.join(" "));
    })
    .catch(function (error) {
      console.log(error);
    });
});

// const getData = (url) => {
//   new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error));
//   });
// };

// getData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// getData("https://jsonplaceholder.typicode.com/todos/10").then((data) =>
//   console.log(data)
// );

// getData("https://jsonplaceholder.typicode.com/photos")
//   .then((data) => console.log(data))
//   .catch(function (error) {
//     console.log(error);
//   });

const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );

getData("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

getData("https://jsonplaceholder.typicode.com/todos/10")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

getData("https://jsonplaceholder.typicode.com/photos/20")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
