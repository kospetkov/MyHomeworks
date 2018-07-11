<?php

define('PERIOD_FORECAST', '8');

$dataArray = json_decode(file_get_contents('http://api.openweathermap.org/data/2.5/forecast?q=Kropyvnytskyi&APPID=e7899704b54b8536bda7eff86668b6bb'), true);
$newDataArray = [];

for ($i = 0; $i < PERIOD_FORECAST; $i ++) {
    $weatherMain = $dataArray['list'][4]['weather'][0]['main'];
    $weatherDescription = $dataArray['list'][$i]['weather'][0]['description'];
    $weatherIcon = $dataArray['list'][$i]['weather'][0]['icon'];
    $temp = $dataArray['list'][$i]['main']['temp'];
    $temp = ceil($temp - 273.15) . '&deg;';
    $strDate = $dataArray['list'][$i]['dt'];
    $dates = date('l j/m', $strDate);
    $times = date('H:i', $strDate);
    $newDataArray[] = [
        'date' => $dates,
        'time' => $times,
        'temp' => $temp,
        'description' => getIcon($weatherDescription)
    ];
}

echo json_encode($newDataArray);

/**
 * @param $weather_description
 * @return bool|string
 */
function getIcon($weatherDescription) {
    if ($weatherDescription === 'clear sky') {
        return file_get_contents('../img/icons/002-sun.svg');
    } elseif (($weatherDescription === 'broken clouds') || ($weatherDescription === 'few clouds') || ($weatherDescription === 'scattered clouds')) {
        return file_get_contents('../img/icons/004-sky-1.svg');
    } elseif (($weatherDescription === 'light rain') || ($weatherDescription === 'moderate rain')) {
        return file_get_contents('../img/icons/003-rain.svg');
    }
}