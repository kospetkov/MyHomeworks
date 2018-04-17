<?php
require_once 'validation.php';
$path_to_db = '../db/db_login.json';
$res = validation($path_to_db);
if ($res['error']) {
    echo json_encode($res);
    return;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}
if (isset($_SESSION)) {
    session_destroy();
}
session_start();
$dataArray = json_decode(file_get_contents($path_to_db), true);
$count = count($dataArray);
$id = $count;
if (isset($_POST['login'])) {
    $login = $_POST['login'];
    $pass = $_POST['pass'];
}
if (!$count) {
    $dataArray[] = [
        'id' => $id,
        'user' => $login,
        'pass' => $pass
    ];
}
else {
    for ($i = 0; $i < $count; $i ++) {
        if ($dataArray[$i]['user'] === $login) {
            if ($dataArray[$i]['pass'] === $pass) {
                $_SESSION['login'] = $login;
                $_SESSION['id_user'] = $dataArray[$i]['id'];
                break;
            }
            else {
                header('location: index.php');
            }
        }
        else if (($i + 1) === $count) {
            $dataArray[] = [
                'id' => $id,
                'user' => $login,
                'pass' => $pass
            ];
            $_SESSION['login'] = $login;
            $_SESSION['id_user'] = $id;
        }
    }
}
file_put_contents($path_to_db, json_encode($dataArray, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
