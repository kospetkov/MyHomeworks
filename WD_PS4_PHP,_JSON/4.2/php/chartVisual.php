<?php
function chartVisual()
{
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('location: index.php');
    }
    $path_to_db = '../json/data.json';
    $dataArray = json_decode(file_get_contents($path_to_db), true);
    if (isset($_POST['cars'])) {
        $car = $_POST['cars'];
    }
    if (array_key_exists($car, $dataArray)) {
        $dataArray[$car]++;
    } else
    {$dataArray[$car] = 1;}
    file_put_contents($path_to_db, json_encode($dataArray));
    echo file_get_contents($path_to_db, true);
}
