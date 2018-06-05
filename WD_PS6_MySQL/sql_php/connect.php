<?php
require_once 'config.php';
$res = [
    'status' => 'ok',
    'error' => '',
    'password' => ''
];
$connect = mysqli_connect($config['server_name'], $config['user_name'], $config['password'], $config['db_name'], $config['port']);

if (!$connect) {
    $res['error'] = mysqli_connect_error();
    $res['status'] = '';
    echo json_encode($res);
}
