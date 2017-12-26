<?php
function sumForNumbersOne() {
	if (isset($_POST['submitOne'])) {
		$sum = 0;
		for ($i = -1000; $i <= 1000; $i++) {
			$sum += $i;
		}
		echo $sum;
	}
}

function sumForNumbersTwo() {
	if (isset($_POST['submitTwo'])) {
		$sum = 0;
		for ($i = -1000; $i <= 1000; $i ++) {
			$mod = abs($i) % 10;
			if (($mod === 2) || ($mod === 3) || ($mod === 7)) {
				$sum += $i;
			}
		}
		echo $sum;
	}
}

function christmasTreeBuild() {
	if (isset($_POST['ChristmasTree'])) {
		$size = 50;
		$star = '*';
		for ($i = 0; $i < $size; $i ++) {
			echo "<p>$star</p>";
			$star .= '*';
		}
	}
}

function chessBoardBuild() {
	if (isset($_POST['chessBoard'])) {
		$width = $_POST['width'];
		$height = $_POST['height'];
		$chess_board = '<div class="board_for_chess" style="height: ' . ($height * 60) .
			'px; width: ' . ($width * 60) . 'px;">';
		for ($i = 0; $i < $height; $i ++) {
			for($j = 0; $j < $width; $j ++) {
				if (($i + $j) % 2 === 0) {
					$chess_board .= '<div class="board_black"></div>';
				} else {
					$chess_board .= '<div class="board_white"></div>';
				}
			}
		}
		$chess_board .= '</div>';
		echo $chess_board;
	}
}

function sumForNumber() {
	if (isset($_POST['sumOfNumber'])) {
		$str_number = (string)abs($_POST['number']);
		echo array_sum(str_split($str_number));
	}
}

function manipulatingTheArray() {
	if (isset($_POST['manipulatingArray'])) {
		$arr = array();
		for ($i = 0; $i < 100; $i++) {
			$arr[$i] = mt_rand(1, 10);
		}
		$newArr = array_unique($arr);
		sort($newArr);
		$endArray = array_reverse($newArr);
		print_r($endArray);
	}
}
