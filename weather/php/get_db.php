<?php

define('POLE_1', 'timestamp');
define('POLE_2', 'temperature');
define('POLE_3', 'rain_possibility');
define('TABLE_NAME', 'forecast');
define('CITY_ID', 1);

require_once 'connect.php';

echo json_encode(get_data_from_table($connect, POLE_1, POLE_2,POLE_3, TABLE_NAME, CITY_ID));
$connect->close();


/**
 * @param $connect
 * @param $pole_1
 * @param $pole_2
 * @param $pole_3
 * @param $table_name
 * @param $city_id
 * @return array
 */
function get_data_from_table($connect, $pole_1, $pole_2, $pole_3, $table_name, $city_id) {
    $data_array = [];
    $stmt = $connect->prepare("SELECT $pole_1, $pole_2, $pole_3 FROM $table_name WHERE city_id = ?");
    $stmt->bind_param("i", $city_id);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $str_date = $row['timestamp'];
            $str_date = strtotime($str_date);
            $dates = date('l j/m', $str_date);
            $times = date('H:i', $str_date);
            $data_array[] = [
                'date' => $dates,
                'time' => $times,
                'temp' => $row['temperature'] . '&deg;',
                'description' => get_icon($row['rain_possibility'])
            ];
        }
    }
    $stmt->close();
    return $data_array;
}

/**
 * @param $rain_possibility
 * @return bool|string
 */
function get_icon($rain_possibility) {
    if ($rain_possibility <= 0.2) {
        return file_get_contents('../img/icons/002-sun.svg');
    }else if (($rain_possibility > 0.2) && ($rain_possibility <= 0.4)) {
        return file_get_contents('../img/icons/004-sky-1.svg');
    } else if (($rain_possibility > 0.4) && ($rain_possibility <= 0.6)) {
        return file_get_contents('../img/icons/005-sky.svg');
    } else if (($rain_possibility > 0.6) && ($rain_possibility <= 0.9)) {
        return file_get_contents('../img/icons/003-rain.svg');
    } else if ($rain_possibility > 0.9) {
        return file_get_contents('../img/icons/001-flash.svg');
    }
}
