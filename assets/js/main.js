(function ($) {
	"use strict";

	var windowOn = $(window)
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$('#preloadertp').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})


	////////////////////////////////////////////////////
	//  Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky,#header-mob-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky,#header-mob-sticky").addClass("header-sticky");
		}
	});


	////////////////////////////////////////////////////
	//  wow Js
	new WOW().init();
		

	///////////////////////////////////////////////////
	// 02.  Scroll to top
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 245) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});


	///////////////////////////////////////////////////
	// 03. Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	
		});
	}


	////////////////////////////////////////////////////
	// 04. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// 05. Sidebar Js
	$(".tp-menu-toggle").on("click", function () {
		$(".tp-side-info-area").addClass("tp-sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tpsideinfo__close").on("click", function () {
		$(".tp-side-info-area").removeClass("tp-sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".tp-side-info-area").removeClass("tp-sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	///////////////////////////////////////////////////
	// 06. Magnific Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	
	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});


	////////////////////////////////////////////////////
	// 08. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	////////////////////////////////////////////////////
	// 09. Nice Select Js
	$('select').niceSelect();


	////////////////////////////////////////////////////
	// 10. Service Js
	var serviceswiper = new Swiper('.service-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
        spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.services-n',
		  prevEl: '.services-p',
		},
	  });


	////////////////////////////////////////////////////
	// 11. Gallary Js
	var galleryswiper = new Swiper('.gall-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
        spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  });


	////////////////////////////////////////////////////
	// 12. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	////////////////////////////////////////////////////
	// 13. Testimonial Js
	var testswiper = new Swiper('.tp-test-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.tp-test-nxt',
		  prevEl: '.tp-test-prv',
		},
	  });


	////////////////////////////////////////////////////
	// 14. Team Js
	var teamswiper = new Swiper('.team-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		autoplay: {
			delay: 4500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.team-n',
		  prevEl: '.team-p',
		},
	  });


	////////////////////////////////////////////////////
	// 15. Brand Js
	var brandswiper = new Swiper('.brand-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 5,
        spaceBetween: 30,
		freeMode: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.team-n',
		  prevEl: '.team-p',
		},
	  });


	////////////////////////////////////////////////////
	// 16. Blog Js
	var blogswiper = new Swiper('.tp-blog-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.tp-blog-n',
		  prevEl: '.tp-blog-p',
		},
	  });
	

	////////////////////////////////////////////////////
	// 17. Slider Js
	var sliderswiper = new Swiper('.slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		effect:'fade',
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		navigation: {
		  nextEl: '.slider-n',
		  prevEl: '.slider-p',
		},
	});
	

	////////////////////////////////////////////////////
	// 18. Team Js
	var tpteamswiper = new Swiper('.tp-team-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
		autoplay: {
			delay: 6000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.team-nxt',
		  prevEl: '.team-prv',
		},
	});
	

	////////////////////////////////////////////////////
	// 19. Blog Js
	var tpblogswiper = new Swiper('.blog-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.blog-nxt',
		  prevEl: '.blog-prv',
		},
	  });


	////////////////////////////////////////////////////
	// 20. Testimonial Js
	var swiperthumb = new Swiper(".test-ava-active", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
    });

	var swipertestlist = new Swiper(".test-active", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".testi-button-next",
          prevEl: ".testi-button-prev",
        },
        thumbs: {
          swiper: swiperthumb,
        },
    });

	var swipertestlist = new Swiper(".tp-testimonial-active", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".tp-testi-button-next",
          prevEl: ".tp-testi-button-prev",
        },
        thumbs: {
          swiper: swiperthumb,
        },
    });


	// Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		var $this = $(this),
		knobVal = $this.attr('data-rel');

		$this.knob({
		'draw': function () {
			$(this.i).val(this.cv + '%')
		}
		});

		$this.appear(function () {
		$({
			value: 0
		}).animate({
			value: knobVal
		}, {
			duration: 2000,
			easing: 'swing',
			step: function () {
			$this.val(Math.ceil(this.value)).trigger('change');
			}
		});
		}, {
		accX: 0,
		accY: -150
		});
	});
	}


	////////////////////////////////////////////////////
	// 21. Process Js
	var porcessswiper = new Swiper('.process-active', {
		// Optional parameters
		loop: false,
		slidesPerView: 4,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  });


	////////////////////////////////////////////////////
	// 22. Shop Js
	var shopitemsswiper = new Swiper('.shop-slider-active', {
		// Optional parameters
		loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	  });


	////////////////////////////////////////////////////
	// 23. Postbox Js
	var postboxswiper = new Swiper('.postbox-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
        spaceBetween: 0,
		autoplay: {
		  delay: 4000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".postbox-slider-button-next",
			prevEl: ".postbox-slider-button-prev",
		},
	});


	////////////////////////////////////////////////////
	// 24. Swiper Js
	$('.cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	////////////////////////////////////////////////////
	// 24. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 25. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 26. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 27. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

})(jQuery);