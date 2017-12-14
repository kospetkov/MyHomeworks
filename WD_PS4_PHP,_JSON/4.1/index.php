<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WD_PS4_PHP_JSON_4.1</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <?php include_once('php/functions_for_forms.php') ?>
</head>
<body>
    <div class="div_for_forms">
        <p class="p_for_forms">
            sum of numbers from -1000 to 1000
        </p>
        <form method="post">
            <input type="submit" name="submit_1" value="find out the answer"/>
            <p class="p_for_forms"><?= sum_for_numbers_1(); ?></p>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">
            sum of numbers from -1000 to 1000 which end at 2, 3, and 7
        </p>
        <form method="post">
            <input type="submit" name="submit_2" value="find out the answer"/>
            <p class="p_for_forms"><?= sum_for_numbers_2(); ?></p>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">Christmas tree</p>
        <form method="post">
            <input type="submit" name="Christmas_tree" value="build"/>
            <div><?= christmasTreeBuild(); ?></div>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">Chess board</p>
        <form method="post">
            <label>enter width board
            <input type="text" name="width"/></label>
            <label>enter height board
            <input type="text" name="height"/></label>
            <input type="submit" name="chess_board" value="build"/>
            <div><?= chessBoardBuild(); ?></div>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">the sum of the digits in the number</p>
        <form method="post">
            <input type="text" name="number"/>
            <input type="submit" name="sum_of_number" value="to count"/>
            <p class="p_for_forms"><?= sumForNumber(); ?></p>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">manipulating the array</p>
        <form method="post">
            <input type="submit" name="manipulating_aray" value="array..."/>
            <p class="p_for_forms"><?= manipulatingTheArray(); ?></p>
        </form>
    </div>
</body>
</html>