$(document).ready(function ($) {

    $('body').append('<div class="popup-out" style="display: none;"></div>');
    $popupOut = $('.popup-out');
    $popupOut.click(function () {
        $(this).hide();
        $popup.hide();
    });
    var $popup = $('.popup');
    $popup.on('click', '.popup-close', function () {
        $popup.hide();
        $popupOut.hide();
        });
    $('.js-region').click(function (e) {
        e.stopPropagation();
        $('#cities').show();
        $popupOut.show();
    });
});