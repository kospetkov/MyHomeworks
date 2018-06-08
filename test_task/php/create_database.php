<?php

$config = [
    'server_name' => 'localhost',
    'user_name' => 'root',
    'password' => '',
    'db_name' => '',
    'port' => 3306
];

$connect = new mysqli($config['server_name'], $config['user_name'], $config['password'], $config['db_name'], $config['port']);

if ($connect -> connect_error) {
    echo "Failed to connect to MySQL: (" . $connect -> connect_errno . ") " . $connect -> connect_error ;
}

$sql = "CREATE DATABASE IF NOT EXISTS db_for_linck";

if (!$connect->query($sql)) {
    echo "Error creating database 'db_for_linck': " . $connect->error;
}

if (!$connect->set_charset('utf8')) {
    echo "error include utf8: " . $connect->error;
}

$connect->close();