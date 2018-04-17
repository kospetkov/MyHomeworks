$(document).ready(function () {
    $('#form').submit(function () {
        let userName = $('#userName').val();
        let password = $('#password').val();
        if (!userName || !password) {
            $('.massedg').text('login and password fields must be filled in');
            return false;
        }
        $.ajax({
            type: 'POST',
            url: 'php/login.php',
            data: {
                login: userName,
                pass: password
            },
            success: function (ressponce) {
                if (ressponce) {
                    console.log(ressponce);
                    let res = JSON.parse(ressponce);
                    if (res.error) {
                        console.log(res.error);
                        return;
                    }
                }
                window.location.href = 'php/chat.php';
            }
        });
        return false;
    });
});