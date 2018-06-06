<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}

require_once 'connect.php';

define('LIMIT', '3600');
define('TABLE_NAME', 'messages');

echo select_for_limit_time($connect, TABLE_NAME);
$connect->close();


/**
 * @param $connect
 * @param $table_name
 * @return string
 */
function select_for_limit_time($connect, $table_name) {
    $data_array = [];
    $limit = limit_time(LIMIT);
    $stmt = $connect->prepare("SELECT * FROM $table_name WHERE time > ?");
    $stmt->bind_param("s", $limit);
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

/**
 * @param $limit
 * @return false|string
 */
function limit_time($limit) {
    $timer = time() - $limit;
    $date_limit = date("Y-m-d H:i:s", $timer);
    return $date_limit;
}