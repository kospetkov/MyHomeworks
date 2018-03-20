<?php
include_once 'array_for_vote.php';
function array_for_visible($arr)
{
    for ($i = 0; $i < count($arr); $i ++) {
            echo '<label for="' . $arr[$i]['id'] . '"><img class="image_for_form" src="../img/' . $arr[$i]['id'] . '.png"/>
                <input
                    id="' . $arr[$i]['id'] . '"
                    type="' . $arr[$i]['type'] . '"
                    name="' . $arr[$i]['name'] . '"
                    value="' . $arr[$i]['value'] . '"/></label>';
        }
}