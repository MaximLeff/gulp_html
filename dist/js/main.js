// import Swiper JS

// jQuery(document).ready(function ($) {
// 	// for menu
// 	$(document).on('mouseenter', '.menu_list li', function () {
// 		if ($(this).find('ul').length > 0) {
// 			$(this).children('ul').addClass('active');
// 		}
// 	});
// 	$(document).on('mouseleave', '.menu_list li', function () {
// 		$(this).find('ul').removeClass('active');
// 	});
// 	// ----------

// 	$('input[type="tel"]').inputmask({ mask: '+38 (999) 999-99-99' });

// 	// burger
// 	const menuBtn = $('.btn--burger');
// 	const menu = $('.header__nav');

// 	menuBtn.on('click', function () {
// 		if ($(this).hasClass('js-active')) {
// 			$(this).removeClass('js-active');
// 			menu.removeClass('js-open');
// 		} else {
// 			$(this).addClass('js-active');
// 			menu.addClass('js-open');
// 		}
// 	});

// 	$(document).click(function (e) {
// 		if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
// 			menu.removeClass('js-open');
// 			menuBtn.removeClass('js-active');
// 		}
// 	});
// 	// end burger

// 	$('.accordion-item .accordion-top').click(function () {
// 		if (!$(this).parent().hasClass('open')) {
// 			$('.accordion-item').removeClass('open');
// 			$('.accordion-content').slideUp(200);
	
// 			$(this).parent().addClass('open');
// 			$(this).next().slideDown(200);
// 		} else {
// 			$('.accordion-item').removeClass('open');
// 			$('.accordion-content').slideUp(200);
// 		}
// 	})
// });

//	<div class="drop-item" dropdown-item="">
// 		<div class="drop-top" dropdown-trigger>
//			<span class="title">test</span>
// 			<img class="drop-btn" src="img/icons/close.svg" alt="">
// 		</div>
// 		<div class="drop-content" dropdown-content>
// 			<p>Lorem ipsum dolor sit amet</p>
// 		</div>
// 	</div>
window.onload = function () {
	console.log('load');

	const dropdown = () => {
		const items = document.querySelectorAll('[dropdown-item]');

		items.forEach(el => {
			let animationTime = .3;
			const trigger = el.querySelector('[dropdown-trigger]')
			const content = el.querySelector('[dropdown-content]')

			content.style.transition = `max-height ${animationTime}s ease`;
			content.style.maxHeight = '0';

			function removeActive() {
				items.forEach(el => {
					const trigger = el.querySelector('[dropdown-trigger]');
					const content = el.querySelector('[dropdown-content]');
		
					trigger.classList.remove('is-active');
					content.classList.remove('is-open');
		
					content.style.maxHeight = 0;
				})
			}

			trigger.onclick = function () {
				if (this.classList.contains('is-active')) {
					removeActive()

					content.style.maxHeight = 0;
				} else {
					removeActive()

					trigger.classList.add('is-active');
					content.classList.add('is-open');
					content.style.maxHeight = content.scrollHeight + 'px';
				}
			};
		});
	};

	dropdown();
}