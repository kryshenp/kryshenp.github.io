/*
  Written by Pavlo Kryshenyk 26.5.2017
*/

$(document).ready(function() {

  'use strict';

  $('ul.menu-list li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.menu-list li').removeClass('active');

    $('.tab-content').removeClass('active');


    $(this).addClass('active');
		$("#"+tab_id).addClass('active');
  });

  $(function() {
    var $helpMsgs = $('.help'),
        $inputs = $('input'),
        $labels = $('label');

        $inputs.focusin(function () {
            $(this).next().fadeToggle(600, 'linear');
        });

        $inputs.focusout(function () {
            $(this).next().fadeToggle(200);
        });

        $('#display-help').click(function () {
        $('.help').addClass(700, 'active').fadeToggle(600, 'linear');
        $('.help').fadeOut(1600, 'linear');
    });
  });
});
