<?php

define('POLE_1', 'timestamp');
define('POLE_2', 'temperature');
define('POLE_3', 'rain_possibility');
define('TABLE_NAME', 'forecast');
define('CITY_ID', 1);

require_once 'connect.php';

echo json_encode(getDataFromTable($connect, POLE_1, POLE_2,POLE_3, TABLE_NAME, CITY_ID));
$connect->close();


/**
 * @param $connect
 * @param $pole1
 * @param $pole2
 * @param $pole3
 * @param $tableName
 * @param $cityId
 * @return array
 */
function getDataFromTable($connect, $pole1, $pole2, $pole3, $tableName, $cityId) {
    $dataArray = [];
    $stmt = $connect->prepare("SELECT $pole1, $pole2, $pole3 FROM $tableName WHERE city_id = ?");
    $stmt->bind_param("i", $cityId);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $strDate = $row['timestamp'];
            $strDate = strtotime($strDate);
            $dates = date('l j/m', $strDate);
            $times = date('H:i', $strDate);
            $dataArray[] = [
                'date' => $dates,
                'time' => $times,
                'temp' => $row['temperature'] . '&deg;',
                'description' => getIcon($row['rain_possibility'])
            ];
        }
    }
    $stmt->close();
    return $dataArray;
}

/**
 * @param $rainPossibility
 * @return bool|string
 */
function getIcon($rainPossibility)
{
    if ($rainPossibility <= 0.2) {
        return file_get_contents('../img/icons/002-sun.svg');
    }elseif (($rainPossibility > 0.2) && ($rainPossibility <= 0.4)) {
        return file_get_contents('../img/icons/004-sky-1.svg');
    } elseif (($rainPossibility > 0.4) && ($rainPossibility <= 0.6)) {
        return file_get_contents('../img/icons/005-sky.svg');
    } elseif (($rainPossibility > 0.6) && ($rainPossibility <= 0.9)) {
         return file_get_contents('../img/icons/003-rain.svg');
    } elseif ($rainPossibility > 0.9) {
        return file_get_contents('../img/icons/001-flash.svg');
    }
}
