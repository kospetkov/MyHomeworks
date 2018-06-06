<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.html');
}

require_once 'connect.php';

session_start();

if (isset($_POST['msg'])) {
    define('TABLE_NAME', 'messages');
    define('COLUMN_NAME', 'id');

    $user = $_SESSION['login'];
    $msg = $_POST['msg'];
    $msg = htmlspecialchars($msg);
    $msg = str_replace(':)', '<img src="../img/smile.gif" alt="smile">', $msg);
    $msg = str_replace(':(', '<img src="../img/sad.gif" alt="smile">', $msg);

    insert_message($connect, TABLE_NAME, $user, $msg);
    echo select_for_last_id($connect, TABLE_NAME, COLUMN_NAME);
    $connect->close();
}


/**
 * @param $connect
 * @param $table_name
 * @param $user
 * @param $msg
 */
function insert_message($connect, $table_name, $user, $msg) {
    $stmt = $connect->prepare( "INSERT INTO  $table_name (user, msg) VALUES (?,?)");
    $stmt->bind_param("ss", $user, $msg);
    $stmt->execute();
    $stmt->close();
}

/**
 * @param $connect
 * @return string
 */
function select_for_last_id($connect, $table_name, $column_name) {
    $data_array = [];
    $stmt = $connect->prepare( "SELECT * FROM $table_name ORDER BY $column_name DESC LIMIT 1");
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
    }
    $stmt->close();
    return json_encode($data_array);
}