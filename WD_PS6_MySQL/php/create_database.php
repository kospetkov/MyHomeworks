<?php

require_once 'conf.php';

$sql = "CREATE DATABASE IF NOT EXISTS chatick";

if (!$connect->query($sql) === true) {
    echo "Error creating database 'chatick': " . $connect->error;
}

$connect->close();
