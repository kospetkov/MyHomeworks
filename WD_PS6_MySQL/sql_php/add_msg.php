<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.html');
}

require_once 'connect.php';

session_start();

if (isset($_POST['msg'])) {
    $user = $_SESSION['login'];
    $msg = $_POST['msg'];
    $msg = htmlspecialchars($msg);
    $msg = str_replace(':)', '<img src="../img/smile.gif" alt="smile">', $msg);
    $msg = str_replace(':(', '<img src="../img/sad.gif" alt="smile">', $msg);
    $sql = "INSERT INTO `messages` (`id`, `user`, `time`, `msg`) VALUES (NULL, '$user', CURRENT_TIMESTAMP, '$msg')";

    if (!mysqli_query($connect, $sql)) {
        $res['error'] = mysqli_error($connect);
        $res['status'] = '';
        echo json_encode($res);
    }
    else {
        $data_array = [];
        $sql = "SELECT * FROM messages ORDER BY id DESC LIMIT 1";
        $result = mysqli_query($connect, $sql);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data_array[] = [
                    'id' => $row['id'],
                    'user' => $row['user'],
                    'date' => $row['time'],
                    'msg' => $row['msg']
                ];
            }
            echo json_encode($data_array);
        }


    }
}

mysqli_close($connect);
