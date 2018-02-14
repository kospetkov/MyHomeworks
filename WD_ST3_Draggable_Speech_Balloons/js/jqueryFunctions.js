$(document).ready(function () {
    $('body').on('dblclick', ".content", function (e) {
        if (e.target.className !== 'content') {
            return;
        }
        console.log(e);
        let pos = $(this).offset();
        let elem_left = pos.left;
        let elem_top = pos.top;
        let x = e.pageX - elem_left;
        let y = e.pageY - elem_top;
        console.log("X: " + x + " Y: " + y);
        let elem = $('<div>', {class: 'upper_div'});
        elem.offset({top: y, left: x});
        let input = $('<input>', {class: 'upper_div_textarea', type: 'textarea'});
        let p = $('<p>', {class: 'p_for_text'});
        p.attr({style: 'display: none;'});
        elem.append(input);
        elem.append(p);
        $(this).append(elem);
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
            let y = elem.css('top');
            let x = elem.css('left');
            let myP = elem.find('.p_for_text');
            if (e.keyCode === 13) {
                if (value.length === 0) {
                    elem.remove();
                }
                input.remove();
                myP.text(value);
                myP.css({display: 'block'});
            }
            else {
                if (value.length === 0 && myP.find().length === 0 ) {
                    elem.remove();
                } else if (myP.find().length !== 0) {
                    input.remove();
                    myP.text(value);
                    myP.css({display: 'block'});
                    //let p = $('<p>', {class: 'p_for_text'});
                    //p.text(value);
                    //elem.append(p);
                }
            }
        }
    });
    $('.content').on('dblclick', ".upper_div", function (e) {
        let item = $(this);
        let myP = item.children();
        let myPText = myP.text();
        myP.attr({style: 'display: none;'});
        let newInput = $('<input>', {class: 'upper_div_textarea'});
        newInput.val(myPText);
        item.append(newInput);
        item.children().focus();
        let y = item.css('top');
        let x = item.css('left');
        let newDiv = $('<div>', {class: 'upper_div'});
        newDiv.css({'top': y, 'left': x});
    });
});