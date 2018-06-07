$(document).ready(function () {
    const TIME = 500;
    let windowForMessage = $('.window_for_message');
    updateMsg();
    setTimeout(function update() {
        updateMsg();
        setTimeout(update, TIME);
    }, TIME);

    $('#form_chat').submit(function () {
        let textarea = $('.textarea');
        const MESSAGE = textarea.val();
        if (MESSAGE) {
            $.ajax({
                type: 'POST',
                url: '../php/add_msg.php',
                data: {
                    msg: MESSAGE
                },
                success(ressponce) {
                    if (ressponce) {
                        let res = JSON.parse(ressponce);
                        if (res.error) {
                            console.log(res[0]['error']);
                            return;
                        }
                        newMsg(res[0]);
                        windowForMessage.scrollTop(windowForMessage.prop('scrollHeight'));
                    }
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
                    windowForMessage.empty();
                    for (let i = 0; i < resLength; i++) {
                        let item = res[i];
                        newMsg(item);
                    }
                }
            }

        });
    }

    function newMsg(item) {
        let PForMsg = $('<p>', {class: 'p_for_msg'});
        PForMsg.attr({id: item.id});
        let time = new Date(item.date);
        let format = time.toLocaleTimeString('en-GB');
        let text = '<ins>[ ' + format + ' ]  ' + item.user + ' :</ins> ' + item.msg;
        PForMsg.append(text);
        windowForMessage.append(PForMsg);
    }
});