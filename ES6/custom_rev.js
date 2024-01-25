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
const firstComment = new Comment("Lorem Ibsem");

console.log(firstComment);
firstComment.iterationComment();
console.log(firstComment);
// console.log(firstComment instanceof Comment); //true
// console.log(firstComment instanceof Object); //true
console.log(firstComment.hasOwnProperty("text"));
console.log(firstComment);
firstComment.hasOwnProperty("text");

console.log(Comment.mergeString("Hello, ", "World")); //Hello, World

class NewArray extends Array {
  sum() {
    return this.reduce((a, b) => a + b);
  }
}

const arr1 = new NewArray(1, 2, 3);
const arr2 = new NewArray(10, 20);
console.log(arr1.sum()); //6
console.log(arr2.sum()); //30
