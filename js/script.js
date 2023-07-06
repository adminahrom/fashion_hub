$('.slider-img').owlCarousel({
	loop: false,
	margin: 20,
	nav: false,
	autoplay: false,
	autoplayTimeout: 7000,
	autoplayHoverPause: true,
	dots: true,
	center: false,
	touchDrag: true,
	mouseDrag: true,
	smartSpeed: 3000,
	responsive: {
		0: {
			items: 2,
		},
		768: {
			items: 3,
		},
		1000: {
			items: 4,
		},
	},
});
