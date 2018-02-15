$(document).ready(function () {
    $('body').on('dblclick', ".content", function (e) {
        if (e.target.className !== 'content') {
            return;
        }
        let item = $(this);
        let pos = item.offset();
        let elem_left = pos.left;
        let elem_top = pos.top;
        let x = e.pageX - elem_left;
        let y = e.pageY - elem_top;
        let elem = $('<div>', {class: 'upper_div'});
        elem.offset({top: y, left: x});
        let input = $('<input>', {class: 'upper_div_textarea', type: 'textarea'});
        let p = $('<p>', {class: 'p_for_text'});
        p.attr({style: 'display: none;'});
        elem.append(input);
        elem.append(p);
        item.append(elem);
        input.focus();
        $(elem).draggable({
            containment: 'parent',
        });
    });
    $('.content').on('keydown', function (e) {
        if ($('.upper_div_textarea').is( ':focus' )) {
            if (e.keyCode !== 13 && e.keyCode !== 27) {
                return;
            }
            let input = $(document.activeElement);
            let elem = input.parent();
            let value = input.val();
            let p = elem.find('.p_for_text');
            if (e.keyCode === 13) {
                if (value.length === 0) {
                    elem.remove();
                }
                input.remove();
                p.text(value);
                p.css({display: 'block'});
            }
            else if (e.keyCode === 27) {
                if (value.length === 0 && p.length === 0 ) {
                    elem.remove();
                } else if (p.length > 0) {
                    input.remove();
                    p.css({display: 'block'});
                }
            }
        }
    });
    $('.content').on('dblclick', ".upper_div", function (e) {
        let item = $(this);
        let p = item.children();
        let pText = p.text();
        p.attr({style: 'display: none;'});
        let input = $('<input>', {class: 'upper_div_textarea'});
        input.val(pText);
        item.append(input);
        item.children().focus();
    });
});