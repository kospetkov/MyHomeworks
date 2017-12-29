<?php
/**
 * @return bool|string
 */
function chartVisual() {
  $fileName = 'json/data.json';
  $dataArray = json_decode(file_get_contents($fileName), true);
  $car = $_POST['cars'];
  $dataArray[$car] ++;
  file_put_contents($fileName, json_encode($dataArray));
  echo file_get_contents($fileName, true);
}

?>

<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var result = JSON.parse('<?= chartVisual() ?>');
            var arr = [];
            for (var prop in result) {
                arr.push([prop, result[prop]]);
            }
            console.log(arr);
            arr.unshift(['Task', 'AUTO']);
            var data = google.visualization.arrayToDataTable(arr);
            var options = {
                title: 'your favorite car'
            };
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
        }
    </script>
</head>
<body>
<div id="piechart" class="piechart"></div>
</body>
</html>
