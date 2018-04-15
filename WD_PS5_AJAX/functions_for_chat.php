<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}
session_start();
$id = file_get_contents('id.txt');
$id *= 1;
$path_to_db = 'db_message.json';
$data_array = json_decode(file_get_contents($path_to_db), true);
if (isset($_POST['msg'])) {
    $new_array = [
        'id' => $id,
        'user' => $_SESSION['login'],
        'date' => time() * 1000,
        'msg' => $_POST['msg']
    ];
    $id ++;
    file_put_contents('id.txt', $id);
}
$data_array[] = $new_array;
echo json_encode($new_array);
//$date_time = (time() * 1000) - 3600000;
//for ($i = 0; $i < count($data_array); $i ++) {
   // if ($date_time < $data_array[$i]['date']) {
       // $array_for_ressponce[] = [
          //  'id' => $data_array[$i]['id'],
          //  'user' => $data_array[$i]['user'],
           // 'date' => $data_array[$i]['date'],
           // 'msg' => $data_array[$i]['msg']
      //  ];
   // }
//}
//echo json_encode($array_for_ressponce);
file_put_contents($path_to_db, json_encode($data_array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
