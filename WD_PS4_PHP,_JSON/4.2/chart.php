<?php
/**
 * @return bool|string
 */
function chartVisual() {
  $fileName = 'json/data.json';
  $objJson = file_get_contents($fileName);
  $dataArray = json_decode($objJson, true);
  if (isset($_POST['bmw'])) {
      $dataArray['BMW'] ++;
  } else if (isset($_POST['audi'])) {
      $dataArray['AUDI'] ++;
  } else if (isset($_POST['vw'])) {
      $dataArray['VW'] ++;
  } else if (isset($_POST['hummer'])) {
      $dataArray['HUMMER'] ++;
  } else if (isset($_POST['mini'])) {
      $dataArray['MINI'] ++;
  } else if (isset($_POST['mc'])) {
      $dataArray['MC'] ++;
  }
  file_put_contents($fileName, json_encode($dataArray));
  $stringJson = file_get_contents($fileName, true);
  echo $stringJson;
}

?>

<html>
<head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var result = '<?= chartVisual() ?>'.replace(/[{}]/g, '').split(',');
            for (var i = 0, size = result.length; i < size; i ++) {
                result[i] = result[i].split(':');
                result[i][1] = +result[i][1];
            }
            result.unshift(['Task', 'AUTO']);
            var data = google.visualization.arrayToDataTable(result);
            var options = {
                title: 'your favorite car'
            };
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
        }
    </script>
</head>
<body>
<div id="piechart" style="width: 900px; height: 500px;"></div>
</body>
</html>
