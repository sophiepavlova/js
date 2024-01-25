console.log("Хочу получить список пользователей");
console.log("...");

setTimeout(function () {
  console.log("Сервер: Запрашиваю список пользователей в БД");
  console.log("...");

  setTimeout(function () {
    console.log("БД: формирую список пользователей и отдаю их серверу");
    console.log("...");
    setTimeout(function () {
      console.log("Сервер: трансформирую данные для клиента");
      console.log("...");
      setTimeout(function () {
        console.log("Клиент получил данные и отображаю их");
      }, 1000);
    }, 500);
  }, 500); // сервер с БД работает очень быстро
}, 1000);
