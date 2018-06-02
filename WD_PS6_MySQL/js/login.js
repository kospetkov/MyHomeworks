$(document).ready(function () {
    $('#form').submit(function () {
        let userName = $('#userName').val();
        let password = $('#password').val();
        if (!userName || !password) {
            //$('.massedg').text('login and password fields must be filled in');
            let p = $('.message');
            p.css({display: 'block'});
            p.text('login and password fields must be filled in');
            $('.p2_form').css({display: 'none'});
            $('#password').css({border: '5px solid red'});
            return false;
        }
        $.ajax({
            type: 'POST',
            url: 'sql_php/login.php',
            data: {
                login: userName,
                pass: password
            },
            success: function (ressponce) {
                if (ressponce) {
                    console.log(ressponce);
                    let res = JSON.parse(ressponce);
                    console.log('do window');
                    if (res.error) {
                        console.log(res.error);
                        return;
                    }
                    else if (res.password) {
                        let p = $('.message');
                        p.css({display: 'block'});
                        p.text('incorrect password');
                        $('.p2_form').css({display: 'none'});
                        $('#password').css({border: '5px solid red'});
                        return;
                    }
                }
                console.log('window');
                window.location.href = 'php/chat.php';
            }
        });
        return false;
    });
});