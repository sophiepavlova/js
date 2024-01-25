//задача 39
const myCities = ["London", "New York", "Singapore", "Vancouver"];

const cityInfo = function (city, index) {
  console.log(`${city} is at the index ${index} in the myCities array`);
};

myCities.forEach(function (city, index) {
  cityInfo(city, index);
});
//Problem from Vitalii
//Дополни код функции createArrayOfNumbers(min,max) так, чтобы она возвращала массив всех целых чисел от значения min   до max.

//Understanding of the problem
//when the numbers are given randomly can min be > than max? No, let assume that min<max always

//Breaking the problem into sub-problems
//we need to establish min and max,
//in the cycle for we need to compare min and max, if min<max, we use push method on our arrayand put the min+1 there and then make min= item[i]
// we need to do it inside if (min<max)
//we need to test on our array with all the given numbers and my own

// let min;
// let max;
// let arrayOfNumbers = [];
// function createArrayOfNumbers(min, max) {
//   while (min <= max) {
//     arrayOfNumbers.push(min++);
//   }
// }
// createArrayOfNumbers(-2, 14);
// console.log(arrayOfNumbers);

// let min;
// let max;
// let arrayOfNumbers = [min];
// console.log(arrayOfNumbers);
// function createArrayOfNumbers(min, max) {
//   while (min <= max) {
//     min = min + 1;
//     arrayOfNumbers.push(min);
//   }
// }
// createArrayOfNumbers(1, 5);
// console.log(arrayOfNumbers);

//Homework 1
console.log("Homework");

let min;
let max;
let arrayOfNumbers = [];

function createArrayOfNumbers(min, max) {
  while (min <= max) {
    arrayOfNumbers.push(min++);
    console.log(min);
  }
}
createArrayOfNumbers(1, 3);
console.log(arrayOfNumbers);
//_________________________________________________
//the ++x vs x++ increment operator
let x = 3;
let y = ++x;
console.log(`y=++x   x:${x} and y:${y}`); //result x:4 and y:4

let b = 3;
let c = b++;
console.log(`c=b++   b:${b} and c:${c}`); // result  b:4 and c:3

//Testing what ++x and x++ do
let arrayOfNumbers2 = [];
function plusPlus(d, f) {
  arrayOfNumbers2.push(++d, f++);
}
plusPlus(200, 90);
console.log(arrayOfNumbers2); //result [201, 90]

let arrayOfNumbers3 = [];
function plusPlusVar(d, f) {
  // arrayOfNumbers3.push(d, d++, d, d++, d, d++, d, f);// cl result [200, 200, 201, 201, 202, 202, 203, 90]
  // arrayOfNumbers3.push(f, f++, f++, f++, f++);//cl is  [90, 90, 91, 92, 93]
  arrayOfNumbers3.push(f, ++f, ++f, ++f, ++f); //cl is  [90, 91, 92, 93, 94]
}
plusPlusVar(200, 90);
console.log(arrayOfNumbers3);
