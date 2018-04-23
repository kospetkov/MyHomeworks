$(document).ready(function () {
    const TIME = 100000;
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
        let p = $('<div>', {class: 'p_for_msg'});
        p.attr({id: item.id});
        let time = new Date(+item.date);
        let format = time.toLocaleTimeString('en-GB');
        let pText = '     [ ' + format + ' ]  ' + item.user + '   :';
        //console.log(pText);
        p.append(pText);
        //let smile = $('<img src="../img/smile.gif">', {class: 'smile', alt: 'smile'});
        let userMsg = addSmile(p, item.msg);
        p.append(userMsg);
        //console.log(p);
        window.append(p);
    }

    function addSmile(divForMsg, string) {
        if (string) {
            if (isSmile(string)) {
                let smile = $('<img src="../img/smile.gif">', {alt: 'smile'});
                console.log('smile');
                replaceImg(divForMsg, string, smile);
            }
            else if (isSad(string)) {
                let sad = $('<img src="../img/sad.gif">', {alt: 'sad'});
                console.log('sad');
                replaceImg(divForMsg, string, sad);
            }
        }
    }

    function replaceImg(item, string, image) {
        let index = string.indexOf(':)');
        let end = index + 2;
        let str = string.substring(0, index);
        console.log(str);
        let strEnd = string.substring(end);
        console.log(strEnd);
        let span = $('<span>');
        span.append(str);
        item.append(span);
        let divForSmile = $('<div>');
        divForSmile.append(image);
        item.append(divForSmile);
        console.log('spanchick');
        console.log(span);
        if (isSmile(strEnd)) {
            console.log('конец строки');
            addSmile(item, strEnd);
        }
        else {
            let span2 = $('<span>');
            span2.append(strEnd);
            item.append(span2);
        }
    }

    function isSmile(string) {
        if (string.indexOf(':)') >= 0) {
            return true;
        }
        return false;
    }
    function isSad(string) {
        if (string.indexOf(':(') >= 0) {
            return true;
        }
        return false;
    }
});