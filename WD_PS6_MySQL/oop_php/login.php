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

//$stmt = $connect -> prepare($connect, "SELECT * FROM login WHERE user = ?");
//$stmt -> bind_param("s", $login);
//$stmt -> execute();
$data_array = [];
$stmt = $connect->prepare("SELECT * FROM login WHERE user= ?");
$stmt->bind_param("s", $login);
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
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
    $stmt->close();
} else {
    $_SESSION['login'] = $login;
    $stmt = $connect->prepare( "INSERT INTO login (user, pass) VALUES (?,?)");
    $stmt->bind_param("ss", $login, $pass);
    $stmt->execute();
    $stmt->close();
    /*
    if (!mysqli_query($connect, $sql)) {
        $res['error'] = mysqli_error($connect);
        $res['status'] = 'insert';
        $res['password'] = '';
        echo json_encode($res);
    } */
}
//echo json_encode($data_array);

$connect->close();