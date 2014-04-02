$(document).ready(function ($) {

    var $popup = $('.popup');
    $popupOut = $('.popup-out');
    $popupOut.click(function () {
        closePopup($(this));
    });
    $popup.on('click', '.popup-close', function () {
        closePopup($popupOut);
    });
    var $cityCont = $('#cities');
    $('.js-region').click(function (e) {
        e.stopPropagation();
        openPopup($cityCont);
    });
    $('.js-catalog-popup').click(function (e) {
        e.stopPropagation();
        openPopup($('#all-br-items'));
    });
    $('.js-oneclick-buy').click(function (e) {
        e.stopPropagation();
        openPopup($('#one-click-buy'));
    });
    $('.js-post-address-bind').click(function (e) {
        e.stopPropagation();
        openPopup($('#pochtomat-map'));
    });
    $('.js-selfy-map').click(function (e) {
        e.stopPropagation();
        openPopup($('#selfy-map'))
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
            if (k > 0) {
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
    function openPopup($elem) {
        var $p = $elem.find('.popup');
        $p.show();
        $p.scrollTop($(window).scrollTop());
        $elem.fadeIn('slow');
        if (!document.body.classList.contains('noscroll')) {
            document.body.classList.add('noscroll');
        }
    }

    function closePopup($elem) {
        $elem.fadeOut('slow');
        if (document.body.classList.contains('noscroll')) {
            document.body.classList.remove('noscroll');
        }
    }

});