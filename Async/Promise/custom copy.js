console.log("Хочу получить список пользователей");
console.log("...");

//Идея промисов заключается в том, что мы создаем какой-то объект, называемый промис, и оборачиваем в него какой-то ассинхронный код.

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Сервер: Запрашиваю список пользователей в БД");
    console.log("...");
    resolve();
  }, 1000);
});
//Функция resolve() вызывается только тогда, когда мы завершили какую-то ассинхронную операцию, а функция reject() сигнализирует о том, что произошла какая-то ошибка.
promise.then(function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("БД: формирую список пользователей и отдаю их серверу");
      console.log("...");
      resolve();
    }, 500);
  });
}).then;
