<?php
$fileName = '../json/data.json';
$array = json_decode(file_get_contents($fileName), true);
$array[$_POST['id']]['top'] = (float)$_POST['top'];
$array[$_POST['id']]['left'] = (float)$_POST['left'];
file_put_contents($fileName, json_encode($array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
?>
