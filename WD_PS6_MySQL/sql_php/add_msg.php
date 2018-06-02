<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}

require_once 'connect.php';
session_start();
if (isset($_POST['msg'])) {
    $msg = $_POST['msg'];
    $user = $_SESSION['login'];
}

//$sql = "INSERT INTO messages (user, msg)
//        VALUES ($user, $msg)";
$sql = "INSERT INTO messages (user, msg)\n"

    . "        VALUES ('$user', '$msg')";


if (!mysqli_query($connect, $sql)) {
    $res['error'] = mysqli_error($connect);
    $res['status'] = '';
    echo json_encode($res);
}

mysqli_close($connect);
