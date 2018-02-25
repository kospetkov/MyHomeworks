<?php
/*$myId = $_POST['id'];
$myTop = $_POST['top'];
$myLeft = $_POST['left'];
$mas = $_POST['msg'];
$array[$myId] = [
    'top' => $myTop,
    'left' => $myLeft,
    'msg' => $mas,
];*/

$fileName = '../json/data.json';
$data = json_decode(file_get_contents($fileName), true);
$data[$_POST['id']] = [
    'top' => (float)$_POST['top'],
    'left' => (float)$_POST['left'],
    'msg' => $_POST['msg']
];
// json_encode($array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
//$dataArray = json_decode(file_get_contents($fileName), true);
//$car = $_POST['cars'];
//$dataArray[$car] ++;
file_put_contents($fileName, json_encode($data, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
//echo file_get_contents($fileName, true);
?>

