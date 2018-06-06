<?php
require_once 'config.php';
$res = [
    'status' => 'ok',
    'error' => '',
    'password' => ''
];
$connect = new mysqli($config['server_name'], $config['user_name'], $config['password'], $config['db_name'], $config['port']);

if ($connect -> connect_error) {
    echo "Failed to connect to MySQL: (" . $connect -> connect_errno . ") " . $connect -> connect_error ;
}
