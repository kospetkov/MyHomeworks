<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('location: index.php');
}

require_once 'connect.php';

//$time = time() - 3600;
//echo $time;
//$sql = "SELECT * FROM messages WHERE time > (CURRENT_TIMESTAMP() + 1) - 10000";
$sql = "SELECT * FROM messages WHERE time > CURDATE() - INTERVAL 1 HOUR ";
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
}
else {
    $res['status'] = '';
    $res['error'] = 'null results';
    echo json_encode($res);
}

mysqli_close($connect);
echo json_encode($data_array);