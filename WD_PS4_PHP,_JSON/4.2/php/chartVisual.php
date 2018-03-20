<?php
function chartVisual()
{
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('location: index.php');
    }
    $fileName = '../json/data.json';
    $dataArray = json_decode(file_get_contents($fileName), true);
    $car = $_POST['cars'];
    if (array_key_exists($car, $dataArray)) {
        $dataArray[$car]++;
    } else
    {$dataArray[$car] = 1;}
    file_put_contents($fileName, json_encode($dataArray));
    echo file_get_contents($fileName, true);
}
