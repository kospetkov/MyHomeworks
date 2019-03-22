


$(document).ready(function(){
    $("#gallery-picker-carousel").owlCarousel({
        items: 4,
        margin: 16
    });
    var owl = $("#gallery-picker-carousel").owlCarousel();
    $('.news-widget-gallery__picker-next').on('click', function () {
        owl.trigger('prev.owl.carousel');
    })
    $('.news-widget-gallery__picker-prev').on('click', function () {
        owl.trigger('next.owl.carousel');
    })
    $('#news-widget-gallery').on('slide.bs.carousel', function (e) {
        if (e.direction === 'right') {
            owl.trigger('prev.owl.carousel');
        } else if (e.direction === 'left') {
            owl.trigger('next.owl.carousel');
        }
    })
});