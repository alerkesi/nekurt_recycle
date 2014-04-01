$(document).ready(function ($) {
    $('#add-number').click(function () {
        $('#phone2').show();
        $(this).hide();
    });
    $('#remove-number').click(function () {
        $('#phone2').hide();
        $('#add-number').show();
    });
    $('.tab').click(function () {
        if ($(this).hasClass('selected')) {
            return false;
        }
        $('.tab.selected').removeClass('selected');
        $(this).addClass('selected');
        $('#cN').toggle();
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
    $('.js-post-address-bind').click(function (e) {
        e.stopPropagation();
        $('#pochtomat-map').show();
        $popupOut.fadeIn('slow');
    });
    $('.js-selfy-map').click(function (e) {
        e.stopPropagation();
        $('#selfy-map').show();
        $popupOut.fadeIn('slow');
        $('.scroll-list').nicescroll();
    });
    $('.tel-input').mask("+7 (999) 999-99-99");

//  $('.email-input').focusout(function(){
//    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    if (!re.test($(this).val())) {
//      $(this).addClass('alert');
//      $(this).next('.alert.hidden').show();
//    } else {
//      $(this).removeClass('alert');
//      $(this).next('.alert').hide();
//    }
//  })
});