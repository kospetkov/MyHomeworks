$(document).ready(function () {
    $('#form').submit(function () {
        const USER_NAME = $('#userName').val();
        const PASSWORD = $('#password').val();

        if (!USER_NAME || !PASSWORD) {
            let message = 'login and password fields must be filled in';
            errorMessage(message);
            return false;
        }
        $.ajax({
            type: 'POST',
            url: 'php/login.php',
            data: {
                login: USER_NAME,
                pass: PASSWORD
            },
            success: function (ressponce) {
                if (ressponce) {
                    let res = JSON.parse(ressponce);
                    if (res.error) {
                        console.log(res);
                        return;
                    }
                    else if (res.password) {
                        let message = 'incorrect password';
                        errorMessage(message);
                        return;
                    }
                }
                window.location.href = 'php/chat.php';
            }
        });
        return false;
    });

    function errorMessage(message) {
        let errorMessage = $('.error_message');
        errorMessage.css({display: 'block'});
        errorMessage.text(message);
        $('.p2_form').css({display: 'none'});
        $('#password').css({border: '5px solid red'});
    }
});