<?php

require_once 'connect.php';

$sql = "CREATE TABLE IF NOT EXISTS login (" .
    "id INT(11) UNSIGNED AUTO_INCREMENT, " .
    "user VARCHAR(64)," .
    "pass VARCHAR(64)," .
    "PRIMARY KEY(id))";

if (!$connect->query($sql) === true) {
    echo "Error creating table 'login' : " . $connect->error;
}

$sql = "CREATE TABLE IF NOT EXISTS messages (" .
    "id INT(11) UNSIGNED AUTO_INCREMENT," .
    "user VARCHAR(64) NOT NULL," .
    "time TIMESTAMP," .
    "msg VARCHAR(256)," .
    "PRIMARY KEY(id))";

if (!$connect->query($sql) === true) {
    echo "error create table 'message' :" . $connect->error;
}
