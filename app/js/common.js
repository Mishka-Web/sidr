$(function () {
	$(document).on("touchstart", function () {
		true;
	});

	$(document.body).data(
		"scrollbar-width",
		parseInt(document.documentElement.clientWidth) -
			parseInt(window.innerWidth)
	);

	$(window).on("click", function () {
		$(".popup").removeClass("active");

		$(".popup__container").css({
			"margin-left": 0,
		});

		$(document.body).css({
			"overflow-y": "visible",
			"margin-left": 0,
		});
	});

	$("[data-action='open-popup']").on("click", function (e) {
		e.stopPropagation();
	});

	new Swiper(".block-special .block__slider .swiper", {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		speed: 1000,
		navigation: {
			nextEl: ".block-special .slider__btn-next",
			prevEl: ".block-special .slider__btn-prev",
			disabledClass: "is-disabled",
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1200: {
				slidesPerView: 2.5,
				slidesPerGroup: 2.5,
			},
			992: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerView: 1.5,
				slidesPerGroup: 1.5,
			},
		},
	});

	new Swiper(".block-events .block__slider .swiper", {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		speed: 1000,
		navigation: {
			nextEl: ".block-events .slider__btn-next",
			prevEl: ".block-events .slider__btn-prev",
			disabledClass: "is-disabled",
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 2.5,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1.5,
			},
		},
	});
});
