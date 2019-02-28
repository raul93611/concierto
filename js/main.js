$(document).ready(function(){
  $("#tiempo").countdown("2019/05/01", function(event) {
    $(this).text(event.strftime('%D days %H Hrs. %M min. %S seg.'));
  });

  var scroll_pos = 0;
  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 210) {
          $("#navbar_principal").addClass('verde shadow');
          $("#navbar_principal").removeClass('transparent');
      } else {
          $("#navbar_principal").addClass('transparent');
          $("#navbar_principal").removeClass('verde shadow');
      }
  });
});
