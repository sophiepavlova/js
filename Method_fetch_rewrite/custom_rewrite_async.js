//Fetch method

const ul = document.querySelector("#list_users");
let dataAr = [];

// document.querySelector("#btn").addEventListener("click", function () {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   fetch(url)
//     .then(function (response) {
//       console.log(
//         response
//       ); /*Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}*/
//       return response.json();
//     })
//     .then(function (data) {
//       const html = data.map((cur) => {
//         return `<li>${cur.name}</li>`;
//       });
//       console.log(html);
//       ul.insertAdjacentHTML("afterbegin", html.join(" "));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

//Another way to do it, with calling the external function

const load = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  const data = await response.json();
  console.log(data);
  const html = data.map((cur) => {
    return `<li>${cur.name}</li>`;
  });
  console.log(html);
  ul.insertAdjacentHTML("afterbegin", html.join(" "));
};
document.querySelector("#btn").addEventListener("click", load);

// async function test() {}

// const test2 = async () => "Success";
// const test3 = async () => {
//   throw new Error("Theere was an error!");
// };
// test3().catch((error) => console.log(error));

// test2().then((data) => console.log(data)); //Success
