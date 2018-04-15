<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}
session_start();
$path_to_db = 'db_message.json';
$data_array = json_decode(file_get_contents($path_to_db), true);
$count = count($data_array);
if ((isset($_POST['id_first'])) && (isset($_POST['id_last']))) {
    $id_first = $_POST['id_first'];
    $id_last = $_POST['id_last'];
}
$date_time = (time() * 1000) - 3600000;
if ($count) {
    for ($i = 0; $i < $count; $i++) {
        if ($date_time < $data_array[$i]['date']) {
            $array_for_ressponce[] = [
                'id' => $data_array[$i]['id'],
                'user' => $data_array[$i]['user'],
                'date' => $data_array[$i]['date'],
                'msg' => $data_array[$i]['msg']
            ];
        }
    }
    if (($array_for_ressponce[0]['id'] !== $id_first) || ($array_for_ressponce[count($array_for_ressponce) - 1]['id'] !== $id_last)) {
        echo json_encode($array_for_ressponce);
    }
}
file_put_contents($path_to_db, json_encode($data_array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
