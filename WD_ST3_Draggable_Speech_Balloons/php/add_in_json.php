<?php
$fileName = '../json/data.json';
$array = json_decode(file_get_contents($fileName), true);
$ident = $_POST['ident'];
$count = count($array);
if (!$count) {
    $array[] = array(
        'id' => $_POST['id'],
        'top' => (float)$_POST['top'],
        'left' => (float)$_POST['left'],
        'msg' => $_POST['msg'],
        'ident' => $_POST['ident']
    );
}
else {
    for ($i = 0; $i <= $count; $i ++) {
        if (in_array($ident, $array[$i])) {
            $array[$i] = array(
                'id' => $_POST['id'],
                'top' => (float)$_POST['top'],
                'left' => (float)$_POST['left'],
                'msg' => $_POST['msg'],
                'ident' => $_POST['ident']
            );
        }
        else {
            $array[] = array(
                'id' => $_POST['id'],
                'top' => (float)$_POST['top'],
                'left' => (float)$_POST['left'],
                'msg' => $_POST['msg'],
                'ident' => $_POST['ident']
            );
        }
    }
}
file_put_contents($fileName, json_encode($array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
?>
