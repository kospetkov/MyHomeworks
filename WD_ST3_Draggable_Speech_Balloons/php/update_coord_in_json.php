<?php
$fileName = '../json/data.json';
$array = json_decode(file_get_contents($fileName), true);
//$array[$_POST['id']]['top'] = (float)$_POST['top'];
//$array[$_POST['id']]['left'] = (float)$_POST['left'];
$id = $_POST['id'];
$count = count($array);
if (!$count) {
    $array[0]['top'] = (float)$_POST['top'];
    $array[0]['left'] = (float)$_POST['left'];
} else {
    for ($i = 0; $i <= $count; $i ++) {
        echo $array[$i]['id'];
        if ($id == $array[$i]['id']) {
            $array[$i]['top'] = (float)$_POST['top'];
            $array[$i]['left'] = (float)$_POST['left'];
        }
    }
}
file_put_contents($fileName, json_encode($array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
?>
