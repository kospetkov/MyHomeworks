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
    let items = '';
    for (let i = 0; i < IMAGES.length; i++) {
        items += '<li><img id="li_' + (i + 1) + '" src="' + API_URL +
            SMALL_SIZE + IMAGES[i] + '" alt=""/></li>';
        if (i === 0) {
            $('li').addClass('current');
        }
    }
    $('ul').append(items);
    $('#li_1').parent().addClass('current');
    $('.slider-previews img').click(function () {
        let current = $(this);
        $('li').removeClass('current');
        current.parent().addClass('current');
        let imgSrc = current.attr('src').replace(SMALL_SIZE, BIG_SIZE);
        $('.slider-current img').attr('src', imgSrc);
    });

    $('body').on("keydown", function (e) {
        if (e.keyCode !== 37 && e.keyCode !== 39) {
            return;
        }
        let index = +$('.current img').attr('id').replace('li_', '');
        $('li').removeClass('current');
        if (e.keyCode === 37) {
            if (index <= 1) {
                index = IMAGES.length;
            } else {
                index--;
            }
            imagesChange(index);
        } else if (e.keyCode === 39) {
            if (index >= IMAGES.length) {
                index = 1;
            } else {
                index ++;
            }
            imagesChange(index);
        }
    });
    function imagesChange(index) {
        let selector = $('#li_' + index + '');
        let newSrc = selector.attr('src').replace(SMALL_SIZE, BIG_SIZE);
        selector.parent().addClass('current');
        $('.slider-current img').attr('src', newSrc);
    }
});