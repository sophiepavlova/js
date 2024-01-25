let str = "HellO World!";

// console.log(str.search(/o/gi));
// console.log(str.match(/O/gi));

let testStr =
  "Вчера я открыл 7 сайтов: www.mysite.ru, www.super.mysite.ru, https://my-super-4an.ru, https://www.my-super-4an.ru, www.mysite.com, http://super-site.ru и Biggsite.RU но вообще, мне больше нравится домен в зоне .ru";

let pattern = /(https?:\/\/)?(www\.)?[a-z0-9-]{2,100}\.ru/gi;
let result = testStr.match(pattern);
result.forEach((item) => {
  document.write(item + "<br>");
});
