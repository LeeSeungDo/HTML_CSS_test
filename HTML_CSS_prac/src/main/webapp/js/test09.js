$('.menu-item').click(function() {
	var keyword = $(this).attr('ss');
	var scrollTo = $('#' + keyword);
	$('html, body').animate({
		scrollTop: scrollTo.offset().top
	}, 'slow');
});