// const objTest = {
//   author: "Rowling",
//   books: {
//     one: "Philosopher's stone",
//     two: "Chamber of Secrets",
//     three: "Prisoner of Azcaban",
//   },
//   characters: ["Harry", "Ron", "Hermione", "Luna"],
// };
// const str = JSON.stringify(objTest);
// console.log(str); //{"author":"Rowling","books":{"one":"Philosopher's stone","two":"Chamber of Secrets","three":"Prisoner of Azcaban"},"characters":["Harry","Ron","Hermione","Luna"]}
// const strUncoded = JSON.parse(str);
// console.log(strUncoded); //{author: 'Rowling', books: {…}, characters: Array(4)}

//Fetch method

const ul = document.querySelector("#list_users");
// let dataAr = [];

document.querySelector("#btn").addEventListener("click", function () {
  const url = "https://jsonplaceholder.typicode.com/users";
  let dataFetched = [];
  fetch(url)
    .then(function (response) {
      console.log(
        response
      ); /*Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}*/
      console.log(response.status); //200
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      dataFetched = data;
      console.log(dataFetched);
      return dataFetched;
    })
    .finally(function () {
      console.log("Finally! The last promise is done");
      //hw
      const dataUpd = dataFetched.map((cur) => {
        // return "Good data:" + cur;
        return `${cur.id}.  ${cur.name}, ${cur.username}. Address: ${cur.address.city} city; ${cur.address.street} street; geo: ${cur.address.geo.lat}& ${cur.address.geo.lng}; phone: ${cur.phone}; website: ${cur.website}; company: ${cur.company.name}`;
      });

      console.log(dataUpd);
      // console.log(cur);

      dataUpd.map((cur) => {
        // const str = String(cur);
        ul.insertAdjacentHTML("beforeend", `<li>${cur}</li><br>`);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

const p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success!");
  } else {
    reject("failed");
  }
});
console.log(p);

p.then((message) => {
  console.log("this is in the .then " + message); //this is in the .then success!
}).catch((message) => {
  console.log("this in inside of the .catch " + message);
});
