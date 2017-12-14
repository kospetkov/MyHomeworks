<?php
function sum_for_numbers_1() {
	if (isset($_POST['submit_1'])) {
		$sum = 0;
		for ($i = -1000; $i <= 1000; $i++) {
			$sum += $i;
		}
		return $sum;
	}
}

function sum_for_numbers_2() {
	if (isset($_POST['submit_2'])) {
		$sum = 0;
		for ($i = -1000; $i <= 1000; $i ++) {
			$mod = abs($i) % 10;
			if (($mod === 2) || ($mod === 3) || ($mod === 7)) {
				$sum += $i;
			}
		}
		return $sum;
	}
}

function christmasTreeBuild() {
	if (isset($_POST['Christmas_tree'])) {
		$size = 50;
		$star = '*';
		for ($i = 0; $i < $size; $i ++) {
			echo "<p>$star</p>";
			$star .= '*';
		}
	}
}

function chessBoardBuild() {
	if (isset($_POST['chess_board'])) {
		$width = $_POST['width'];
		$height = $_POST['height'];
		$chess_board = '<div class="chess_style" style="height: ' . ($height * 60) .
			'px; width: ' . ($width * 45) . 'px;">';
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
		return $chess_board;
	}
}

function sumForNumber() {
	if (isset($_POST['sum_of_number'])) {
		$str_number = (string)abs($_POST['number']);
		return array_sum(str_split($str_number));
	}
}

function manipulatingTheArray() {
	if (isset($_POST['manipulating_aray'])) {
		$arr = array();
		for ($i = 0; $i < 100; $i++) {
			$arr[$i] = rand(1, 10);
		}
		$newArr = array_unique($arr);
		sort($newArr);
		$endArray = array_reverse($newArr);
		print_r($endArray);
	}
}
