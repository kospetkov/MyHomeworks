<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}

require_once 'connect.php';

define('LIMIT', '3600');

$limit = limit_time(LIMIT);
$sql = "SELECT * FROM messages WHERE time > '$limit'";
$result = mysqli_query($connect, $sql);
$data_array = [];
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
else {
    $res['status'] = '';
    $res['error'] = 'null results';
    echo json_encode($res);
}

mysqli_close($connect);

function limit_time($limit) {
    $timer = time() - $limit;
    $date_limit = date("Y-m-d H:i:s", $timer);
    return $date_limit;
}