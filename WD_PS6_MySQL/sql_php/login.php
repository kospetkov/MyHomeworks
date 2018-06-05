<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}
if (isset($_SESSION)) {
    session_destroy();
}
session_start();

require_once 'connect.php';

if (isset($_POST['login'])) {
    $login = $_POST['login'];
    $login = htmlspecialchars($login);
}

if (isset($_POST['pass'])) {
    $pass = $_POST['pass'];
    $pass = htmlspecialchars($pass);
}

$sql = "SELECT `pass` FROM `login` WHERE user LIKE '$login'";
$result = mysqli_query($connect, $sql);
if (!$result) {
    $res['error'] = mysqli_error($connect);
    $res['status'] = 'select';
    $res['password'] = '';
    echo json_encode($res);
}
else if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $password = $row['pass'];
        if ($pass === $password) {
            $_SESSION['login'] = $login;
            return;
        }
    }
    $res['error'] = mysqli_error($connect);
    $res['status'] = '';
    $res['password'] = 'pass';
    echo json_encode($res);
}
else {
    $_SESSION['login'] = $login;
    $sql = "INSERT INTO `login` (`id`, `user`, `pass`) VALUES (NULL, '$login', '$pass')";
    if (!mysqli_query($connect, $sql)) {
        $res['error'] = mysqli_error($connect);
        $res['status'] = 'insert';
        $res['password'] = '';
        echo json_encode($res);
    }
}

mysqli_close($connect);