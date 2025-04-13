$(document).ready(function () {
    //open alert
    var message = $('#Message').text();
    if (message !== '') {
        var result = $('#Result').text();
        Swal.fire({
            title: message,
            icon: result
        });
    }

});
