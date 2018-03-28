$(document).ready(function () {
    var id = 0;
    $.getJSON('json/data.json', function (data) {
        for (var i in data) {
            let item = data[i];
            let y = item.top;
            let x = item.left;
            let massadg = item.msg;
            id = item.ident;
            let elem = $('<div>', {class: 'upper_div'});
            elem.attr({id: 'id_' + i});
            elem.css({top: y, left: x});
            let p = $('<p>', {class: 'p_for_text'});
            p.text(massadg);
            elem.append(p);
            let input = $('<input>', {class: 'upper_div_textarea'});
            input.css({display: 'none'});
            elem.append(input);
            $('.content').append(elem);
        }

        $('.upper_div').draggable({
            containment: 'parent',
            stop: function(event, ui) {
                let x = ui.position.left;
                let y = ui.position.top;
                let idElem = +$(this).attr('id').replace('id_', '');
                $.ajax({
                    type: 'POST',
                    url: 'php/updateCoordInJson.php',
                    data: {
                        "id": idElem,
                        "top": y,
                        "left": x,
                        "ident": idElem
                    }
                });
            },
        });
    });

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
        elem.attr({id: 'id_' + id});
        id ++;
        let input = $('<input>', {class: 'upper_div_textarea', type: 'textarea'});
        let p = $('<p>', {class: 'p_for_text'});
        p.attr({style: 'display: none;'});
        elem.append(input);
        elem.append(p);
        item.append(elem);
        input.focus();
        $(elem).draggable({
            containment: 'parent',
            stop: function(event, ui) {
                let x = ui.position.left;
                let y = ui.position.top;
                let idElem = +elem.attr('id').replace('id_', '');
                $.ajax({
                    type: 'POST',
                    url: 'php/updateCoordInJson.php',
                    data: {
                        "id": idElem,
                        "top": y,
                        "left": x,
                        "ident": idElem
                    }
                });
            },
        });
    });

    $('.content').on('blur', '.upper_div_textarea',  function(e){
        let input = $(this);
        let elem = input.parent();
        let value = input.val();
        let p = elem.find('.p_for_text');
        let prevText = p.text();

        if (prevText.length === 0) {
            elem.remove();
        } else {
            input.css({display: 'none'});
            p.css({display: 'block'});
        }
    });

    $('.content').on('keydown', function (e) {
        if ($('.upper_div_textarea').is( ':focus' )) {
            if (e.keyCode !== 13 && e.keyCode !== 27) {
                return;
            }
            let input = $(document.activeElement);
            let elem = input.parent();
            let y = elem.css('top');
            let x = elem.css('left');
            let value = input.val();
            let p = elem.find('.p_for_text');
            if (e.keyCode === 13) {

                if (value.length === 0 && elem.attr('id')) {

                    let idElem = +elem.attr('id').replace('id_', '');

                    console.log(elem);
                    $.ajax({
                        type: 'POST',
                        url: 'php/deletingInJson.php',
                        data: {"id": idElem}
                    });
                    elem.remove();

                } else {
                    input.css({display: 'none'});
                    p.text(value);
                    p.css({display: 'block'});
                    if (elem.attr('id')) {
                        // let idElem = +elem.attr('id').replace('id_', '');
                        // $.ajax({
                        //     type: 'POST',
                        //     url: 'php/addInJson.php',
                        //     data: {
                        //         "id": idElem,
                        //         "top": y,
                        //         "left": x,
                        //         "msg": value,
                        //         "ident": idElem
                        //     }
                        // });
                    } else {
                        // elem.attr({id: 'id_' + id});
                        // id ++;
                        // $.ajax({
                        //     type: 'POST',
                        //     url: 'php/addInJson.php',
                        //     data: {
                        //         "id": id,
                        //         "top": y,
                        //         "left": x,
                        //         "msg": value,
                        //         "ident": id
                        //     }
                        // });
                    }
                }
            }
            else if (e.keyCode === 27) {
                if (value.length === 0 && p.length === 0 ) {
                    elem.remove();
                } else if (p.length > 0) {
                    input.css({display: 'none'});
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

        let input = item.find('.upper_div_textarea');
        input.val(pText);
        input.css({display: 'block'});
        input.focus();
    });
});