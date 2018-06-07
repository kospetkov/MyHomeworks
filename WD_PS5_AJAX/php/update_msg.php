<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: ../index.html');
}
session_start();
if (isset($_SESSION['login'])) {
    $path_to_db = '../db/db_message.json';
    $data_array = json_decode(file_get_contents($path_to_db), true);
    $count = count($data_array);
    if ($count) {
        $date_time = (time() * 1000) - 3600000;
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
        if (isset($array_for_ressponce)) {
            echo json_encode($array_for_ressponce);
        }
    }
}
file_put_contents($path_to_db, json_encode($data_array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
