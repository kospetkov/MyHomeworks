<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}
if (isset($_SESSION)) {
    session_destroy();
}
session_start();

require_once 'connect.php';
$count = -1;
$sql = "SELECT * FROM login";
$result = mysqli_query($connect, $sql);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data_array[] = [
            'user' => $row['user'],
            'pass' => $row['pass']
        ];
    }
}
else {
    //$res['password'] = 'vot on ya';
    //echo json_encode($res);
    $count = 0;
}
if (isset($_POST['login'])) {
    $login = $_POST['login'];
}
if (isset($_POST['pass'])) {
    $pass = $_POST['pass'];
}

if (!$count) {
    $res['password'] = 'vau';
    $sql = "INSERT INTO login (user, pass)
           VALUES ( '$login', '$pass')";
    $_SESSION['login'] = $login;
   if (!mysqli_query($connect, $sql)) {
       $res['error'] = mysqli_error($connect);
       $res['status'] = 'hren tebe';
       echo json_encode($res);
   }
}
else {
    $count = count($data_array);
    for ($i = 0; $i < $count; $i ++) {
        if ($data_array[$i]['user'] === $login) {
            if ($data_array[$i]['pass'] === $pass) {
                $_SESSION['login'] = $login;
                break;
            }
            else {
                $res['status'] = '';
                $res['password'] = 'incorrect password';
                echo json_encode($res);
                return;
            }
        }
        else if (($i + 1) === $count) {
            $sql = "INSERT INTO 'login' (user, pass)
           VALUES ( '$login', '$pass')";
            if (!mysqli_query($connect, $sql)) {
                $res['error'] = mysqli_error($connect);
                $res['status'] = 'huli';
                echo json_encode($res);
            }
            $_SESSION['login'] = $login;
        }
    }
}

mysqli_close($connect);