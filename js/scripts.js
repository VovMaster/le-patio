$(document).ready(function() {

	
	$('.slider-content .slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500
	});
	var timeoutID = 0;
	
	$('.slider-wrap-page').each(function() {
		var thisSlide = $(this);
		var oneSlide = thisSlide.find('.one-slide');
		var oneSlideLength = oneSlide.length;

		$('.slider-wrap-page .slider').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			slidesToShow: 1,
			adaptiveHeight: true,
		});

		$('#slider-slick-control').slider({
			step: 1,
			value: 0,
			min: 0,
			max: oneSlideLength - 1,
			// create: function() {
			// 	handle.text( $( this ).slider( "value" ) );
			// },
			slide: function( event, ui ) {
				// console.log( ui.value );

				var activeSlide = ui.value + 1;

				clearTimeout(timeoutID);
				timeoutID = setTimeout(function() {
					thisSlide.find('.slick-dots > *:nth-child(' + activeSlide + ')').click();
				}, 300);
				
			}
		});	


	});

	$('.content-plus').click(function() {
		$(this).closest('.slider-wrap-page').toggleClass('slider-wrap-page-content-hide');
	})


	



});