<?php
/**
 * @return bool|string
 */
function chartVisual() {
  $fileName = 'json/object.json';
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
  return $stringJson;
};

$data = chartVisual();
?>

<html>
<head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var result = '<?php echo $data; ?>';
            var resul = result.replace(/[{}]/g, '').split(',');
            for (var i = 0; i < resul.length; i ++) {
                resul[i] = resul[i].split(':');
                resul[i][1] = +resul[i][1];
            }
            resul.unshift(['Task', 'AUTO']);
            var data = google.visualization.arrayToDataTable(resul);
            var options = {
                title: 'My Daily Activities'
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
