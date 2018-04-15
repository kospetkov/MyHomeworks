<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}
if (isset($_SESSION)) {
    session_destroy();
}
session_start();
$path_to_db = 'db_login.json';
$dataArray = json_decode(file_get_contents($path_to_db), true);
if (isset($_POST['login'])) {
    $login = $_POST['login'];
    $pass = $_POST['pass'];
}
if (array_key_exists($login, $dataArray)) {
    if ($pass === $dataArray[$login]) {
        $_SESSION['login'] = $login;
    }
    else {
        header('location: index.php');
    }
} else {
    $dataArray[$login] = $pass;
    $_SESSION['login'] = $login;
}
file_put_contents($path_to_db, json_encode($dataArray, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
