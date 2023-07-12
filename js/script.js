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

$('.three-img-slider').owlCarousel({
	loop: false,
	margin: 30,
	nav: false,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	dots: false,
	center: false,
	touchDrag: false,
	mouseDrag: false,
	smartSpeed: 2000,
	responsive: {
		0: {
			items: 2,
			loop: true,
			center: false,
			touchDrag: true,
			mouseDrag: true,
			margin: 10,
			autoplay: true,
		},

		768: {
			items: 3,
		},
		1000: {
			items: 3,
		},
	},
});
