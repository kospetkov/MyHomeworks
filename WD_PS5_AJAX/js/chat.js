$(document).ready(function () {
    const TIME = 100000;
    let first = 0;
    let last = 0;
    let windowForMessage = $('.window_for_message');
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
                    if (res.error) {
                        onsole.log(res.error);
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
                    let res = JSON.parse(ressponce);
                    let resLength = res.length;
                    let idFirst = res[0].id;
                    let idLast = res[resLength - 1].id;
                    if ((first < idFirst) || (last < idLast)) {
                        first = idFirst;
                        last = idLast;
                        windowForMessage.empty();
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
        let itemMsg = item.msg;
        console.log(itemMsg);
        let PForMsg = $('<p>', {class: 'p_for_msg'});
        PForMsg.attr({id: item.id});
        let time = new Date(+item.date);
        let format = time.toLocaleTimeString('en-GB');
        let text = '<ins>[ ' + format + ' ]  ' + item.user + ' :</ins> ' + itemMsg;
        PForMsg.append(text);
        windowForMessage.append(PForMsg);
        windowForMessage.scrollTop(windowForMessage.prop('scrollHeight'));
    }
});