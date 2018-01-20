$(document).ready(function () {
    $('.content').dblclick(function (e) {
        let pos = $(this).offset();
        let elem_left = pos.left;
        let elem_top = pos.top;
        let x = e.pageX - elem_left;
        let y = e.pageY - elem_top;
        console.log("X: " + y + " Y: " + y);
        let elem = $('<div>', {'class': 'upper_div'});
        elem.offset({top: y, left: x});
        let form = $('<form>');
        let input = $('<input>', {'class': 'upper_div_textarea', 'type': 'textarea'});
        form.append(input);
        elem.append(form);
        $(this).append(elem);
        input.focus();
        $('.upper_div').draggable({
            containment: 'parent',
        });
    });
    $('body').keydown(function (e) {
        //if (e.keyCode !== 13 || e.keyCode !== 27) {
        //    console.log(e.keyCode);
        //    return;
       // }
        let input = $('.upper_div_textarea');
        let value = input.val();
        let elem = $('.upper_div');
        if (e.keyCode === 13) {
            input.remove();
            let divForText = $('<div>', {'class': 'div_for_text'});
            divForText.text(value);
            elem.append(divForText);
        }
    });
    $('.div_for_text').dblclick(function (e) {
        e.stopPropagation();
        let elem = $('.div_for_text');
        if (elem.find('.upper_div_textarea') < 1) {
            let text = elem.text();
            elem.text('');
            let input = $('<input>', {'class': 'upper_div_textarea', 'type': 'textarea'});
            elem.append(input);
            input.focus();
        }
    });
});
