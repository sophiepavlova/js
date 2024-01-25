const objTest = {
  firstName: "Sophie",
  books: {
    author: "King",
    title: "Shining",
  },
  age: [10, 21, 95, -11],
};

const str = JSON.stringify(objTest);
console.log(str);

const strUnpacked = JSON.parse(str);
console.log(strUnpacked);

document.querySelector("#btn").addEventListener("click", function () {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
