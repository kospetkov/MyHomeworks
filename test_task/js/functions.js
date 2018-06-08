
$(document).ready(function () {
    $('#form_linck').submit(function () {
        let textarea = $('.textarea_for_linck');
        let valueForTextarea = textarea.val();
       $.ajax({
            type: 'POST',
            url: 'php/functions.php',
            data: {
                linck: valueForTextarea
            },
            success(responce) {
                console.log(responce);
                let res = JSON.parse(responce);
                if (res[0]['error']) {
                    console.log(res[0]['error']);
                    return;
                } else if (res[0]['linck']) {
                    let linck = res[0]['linck'];
                    //textarea.val('');
                    window.location.href = linck;
                } else if (res[0]['new_linck']) {
                    let status = res[0]['new_linck'];
                    textarea.val(status);
                }
            }
        });
       return false;
    });
});