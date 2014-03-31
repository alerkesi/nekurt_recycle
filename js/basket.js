$(document).ready(function ($) {
    $popup = $('.popup-semantic');
    $overlay = $('.overlay');
    $popup.on('click', '.popup-close', function () {
        $popup.hide();
        });
    $('.js-region').click(function (e) {
        e.stopPropagation();
        $('#cities').show();
    });
});