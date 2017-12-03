$(document).ready(function () {
    $('#div_2').css('display', 'none');
    var cars = ['Audi TT', 'BMW', 'Hummer', 'McQueen', 'Mini', 'Volkswagen'];
    var carsLength = cars.length;
    var html = '';
    for (var i = 0; i < carsLength; i ++) {
        html += '<li><img src="img/' + (i + 1) + '.png" alt="' + cars[i] +
            '" width="30px" height="30px"/><span class="span_text">'
            + cars[i] + '</span></li>';
    }
    $('#ul').html(html);
    $('#div_1').click(function () {
        var delay = 500;
        if ($('#div_2').is(":visible")) {
            $('#div_2').slideUp(delay);
        } else {
            $('#div_2').slideDown(delay);
        }
    });
    $('li').mouseenter(function () {
        $(this).css('background-color', 'lightgrey');
    });
    $('li').mouseleave(function () {
      $(this).css('background-color', 'white');
    });
    $('li').click(function () {
        var html = $(this).html();
        $('#div_1').html(html);
        $('#div_2').slideUp(500);
    });
});