<?php
$fileName = '../json/data.json';
$array = json_decode(file_get_contents($fileName), true);
unset($array[$_POST['id']]);
file_put_contents($fileName, json_encode($array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
?>
