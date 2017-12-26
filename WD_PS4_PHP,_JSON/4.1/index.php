<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WD_PS4_PHP_JSON_4.1</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <?php include_once 'php/functionsForForms.php' ?>
</head>
<body>
    <div class="div_for_forms">
        <p class="p_for_forms">
            sum of numbers from -1000 to 1000
        </p>
        <form method="post">
            <input
                type="submit"
                name="submitOne"
                value="find out the answer"
                title="sum of numbers"/>
            <p class="p_for_forms"><?= sumForNumbersOne() ?></p>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">
            sum of numbers from -1000 to 1000 which end at 2, 3, and 7
        </p>
        <form method="post">
            <input
                type="submit"
                name="submitTwo"
                value="find out the answer"
                title="sum of numbers"/>
            <p class="p_for_forms"><?= sumForNumbersTwo() ?></p>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">Christmas tree</p>
        <form method="post">
            <input
                type="submit"
                name="ChristmasTree"
                value="build"
                title="build christmas tree"/>
            <div><?= christmasTreeBuild() ?></div>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">Chess board</p>
        <form method="post">
            <label>enter width board
            <input
                type="text"
                name="width"
                title="enter width"/></label>
            <label>enter height board
            <input
                type="text"
                name="height"
                title="enter height"/></label>
            <input
                type="submit"
                name="chessBoard"
                value="build"
                title="click to create board"/>
            <div><?= chessBoardBuild() ?></div>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">the sum of the digits in the number</p>
        <form method="post">
            <label><input
                type="text"
                name="number"
                title="enter the number"/>number</label>
            <input
                type="submit"
                name="sumOfNumber"
                value="to count"
                title="click to calculate"/>
            <p class="p_for_forms"><?= sumForNumber() ?></p>
        </form>
    </div>
    <div class="div_for_forms">
        <p class="p_for_forms">manipulating the array</p>
        <form method="post">
            <input
                type="submit"
                name="manipulatingArray"
                value="array..."
                title="output array"/>
            <p class="p_for_forms"><?= manipulatingTheArray() ?></p>
        </form>
    </div>
</body>
</html>