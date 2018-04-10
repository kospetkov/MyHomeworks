<?php
$fileName = '../json/data.json';
$array = json_decode(file_get_contents($fileName), true);
$id = $_POST['id'];
$count = count($array);
for ($i = 0; $i <= $count; $i ++) {
    if ($id == $array[$i]['id']) {
        unset($array[$i]);
    }
}
$array = array_values($array);
file_put_contents($fileName, json_encode($array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
?>
