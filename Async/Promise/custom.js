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
promise
  .then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const users = [
          { userId: "id1", name: "John" },
          { userId: "id2", name: "Mary" },
        ];
        console.log("БД: формирую список пользователей и отдаю их серверу");
        console.log("...");
        resolve(users);
        // reject("404");
      }, 500);
    });
  })
  .then(function (users) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Сервер: трансформирую данные для клиента");
        console.log("...");
        const usersTransformed = users.map((user) => {
          return {
            id: user.userId,
            firstName: user.name,
            timeStamp: Date.now(),
          };
        });
        resolve(usersTransformed);
      }, 500);
    });
  })
  .then(function (usersTransformed) {
    setTimeout(function () {
      console.log("Клиент получил данные и отображаю их ", usersTransformed);
    }, 1000);
  })
  .finally(function () {
    console.log("Finally! The last promise is done");
  })
  .catch(function (error) {
    console.log(error);
  });
