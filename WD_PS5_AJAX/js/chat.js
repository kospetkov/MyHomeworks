$(document).ready(function () {
    const TIME = 1000;
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
        //msg = msg.replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
        //item = item.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        let divForMsg = $('<div>', {class: 'div_for_msg'});
        divForMsg.attr({id: item.id});
        let time = new Date(+item.date);
        let format = time.toLocaleTimeString('en-GB');
        let text = '     [ ' + format + ' ]  ' + item.user + '   :';
        divForMsg.append($('<div>', {class: 'span_for_text1'}).append(text));
        let userMsg = addSmile(divForMsg, item.msg);
        divForMsg.append(userMsg);
        windowForMessage.append(divForMsg);
        windowForMessage.scrollTop(windowForMessage.prop('scrollHeight'));
    }

    function addSmile(divForMsg, string) {
        if (string) {
            let index = 0;
            let smile;
            if (isSmile(string)) {
                index = string.indexOf(':');
                if (string.charAt(index + 1) === ')') {
                    smile = $('<img src="../img/smile.gif">', {alt: 'smile'});
                    index = string.indexOf(':)');
                }
                else if (string.charAt(index + 1) === '(') {
                    smile = $('<img src="../img/sad.gif">', {alt: 'sad'});
                    index = string.indexOf(':(');
                }

                let end = index + 2;
                let str = string.substring(0, index);
                let strEnd = string.substring(end);
                let span = $('<div>', {class: 'span_for_text'});
                span.text(str);
                divForMsg.append(span);
                let divForSmile = $('<div>');
                divForSmile.append(smile);
                divForMsg.append(divForSmile);
                if (isSmile(strEnd)) {
                    addSmile(divForMsg, strEnd);
                }
                else {
                    let spanEnd = $('<div>', {class: 'span_for_text'});
                    spanEnd.append(strEnd);
                    divForMsg.append(spanEnd);
                }
            }
            else {
                let span = $('<div>', {class: 'span_for_text'});
                span.append(string);
                divForMsg.append(span);
            }
        }
    }

    function isSmile(string) {
        if ((string.indexOf(':)') >= 0) || (string.indexOf(':(') >= 0)) {
            return true;
        }
        return false;
    }
});