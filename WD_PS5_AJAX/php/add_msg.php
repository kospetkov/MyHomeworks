<?php
require_once 'validation.php';
$path_to_db = '../db/db_message.json';
$res = validation($path_to_db);

if ($res['error']) {
    echo json_encode($res);
    return;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: ../index.html');
}

session_start();

$data_array = json_decode(file_get_contents($path_to_db), true);
$id = count($data_array);
if (isset($_POST['msg'])) {
    $message = $_POST['msg'];
    $message = htmlspecialchars($message);
    $message = str_replace(':)', '<img src="../img/smile.gif" alt="smile">', $message);
    $message = str_replace(':(', '<img src="../img/sad.gif" alt="smile">', $message);
        $new_array = [
            'id' => $id,
            'idUser' => $_SESSION['id_user'],
            'user' => $_SESSION['login'],
            'date' => time() * 1000,
            'msg' => $message
        ];
    $data_array[] = $new_array;
}
echo json_encode($new_array);
file_put_contents($path_to_db, json_encode($data_array, FILE_APPEND|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
