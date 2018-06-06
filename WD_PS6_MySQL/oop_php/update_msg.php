<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}

require_once 'connect.php';

define('LIMIT', '3600');

$data_array = [];
$limit = limit_time(LIMIT);
$stmt = $connect->prepare("SELECT * FROM messages WHERE time > ?");
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
    echo json_encode($data_array);
}
else {
    $res['status'] = '';
    $res['error'] = 'null results';
    echo json_encode($res);
}
$stmt->close();

function limit_time($limit) {
    $timer = time() - $limit;
    $date_limit = date("Y-m-d H:i:s", $timer);
    return $date_limit;
}