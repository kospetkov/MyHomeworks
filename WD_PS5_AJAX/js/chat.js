$(document).ready(function () {
    const TIME = 1000;
    let first = 0;
    let last = 0;
    let window = $('.window_for_massedg');
    updateMsg();
    setTimeout(function update() {
        updateMsg();
        setTimeout(update, TIME);
    }, TIME);

    $('#form_chat').submit(function () {
        let textarea = $('.textarea');
        let msg = textarea.val();
        if (msg) {
            $.ajax({
                type: 'POST',
                url: '../php/add_msg.php',
                data: {
                    msg: msg
                },
                success(ressponce) {
                    let res = JSON.parse(ressponce);
                    console.log(res);
                    if (res.error) {
                        console.log(res.error);
                        return;
                    }
                    newMsg(res);
                }
            });
            textarea.val('');
        }
        return false;
    });

    function updateMsg() {
        $.ajax({
            type: 'POST',
            url: '../php/update_msg.php',
            success(ressponce) {
                if (ressponce) {
                    console.log(ressponce);
                    let res = JSON.parse(ressponce);
                    let resLength = res.length;
                    let idFirst = res[0].id;
                    let idLast = res[resLength - 1].id;
                    if ((first < idFirst) || (last < idLast)) {
                        first = idFirst;
                        last = idLast;
                        window.empty();
                        for (let i = 0; i < resLength; i++) {
                            let item = res[i];
                            newMsg(item);
                        }
                    }
                }
            }
        });
    }

    function newMsg(item) {
        let p = $('<p>', {class: 'p_for_msg'});
        p.attr({id: item.id});
        let time = new Date(+item.date);
        console.log(time.toLocaleTimeString('en-GB'));
        let format = time.toLocaleTimeString('en-GB');
        let pText = '     [ ' + format + ' ]  ' + item.user + ':     ' + item.msg;
        console.log(pText);
        p.text(pText);
        window.append(p);
    }
});