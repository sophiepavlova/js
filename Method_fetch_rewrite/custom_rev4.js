//Fetch method

const ul = document.querySelector("#list_users");

document.querySelector("#btn").addEventListener("click", load);

const load = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
};

async function testFunc() {}
const testFunc1 = async () => "Success";
const testFunc2 = async () => {
  throw new Error("There was an error!");
};

testFunc1().then((data) => console.log(data));
testFunc2().catch((error) => console.log(error));
