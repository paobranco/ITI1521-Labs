// JavaScript Document

$(document).ready(function(){
	
	$('ul.labs li').click(function(){
		var lab_id = $(this).attr('data-lab');

		$('ul.labs li').removeClass('current');
		$('.lab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+lab_id).addClass('current');
	})

})