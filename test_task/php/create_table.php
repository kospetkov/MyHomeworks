<?php

require_once 'connect.php';

$sql = "CREATE TABLE IF NOT EXISTS linck_tabl (" .
    "id INT(11) UNSIGNED AUTO_INCREMENT, " .
    "linck TEXT NOT NULL," .
    "new_linck VARCHAR(255) NOT NULL," .
    "using_linck int(11) NOT NULL," .
    "ip_user VARCHAR(15) NOT NULL," .
    "time TIMESTAMP," .
    "time_create DATETIME NOT NULL," .
    "PRIMARY KEY(id))";

if (!$connect->query($sql)) {
    echo "Error creating table 'linck_tabl' : " . $connect->error;
}

if (!$connect->set_charset('utf8')) {
    echo "error include utf8: " . $connect->error;
}

$connect->close();
