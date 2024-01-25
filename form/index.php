<!DOCTYPE html>
<html lang="ru" class="page">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Валидация и отправка данных на почту</title>
    <link rel="stylesheet" href="css/settings.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body class="page__body">
    <div class="container">
      <h1 class="title title--main">Валидация и отправка данных на почту</h1>
      <div class="divider"></div>
      <form action="#" class="form" method="POST" enctype="multipart/form-data" >
        <!--чтобы можно было файлы отправлять-->
        <label class="form__label">
          <input
            class="input input-name"
            type="text"
            name="Имя"
            placeholder="Введите имя"
          />
        </label>
        <label class="form__label">
          <input
            class="input input-mail"
            type="email"
            name="Email"
            placeholder="Введите email"
          />
        </label>
        <label class="form__label">
          <input
            class="input input-tel"
            type="tel"
            name="Телефон"
            placeholder="Введите телефон"
          />
        </label>
        <label class="form__label">
          <textarea
            class="textarea"
            name="Сообщение"
            id="messages"
            cols="30"
            rows="10"
            placeholder="Введите ваше сообщение"
          ></textarea>
        </label>
        <!--        <input class="input" type="file" name="file[]" multiple id="myfile">&lt;!&ndash;multiple - загрузка нескольких файлов, и мы получим на сервере массив данных file[]&ndash;&gt;-->

        <!-- <label class="form__label">
          <input class="input input-file" type="file" name="file_attach" />
        </label> -->
        <!-- With a new attribute -->
        <label class="form__label">
          <input class="input input-file" type="file" accept="image/png, image/jpeg, image/gif, image/svg+xml, .epub" name="file_attach" multiple/>
        </label>

        <input type="hidden" name="project_name" value="SiteName" />
        <input type="hidden" name="admin_email" value="nertis44@gmail.com" />
        <input
          type="hidden"
          name="form_subject"
          value="Форма с подвала сайта SiteName"
        />

        <button class="button button_dis">Отправить</button>
        <!--        <span class="errors-container"></span>-->
      </form>
    </div>
    <script src="libs/inputmask.min.js"></script>
    <script src="libs/just-validate.production.min.js"></script>
    <script src="js/script1.js"></script>
  </body>
</html>
