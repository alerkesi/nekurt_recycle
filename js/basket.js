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
    $('#city-search').keyup(function () {
        var regex = $(this).val().toLowerCase();
        var $cities = $('.city-name');

        if (regex === '') {
            $cities.show();
            return;
        }
        //$cities.hide();
        $cities.each(function(){
            if ($(this).text().toLowerCase().indexOf(regex) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })

    })
});