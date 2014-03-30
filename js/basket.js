$(document).ready(function ($) {
  $('.popup').on('click', '.popup-close', function () {
    $(this).parent().hide();
  });
  $('.js-region').click(function(){
    $('#cities').show();
  });
});