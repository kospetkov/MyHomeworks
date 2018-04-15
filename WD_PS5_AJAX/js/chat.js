$(document).ready(function () {
    const TIME = 1000;
    let window = $('.window_for_massedg');
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
                url: 'functions_for_chat.php',
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
});

function updateMsg() {
    let p = $('p.p_for_msg');
    let first = p.first();
    let idFirst = first.attr('id');
    let last = p.last();
    let idLast = last.attr('id');
    $.ajax({
        type: 'POST',
        url: 'update_msg.php',
        data: {
            id_first: idFirst,
            id_last: idLast
        },
        success(ressponce) {
            if (ressponce) {
                let res = JSON.parse(ressponce);
                let window = $('.window_for_massedg');
                window.empty();
                let resLength = res.length;
                for (let i = 0; i < resLength; i ++) {
                    let p = $('<p>', {class: 'p_for_msg'});
                    p.attr({id: res[i].id});
                    let time = new Date(+res.date);
                    let format = formatDate(time);
                    let pText = res[i].user + ' ;   [' + format + '] ;  " ' + res[i].msg + ' "';
                    console.log(pText);
                    p.text(pText);
                    window.append(p);
                }
            }
        }
    });
}
function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
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
    return year + '/' + month + '/' + day + '  ;  ' + hour + ':' + minutes + ':' + seconds;
}