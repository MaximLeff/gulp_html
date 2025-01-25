jQuery(document).ready(function ($) {
	const bannerMain = new Swiper('.banner-slider', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	const news = new Swiper('.swiper.news-slides', {
		slidesPerView: 1,
		spaceBetween: 5,
		pagination: {
			el: '.news-slides .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			680: {
				slidesPerView: 2,
			},
			975: {
				slidesPerView: 3,
			},
		},
	});

	const recomendend = new Swiper('.swiper.recommend-slides', {
		slidesPerView: 1,
		spaceBetween: 5,
		pagination: {
			el: '.recommend-slides .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			680: {
				slidesPerView: 2,
			},
			975: {
				slidesPerView: 3,
			},
		},
	});

	$('.tab-head-item').click(function () {
		if (!$(this).hasClass('active')) {
			let index = $(this).index();
			$('.tab-head-item').removeClass('active');
			$(this).addClass('active');

			$('.tab-content').fadeOut(400, function () {
				$('.tab-content').eq(index).fadeIn(400);
			});
		}
	});

	let heightBuyTooltip = $('.buy-tooltip')[0].scrollHeight + 20;
	
	$(document).scroll(function () {
		let height = $(window).scrollTop();
		
		let heightBody = $('body')[0].scrollHeight;
		let heightFooter = $('.footer')[0].scrollHeight;
		let positionFooter = heightBody - heightFooter;
		let windowHeight = $(window).scrollTop() + $(window).height();

		if (height > 40 && windowHeight < positionFooter) {
			$('.buy-tooltip').addClass('show').css('max-height', heightBuyTooltip + 'px');
		} else {
			$('.buy-tooltip').removeClass('show').css('max-height', 0);
		}
	})
})
