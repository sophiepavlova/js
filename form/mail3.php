<?php


$project_name = trim($_POST["project_name"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);

$file_attach = "";
// Если поле выбора вложения не пустое - закачиваем его на сервер
if (!empty($_FILES["file_attach"]["tmp_name"])) {
    $path = __DIR__ . "/upload-files/" . $_FILES["file_attach"]["name"]; // путь загрузки файла
    if (copy($_FILES["file_attach"]["tmp_name"], $path)) $file_attach = $path;
}

//echo "<pre>";
//print_r($_POST);
//echo "</pre>";

$c = true;

foreach ($_POST as $key => $value) {
    if (is_array($value)) $value = implode(", ", $value);

    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
        $message .= (($c = !$c) ? "<tr>" : "<tr style=\"background-color: #f8f8f8;\">") . "
            <td style=\"padding: 10px; border: #e2dddd 1px solid;\"><b>$key</b></td>
            <td style=\"padding: 10px; border: #e2dddd 1px solid;\">$value</td>
        </tr>";
    }
}

$message = "<table style=\"width: 100%;\">$message</table>";

// Отправляем сообщение
if (empty($file_attach)) {
    function adopt($text)
    {
        return "=?UTF-8?B?" . Base64_encode($text) . "?=";
    }

    $headers = "MIME-Version: 1.0" . PHP_EOL .
        "Content-Type: text/html; charset=utf-8" . PHP_EOL .
        "From: " . adopt($project_name) . " <" . $admin_email . ">" . PHP_EOL .
        "Reply-To: " . $admin_email . "" . PHP_EOL;

    if (mail($admin_email, adopt($form_subject), $message, $headers)) {
        http_response_code(200);
        echo "Данные отправлены.";
    } else {
        http_response_code(400);
        echo "Ошибка. Данные не отправлены.";
    };
}else{
    send_mail($admin_email, $form_subject, $message, $file_attach);
}



// Функция для отправки сообщения с вложением
function send_mail($to, $form_subject, $html, $path)
{
    $fp = fopen($path, "r");

    if (!$fp) {
        echo "Файл $path не может быть прочитан";
        exit();
    }

    $file = fread($fp, filesize($path));
    fclose($fp);

    $boundary = "--" . md5(uniqid(time())); // генерируем разделитель

    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";

    $multipart = "--$boundary\n";

    $multipart .= "Content-Type: text/html; charset='utf-8'\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\n\n";
    $multipart .= "$html\n\n";

    $message_part = "--$boundary\n";
    $message_part .= "Content-Type: application/octet-stream\n";
    $message_part .= "Content-Transfer-Encoding: base64\n";
    $message_part .= "Content-Disposition: attachment; filename = \"" . $path . "\"\n\n";
    $message_part .= chunk_split(base64_encode($file)) . "\n";

    $multipart .= $message_part . "--$boundary--\n";

    if (!mail($to, $form_subject, $multipart, $headers)) {
        http_response_code(400);
        echo "К сожалению, письмо не отправлено";
        exit();
    }else{
        http_response_code(200);
        echo "Данные отправлены.";
    }
}
