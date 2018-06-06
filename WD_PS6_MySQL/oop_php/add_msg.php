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
    $stmt = $connect->prepare( "INSERT INTO messages (user, `msg`) VALUES (?,?)");
    $stmt->bind_param("ss", $user, $msg);
    $stmt->execute();
    $stmt->close();
    /*if (!mysqli_query($connect, $sql)) {
        $res['error'] = mysqli_error($connect);
        $res['status'] = '';
        echo json_encode($res);
    }
    else {*/
        $data_array = [];
        $stmt = $connect->prepare( "SELECT * FROM messages ORDER BY id DESC LIMIT 1");
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data_array[] = [
                    'id' => $row['id'],
                    'user' => $row['user'],
                    'date' => $row['time'],
                    'msg' => $row['msg']
                ];
            }
            echo json_encode($data_array);
        }
        $stmt->close();


    //}
}

mysqli_close($connect);
