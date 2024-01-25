// import getValue from "./modules/function.js";
import getValue1 from "./modules/function.js";
const people = [
  {
    id: 1112,
    firstName: "Sophie",
    age: 25,
  },
  {
    id: 1113,
    firstName: "Mark",
    age: 26,
  },
];

console.log(getValue1(people, "id"));
console.log(getValue1(people, "age"));

// console.log(res);

// const res = [];
// for (let i = 0; i < people.length; i++) {
//   res.push(people[i].firstName);
// }

// for (const person of people) {
//   res.push(person.firstName);
// }
