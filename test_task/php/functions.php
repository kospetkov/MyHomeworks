<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    require_once 'connect.php';

    define('PATH_TO_MYDOMEN', 'http://');
    define('MYDOMEN', 'mydomen');
    define('LENGTH_FOR_NEW_URL', '15');
    define('LIMIT_TIME_FOR_IP', '3600');
    define('LIMIT_TIME_FOR_LINCK', '15768000');
    define('INDEX_FOR_ARRAY', '2');
    define('LIMIT_CREATE_LINCK', '10');

    if (isset($_POST['linck'])) {
        $linck = $_POST['linck'];
        $linck_to_array = explode('/', $linck);
        $ip = file_get_contents('https://api.ipify.org');

        if ($linck_to_array[INDEX_FOR_ARRAY] !== MYDOMEN) {

            $stmt = $connect->prepare("SELECT * FROM linck_tabl WHERE linck LIKE ?");
            $stmt->bind_param("s", $linck);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $data_array = [];
                while ($row = $result->fetch_assoc()) {
                    $data_array[] = create_data_array($row['new_linck'], 'select', '');
                }
                $stmt->close();
                echo json_encode($data_array);
            } else {
                $new_linck = create_new_linck();
                $using_linck = 0;
                $count_for_rows = select_limit_time($connect, $ip);

                if (($count_for_rows < LIMIT_CREATE_LINCK) && ($count_for_rows >= 0)) {
                    echo json_encode(select_by_limit_time($connect, $linck, $new_linck, $ip));
                } else {
                    $data_array[] = create_data_array('limit create linck', $ip, '');
                    echo json_encode($data_array);
                }
            }
        } else {
            echo json_encode(mydomen_linck($connect, $linck));
        }
    }
}

$connect->close();

/**
 * @param $connect
 * @param $linck
 * @param $new_linck
 * @param $ip
 * @return array
 */
function select_by_limit_time($connect, $linck, $new_linck, $ip) {
    $limit_time = limit_time(LIMIT_TIME_FOR_LINCK);
    $stmt = $connect->prepare("SELECT * FROM linck_tabl WHERE time_create < ?");
    $stmt->bind_param("s", $limit_time);
    $stmt->execute();
    $result = $stmt->get_result();
    $id = 0;

    if ($result->num_rows > 0) {
        $data_array = [];
        while ($row = $result->fetch_assoc()) {
            $data_array[] = create_data_array('', $row['id'], '');
        }
        $stmt->close();
        $id = $data_array[0]['id'];
        return update_linck($connect, $linck, $new_linck, $ip, $id);
    } else {
        return insert_new_linck($connect, $linck, $new_linck, $ip);
    }
}

/**
 * @param $connect
 * @param $linck
 * @param $new_linck
 * @param $ip
 * @param $id
 * @return array
 */
function update_linck($connect, $linck, $new_linck, $ip, $id) {
    $create_time = limit_time(0);
    $linck_using = 0;
    $stmt = $connect->prepare("UPDATE linck_tabl SET linck = ?, new_linck = ?, " .
        "using_linck = ?, ip_user = ?, time_create = ? WHERE id = ?");
    $stmt->bind_param("ssissi", $linck, $new_linck, $linck_using, $ip, $create_time, $id);
    $stmt->execute();
    $stmt->close();
    $data_array[] = create_data_array($new_linck, 'update', '');
    return $data_array;
}

/**
 * @param $connect
 * @param $linck
 * @param $new_linck
 * @param $ip
 * @return array
 */
function insert_new_linck($connect, $linck, $new_linck, $ip) {
    $using_linck = 0;
    $time = limit_time(0);
    $stmt = $connect->prepare("INSERT INTO linck_tabl (linck, new_linck, using_linck, ip_user, time_create)" .
        " VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssiss", $linck, $new_linck, $using_linck, $ip, $time);
    $stmt->execute();
    $stmt->close();
    $data_array[] = create_data_array($new_linck, 'insert', '');
    return $data_array;
}

/**
 * @param $connect
 * @param $linck
 * @return array
 */
function mydomen_linck($connect, $linck) {
    $stmt = $connect->prepare("SELECT * FROM linck_tabl WHERE new_linck LIKE ?");
    $stmt->bind_param("s", $linck);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_array[] = create_data_array($row['using_linck'], $row['id'], $row['linck']);
        $stmt->close();
        $using_linck = $data_array[0]['new_linck'] + 1;
        $id_linck = $data_array[0]['id'];
        update_linck_tabl($connect, $using_linck, $id_linck);
        return $data_array;
    }
}

/**
 * @param $connect
 * @param $using_linck
 * @param $id_linck
 */
function update_linck_tabl($connect, $using_linck, $id_linck) {
    $stmt = $connect->prepare("UPDATE linck_tabl SET using_linck = ? WHERE id = ?");
    $stmt->bind_param("ii", $using_linck, $id_linck);
    $stmt->execute();
    $stmt->close();
}

/**
 * @param $connect
 * @param $ip
 * @return mixed
 */
function select_limit_time($connect, $ip) {
    $limit_time = limit_time(LIMIT_TIME_FOR_IP);
    $stmt = $connect->prepare("SELECT * FROM linck_tabl WHERE ip_user LIKE ? AND time_create > ?");
    $stmt->bind_param("ss", $ip, $limit_time);
    $stmt->execute();
    $result = $stmt->get_result();
    $count_for_rows = $result->num_rows;
    $stmt->close();
    return $count_for_rows;
}

/**
 * @return string
 */
function create_new_linck() {
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ0123456789';
    $str_length = strlen($chars);
    $string = '/';
    for ($i = 0; $i < LENGTH_FOR_NEW_URL; $i ++) {
        $string .= substr($chars, mt_rand(1, $str_length) - 1, 1);
    }
    $new_linck = PATH_TO_MYDOMEN . MYDOMEN . $string;
    return $new_linck;
}

/**
 * @param $res
 * @param $error_message
 */
function error_message($res, $error_message) {
    $res['error'] = $error_message;
    $res['status'] = '';
    echo json_encode($res);
}

/**
 * @param $limit
 * @return false|string
 */
function limit_time($limit) {
   $timer = time() - $limit;
   $date_limit = date("Y-m-d H:i:s", $timer);
   return $date_limit;
}

/**
 * @param $new_linck
 * @param $id
 * @param $linck
 * @return array
 */
function create_data_array($new_linck, $id, $linck) {
    $data_array = [
        'new_linck' => $new_linck,
        'id' => $id,
        'linck' => $linck
    ];
    return $data_array;
}
