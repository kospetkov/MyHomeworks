$(document).ready(function() {
    var offsetTop = 100;
    var delay = 1000;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offsetTop) {
            $('.top_style').fadeIn();
        } else {
            $('.top_style').fadeOut();
        }
    });
    $('.top_style').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
    $('a').click(function () {
        var delay = 1000;
        var attrValue = $(this).attr('href');
        var offset = $(attrValue).offset().top;
        $('html,body').animate({scrollTop: offset}, delay);
    });
});
