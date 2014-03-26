$(document).ready(function ($) {
    var $container = $('.basket');
    $('.tab').click(function () {
        if ($(this).hasClass('selected')) {
            return false;
        }
        $('.tab.selected').removeClass('selected');
        $(this).addClass('selected');
        $('#cN').toggle();
    });
    $('#add-number').click(function () {
        $('#phone2').show();
        $(this).hide();
    });
    $('#remove-number').click(function () {
        $('#phone2').hide();
        $('#add-number').show();
    });
    $('.js-focus-input').keyup(function () {
        if ($(this).val() === '') {
            $(this).parent().find('.input__option').addClass('disabled');
            $(this).parent().find('#c1').attr('disabled', true);
        } else {
            $(this).parent().find('.input__option').removeClass('disabled');
            $(this).parent().find('#c1').removeAttr('disabled');
        }
    });
    $('.form-select.norm-select').chosen({
        width: "180px",
        disable_search: "true"
    });
    $('.form-select.long-select').chosen({
        width: "240px",
        disable_search: "true"
    });
    $('.form-select.short-select').chosen({
        width: "140px",
        disable_search: "true"
    });

    $("input[name='radio1']").change(function () {
        switch (this.id) {
            case 'r1':
                $('.or').hide();
                $('.pr').hide();
                $('#selfy').removeClass('checked');
                $('#or1').show();
                $('#pr1').show();
                break
            case 'r2':
                $('.or').hide();
                $('.pr').hide();
                $('#selfy').removeClass('checked');
                $('#or2').show();
                $('#pr2').show();
                break
            case 'r3':
                $('.or').hide();
                $('.pr').hide();
                $('#selfy').removeClass('checked');
                $('#or3').show();
                $('#pr3').show();
                break
            case 'r4':
                $('.or').hide();
                $('.pr').hide();
                $('#selfy').removeClass('checked');
                $('#or4').show();
                $('#pr4').show();
                break
            case 'r5':
                $('.or').hide();
                $('.pr').hide();
                $('#selfy').addClass('checked');
                $('#or5').show();
                $('#pr5').show();
                break
        }
    });
    $('.form-input.alert').keyup(function () {
        $(this).removeClass('alert');
        $(this).next().addClass('hidden');
    });
    /* Catalog scroller */
    var delta = $('.catalog__item').outerWidth(true);
    var tab = $('.catalog__item');
    var tabsWidth = tab.length * delta;
    var tabMenu = parseInt($('.basket__desktop__catalog__tabs').width() / delta) * delta;
    var getStep = function () {
        return delta;
    };
    $('a.basket__desktop__catalog__arrow-back').click(function () {
        right();
    });
    $('a.basket__desktop__catalog__arrow-forward').click(function () {
        left();
    });

    var bdc = document.getElementsByClassName('basket__desktop__catalog')[0];

    if (bdc.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            bdc.addEventListener ("wheel", bindScroll, false);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            bdc.addEventListener ("mousewheel", bindScroll, false);
        } else {
            // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
            bdc.addEventListener ("MozMousePixelScroll", bindScroll, false);
        }
    } else { // IE<9
        bdc.attachEvent ("onmousewheel", bindScroll);
    }

    function bindScroll (e) {
        e.preventDefault();
        if ($('.basket__desktop__catalog').is(':animated')) {
            return false;
        };
        var whDelta = e.deltaY || e.detail || e.wheelDelta;
        if (whDelta > 0 && isLeft()) {
            right();
        } else if (whDelta < 0 && isRight()) {
            left();
        }
    };
    var right = function () {
        $('.basket__desktop__catalog').animate({ left: "+=" + getStep() }, 350, function () {
            checkSwitch();
        });
    };
    var left = function () {
        $('.basket__desktop__catalog').animate({ left: "-=" + getStep() }, 350, function () {
            checkSwitch();
        });
    };
    var checkSwitch = function () {
        if (isRight()) {
            $('a.basket__desktop__catalog__arrow-forward').show();
        } else {
            $('a.basket__desktop__catalog__arrow-forward').hide();
        }
        if (isLeft()) {
            $('a.basket__desktop__catalog__arrow-back').show();
        } else {
            $('a.basket__desktop__catalog__arrow-back').hide();
        }
    };
    var isRight = function () {
        var leftHide = parseInt($('.basket__desktop__catalog').css('left'));
        var rightHide = tabsWidth + leftHide - tabMenu;
        if (rightHide > 0) {
            return true;
        } else {
            return false;
        }
    };
    var isLeft = function () {
        var leftHide = parseInt($('.basket__desktop__catalog').css('left'));
        if (leftHide === 0) {
            return false;
        } else if (leftHide < 0) {
            return true;
        }
    };
    /* End Catalog scroller */
    $('.counter').on('click', '.add', function(){
        $(this).siblings('.counter__price').show();
    });
    $('.counter').on('click', '.deduct', function(){
        $(this).siblings('.counter__price').hide();
    });
    $(window).resize(function(){
        var w = window.innerWidth - 1200;
        $('.basket__desktop__catalog__tabs::after').width(w);
    })
    $('.js-catalog-popup').click(function(){
      $('#br-items').show();
    })
});