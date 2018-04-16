<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}
session_start();
$path_to_db = 'db_message.json';
$data_array = json_decode(file_get_contents($path_to_db), true);
$count = count($data_array);
$id = $data_array[$count - 1]['id'];
$id ++;
if (isset($_POST['msg'])) {
    $new_array = [
        'id' => $id,
        'user' => $_SESSION['login'],
        'date' => time() * 1000,
        'msg' => $_POST['msg']
    ];
}
$data_array[] = $new_array;
echo json_encode($new_array);
file_put_contents($path_to_db, json_encode($data_array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
