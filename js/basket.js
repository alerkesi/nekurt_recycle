$(document).ready(function ($) {
    $popup = $('.popup-out');
    $popup.on('click', '.popup-close', function () {
        $popup.hide();
        });
    $('.js-region').click(function (e) {
        e.stopPropagation();
        $('#cities').show();
    });
});