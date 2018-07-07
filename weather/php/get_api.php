<?php

define('PERIOD_FORECAST', '8');
$dataArray = json_decode(file_get_contents('http://api.openweathermap.org/data/2.5/forecast?q=Kropyvnytskyi&APPID=e7899704b54b8536bda7eff86668b6bb'), true);
$arr = [];
for ($i = 0; $i < PERIOD_FORECAST; $i ++) {
    $weather_main = $dataArray['list'][4]['weather'][0]['main'];
    $weather_description = $dataArray['list'][$i]['weather'][0]['description'];
    $weather_icon = $dataArray['list'][$i]['weather'][0]['icon'];
    $temp = $dataArray['list'][$i]['main']['temp'];
    $temp = ceil($temp - 273.15) . '&deg;';
    $str_date = $dataArray['list'][$i]['dt'];
    $dates = date('l j/m', $str_date);
    $times = date('H:i', $str_date);
    $arr[] = [
        'date' => $dates,
        'time' => $times,
        'temp' => $temp,
        'description' => get_icon($weather_description)
    ];
}

echo json_encode($arr);

/**
 * @param $weather_description
 * @return bool|string
 */
function get_icon($weather_description) {
    if ($weather_description === 'clear sky') {
        return file_get_contents('../img/icons/002-sun.svg');
    } else if (($weather_description === 'broken clouds') || ($weather_description === 'few clouds') || ($weather_description === 'scattered clouds')) {
        return file_get_contents('../img/icons/004-sky-1.svg');
    } else if (($weather_description === 'light rain') || ($weather_description === 'moderate rain')) {
        return file_get_contents('../img/icons/003-rain.svg');
    }
}