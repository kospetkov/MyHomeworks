<?php
$fileName = '../json/data.json';
$array = json_decode(file_get_contents($fileName), true);
$id = $_POST['id'];
$count = count($array);
if (!$count) {
    $array[] = array(
        'id' => $_POST['id'],
        'top' => (float)$_POST['top'],
        'left' => (float)$_POST['left'],
        'msg' => $_POST['msg']
    );
}
else {
    for ($i = 0; $i <= $count; $i ++) {
        echo $id;
        echo $count;
        if ($id == $array[$i]['id']) {
            $array[$i]['msg'] = $_POST['msg'];
            break;
        }
        else if ($i >= $count) {
            echo "vhod";
            $array[] = array(
                'id' => $_POST['id'],
                'top' => (float)$_POST['top'],
                'left' => (float)$_POST['left'],
                'msg' => $_POST['msg']
            );
            break;
        }
    }
}
file_put_contents($fileName, json_encode($array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
?>
