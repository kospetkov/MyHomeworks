<?php
$config = [
    'server_name' => 'localhost',
    'user_name' => 'root',
    'password' => '',
    'db_name' => 'db_chat',
    'port' => 3306
];

$connect = new mysqli($config['server_name'], $config['user_name'], $config['password'], $config['db_name'], $config['port']);

if ($connect -> connect_error) {
    echo "Failed to connect to MySQL: (" . $connect -> connect_errno . ") " . $connect -> connect_error ;
}
