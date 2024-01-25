// function sum(a, b) {
//   return a + b;
// }
// function stepen(a){
//     return a**3;
// }

// const sum = (a, b) => {
//   return a + b;
// };

// const stepen = (a) => {
//   return a ** 3;
// };
const sum = (a, b) => a + b;
// const stepen = (a) => a ** 3;
const stepen = (a) => a ** 3; // if there is only one argument we can amiss the ()

console.log(sum(5, 6), stepen(10));

function log() {
  console.log(this);
}

const log1 = () => console.log(this);

const person = {
  name: "Sophie",
  age: 20,
  // log:log,
  log,
  log1,
  //   log2: function () {
  //     const self = this;
  //     setTimeout(function () {
  //       console.log(self.name);
  //     }, 1000);
  //   },
  log3: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
  log2: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};
// person.log1();
person.log2();
person.log3();
