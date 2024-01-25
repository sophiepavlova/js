class Comment {
  constructor(text) {
    this.text = text;
    this.quantityText = 0;
  }
  iterationComment() {
    this.quantityText += 1;
  }
  static mergeString(first, second) {
    return `${first}${second}`;
  }
}

const firstCommnet = new Comment("Lorem Ipsem");

console.log(firstCommnet);
firstCommnet.iterationComment();
console.log(firstCommnet);
console.log(firstCommnet instanceof Object);

firstCommnet.hasOwnProperty("text");

console.log(Comment.mergeString("Hello,", " World!"));

class NewArray extends Array {
  sum() {
    return this.reduce((a, b) => a + b);
  }
}

const arr1 = new NewArray(1, 2, 3);
// arr1.sum();
console.log(arr1.sum());
console.log(arr1);
