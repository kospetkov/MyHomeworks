const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
    '?image=1080',
    '?image=1079',
    '?image=1069',
    '?image=1063',
    '?image=1050',
    '?image=1039'
];

$(document).ready(function () {
    var size = IMAGES.length;
    for (var i = 0; i < size; i++) {
        $('ul').append('<li id="li_' + (i + 1) + '"><img src="' + API_URL +
            SMALL_SIZE + IMAGES[i] + '" alt=""/></li>');
    }
    $('#li_1').addClass('current');
    $('.slider-previews img').click(function () {
        $('li').removeClass('current');
        var parent = $(this).parent();
        parent.addClass('current');
        var attribute = $(this).attr('src');
        var imgSrc = attribute.replace(SMALL_SIZE, BIG_SIZE);
        $('.slider-current img').attr('src', imgSrc);
    });

    $('body').on("keydown", function (e) {
        var current = $('.current');
        var id = current.attr('id');
        console.log(id);
        var index = +id.replace('li_', '');
        console.log(index);
        var curr = current.attr('src');
        console.log(curr);
        $('#li_' + index + '').removeClass('current');
        console.log(newSrc);
        var oldIndex = index;
        if (e.keyCode === 37) {
            if (index >= IMAGES.length) {
                index = 1;
            } else {
                index--;
            }
            var newSrc = curr.replace(SMALL_SIZE + IMAGES[oldIndex], BIG_SIZE + IMAGES[index]);
            $('.slider-current #li_' + index + '').attr('src', newSrc).addClass('current');


        } else if (e.keyCode === 39) {
        }
    });
});