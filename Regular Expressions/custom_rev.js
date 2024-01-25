let str = "HellO World!";
let str2 =
  "All night my heart makes its way however it can over the rough ground of uncertainties, but only until night Meets and then is overwhelmed by morning, the light deepening, the wind easing and just waiting, as I too wait (and when have I ever been disappointed?) for redbird to sing.";

// console.log(str.search(/o/i));
// console.log(str.match(/O/gi));

console.log(str2.search(/M/i)); //i регистронезависимый шаблон
console.log(str2.search(/m/g)); //g global search
console.log(str2.search(/m/gi)); //10
console.log(str2.match(/M/gi)); //(5) ['m', 'm', 'M', 'm', 'm']

let testStr =
  "Вчера я открыл 7 сайтов: www.mysite.ru, www.super.mysite.ru, https://my-super-4an.ru, https://www.my-super-4an.ru, www.mysite.com, http://super-site.ru и Biggsite.RU но вообще, мне больше нравится домен в зоне .ru";

let pattern = /(https?:\/\/)?(www\.)?[a-z0-9-]{2,100}\.ru/g;
let result = testStr.match(pattern); //match() method creates an array based on all the sorted results!
console.log(result);

result.forEach((item) => {
  document.write(item + "<br>");
});
