$(document).ready(function ($) {

    var popupOut = '<div class="popup-out" style="display: none;"></div>';
    $('body').append(popupOut);

    $popup = $('.popup');
    $popup.on('click', '.popup-close', function () {
        $popup.hide();
        $('.popup-out').hide();
        });
    $('.js-region').click(function (e) {
        e.stopPropagation();
        $('#cities').show();
        $('.popup-out').show();
    });
});