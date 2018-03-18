<?php
function array_for_visible ()
{
    $arr['0'] = array(
        'id' => 'bmw',
        'type' => 'radio',
        'name' => 'cars',
        'value' => 'BMW'
    );
    $arr['1'] = array(
        'id' => 'audi',
        'type' => 'radio',
        'name' => 'cars',
        'value' => 'AUDI'
    );
    $arr['2'] = array(
        'id' => 'vw',
        'type' => 'radio',
        'name' => 'cars',
        'value' => 'VW'
    );
    $arr['3'] = array(
        'id' => 'hummer',
        'type' => 'radio',
        'name' => 'cars',
        'value' => 'HUMMER'
    );
    $arr['4'] = array(
        'id' => 'mini',
        'type' => 'radio',
        'name' => 'cars',
        'value' => 'MINI'
    );
    $arr['5'] = array(
        'id' => 'mc',
        'type' => 'radio',
        'name' => 'cars',
        'value' => 'MC'
    );
    for ($i = 0; $i < count($arr); $i ++) {
            echo '<label for="' . $arr[$i]['id'] . '"><img class="image_for_form" src="img/' . $arr[$i]['id'] . '.png"/>
                <input
                    id="' . $arr[$i]['id'] . '"
                    type="' . $arr[$i]['type'] . '"
                    name="' . $arr[$i]['name'] . '"
                    value="' . $arr[$i]['value'] . '"/></label>';
        }
}