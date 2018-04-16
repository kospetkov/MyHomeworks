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
                url: 'add_msg.php',
                data: {
                    msg: msg
                },
                success(ressponce) {
                    let res = JSON.parse(ressponce);
                    console.log(res);
                        let p = $('<p>', {class: 'p_for_msg'});
                        p.attr({id: res.id});
                        let time = new Date(+res.date);
                        let format = formatDate(time);
                        let pText = res.user + ' ;   [' + format + '] ;  " ' + res.msg + ' "';
                        console.log(pText);
                        p.text(pText);
                        window.append(p);
                    }
            });
            textarea.val('');
        }
        return false;
    });

function updateMsg() {
    $.ajax({
        type: 'POST',
        url: 'update_msg.php',
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
                        let p = $('<p>', {class: 'p_for_msg'});
                        p.attr({id: item.id});
                        let time = new Date(+item.date);
                        let format = formatDate(time);
                        let pText = '     [ ' + format + ' ]  ' + item.user + ':     ' + item.msg;
                        console.log(pText);
                        p.text(pText);
                        window.append(p);
                    }
                }
            }
        }
    });
}
function formatDate(date) {
    let hour = date.getHours();
    if (hour <= 9) {
        hour = '0' + hour;
    }
    let minutes = date.getMinutes();
    if (minutes <= 9) {
        minutes = '0' + minutes;
    }
    let seconds = date.getSeconds();
    if (seconds <= 9) {
        seconds = '0' + seconds;
    }
    return hour + ':' + minutes + ':' + seconds;
}
});