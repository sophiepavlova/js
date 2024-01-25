<?php


$project_name = trim($_POST["project_name"]);
$admin_email = trim($_POST["admin_email"]);
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
    echo "Форма была успешно отправлена!";
} else {
    http_response_code(400);
    echo "Форма не отправлена!";
};
?>