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

    if (isset($_POST['pass'])) {
        $pass = $_POST['pass'];
        $pass = htmlspecialchars($pass);

        define('TABLE_NAME', 'login');
        echo json_encode(select_where_user($connect, TABLE_NAME, $login, $pass, $res));
        $connect->close();
    }
}

/**
 * @param $connect
 * @param $table_name
 * @param $login
 * @param $pass
 * @param $res
 */
function select_where_user($connect, $table_name, $login, $pass, $res) {
    $stmt = $connect->prepare("SELECT * FROM $table_name WHERE user= ?");
    $stmt->bind_param("s", $login);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $password = $row['pass'];
            if ($pass === $password) {
                $_SESSION['login'] = $login;
                $stmt->close();
                return $res;
            }
        }
        $res['password'] = 'incorrect password';
        $res['status'] = '';
        $stmt->close();
        return $res;
    } else {
        $_SESSION['login'] = $login;
        $stmt = $connect->prepare( "INSERT INTO $table_name (user, pass) VALUES (?,?)");
        $stmt->bind_param("ss", $login, $pass);
        $stmt->execute();
        $stmt->close();
        return $res;
    }
}
