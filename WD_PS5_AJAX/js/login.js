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
            url: 'login.php',
            data: {
                login: userName,
                pass: password
            },
            success(ressponce) {
                $('.massedg').text(ressponce);
                window.location.href = 'chat.php';
            }
        });
        return false;
    });
});