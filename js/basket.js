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
        $popupOut.fadeOut('slow');
    });
    var $cityCont = $('#cities');
    $('.js-region').click(function (e) {
        e.stopPropagation();
        $cityCont.show();
        $popupOut.fadeIn('slow');
    });
    $('#city-search').keyup(function () {
        var regex = $(this).val().toLowerCase();
        var $cityGroup = $cityCont.find('.column-list');

        $cityGroup.each(function () {
            var $citysG = $(this).find('.city-name');
            var k = 0;
            $citysG.each(function () {
                if (regex === '' || $(this).text().toLowerCase().indexOf(regex) > -1) {
                    $(this).show();
                    k++;
                } else {
                    $(this).hide();
                }
            });
            if (k > 0){
                $(this).show();
            } else $(this).hide();
        });
        if ($cityCont.find('.city-name:visible').length > 0) {
            $cityCont.find('.no-city-results').hide();
        } else {
            $cityCont.find('.no-city-results').show();
        }

    });
    var hoverTimer;
    window.addEventListener('scroll', function () {
        clearTimeout(hoverTimer);
        if (!document.body.classList.contains('disable-hover')) {
            document.body.classList.add('disable-hover');
        }
        hoverTimer = setTimeout(function () {
            document.body.classList.remove('disable-hover');
        }, 500);
    }, false);
});