$(document).ready(function () {
    $('#div_1').click(function () {
        $('#div_2').slideToggle()
    });
    $('li').mouseenter(function () {
        $(this).css('background-color', 'lightgrey');
    });
    $('li').mouseleave(function () {
      $(this).css('background-color', 'white');
    });
});