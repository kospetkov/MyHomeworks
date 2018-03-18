<?php
include_once 'function.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
	<title>WD_PS4_PHP_JSON</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <h1 class="caption_for_vote">which car do you prefer?</h1>
    <div class="container">
        <form method="post" action="chart.php">
           <?php
           array_for_visible ();
           ?>
            <input
                type="submit"
                value="vote"
                class="button_for_form">
        </form>
    </div>
</body>
</html>
