function summ(a, b) {
  console.log(a + b);
  return a + b;
}
summ(10, 50);

function stepCub(a) {
  console.log(a ** 3);
  return a ** 3;
}
stepCub(4, 3);

const summ1 = (a, b) => {
  console.log(a + b);
  return a + b;
};
summ1(9, 15);

const step1 = (a, b) => {
  console.log(a ** b);
  return a ** b;
};
step1(7, 2);

const summ2 = (a, b) => console.log(a + b);
summ2(8, 4);

const step2 = (a) => console.log(a ** 3);
step2(100);

// Context in js -- this keyword

function log() {
  console.log(this);
}
const log1 = () => console.log(this);

// const person = {
//   name: "Sophie",
//   age: 22,
//   // log: log,
//   log,
//   log1,
//   log2: function () {
//     console.log(this);
//     const self = this;
//     setTimeout(function () {
//       console.log(this, self);
//       console.log(self.name);
//     }, 1000);
//   },
// };

// person.log2();

const personArr = {
  name: "Sophie",
  age: 22,
  // log: log,
  log,
  log1,
  //Способ 1 -- через введение переменной self=this

  // log2: function () {
  //       console.log(this);
  //       const self = this;
  //       setTimeout(function () {
  //         console.log(this, self);
  //         console.log(self.name);
  //       }, 1000);
  //     },
  //Способ 2 - через функцию стрелки
  log2: function () {
    console.log(this);

    setTimeout(() => {
      console.log(this);
      console.log(this.name);
    }, 1000);
  },
  //Способ 3 -- через метод bind
  // log2: function () {
  //   setTimeout(
  //     function () {
  //       console.log(this);
  //       console.log(this.name);
  //     }.bind(this),
  //     1000
  //   );
  // },
};

personArr.log2();
