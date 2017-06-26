$(document).ready(function() {
  $('ul.menu-list li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.menu-list li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
		$("#"+tab_id).addClass('active');
  });
});
