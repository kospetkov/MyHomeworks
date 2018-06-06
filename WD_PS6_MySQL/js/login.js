$(document).ready(function () {
    $('#form').submit(function () {
        let userName = $('#userName').val();
        let password = $('#password').val();
        if (!userName || !password) {
            let message = 'login and password fields must be filled in';
            errorMessage(message);
            return false;
        }
        $.ajax({
            type: 'POST',
            url: '../php/login.php',
            data: {
                login: userName,
                pass: password
            },
            success: function (ressponce) {
                console.log(ressponce);

                if (ressponce) {
                    let res = JSON.parse(ressponce);
                    console.log(res);

                    if (res.error) {
                        console.log(res);
                        return;
                    }
                    else if (res.password) {
                        console.log(res.password);
                        let message = 'incorrect password';
                        errorMessage(message);
                        return;
                    }
                    else if (res.status) {
                        window.location.href = '../php/chat.php';
                    }
                }
            }
        });
        return false;
    });

    function errorMessage(message) {
        let p = $('.message');
        p.css({display: 'block'});
        p.text(message);
        $('.p2_form').css({display: 'none'});
        $('#password').css({border: '5px solid red'});
    }
});