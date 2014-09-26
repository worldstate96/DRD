jQuery(document).ready(function ($) {
	function mycarousel4_initCallback(e){e.buttonNext.hover(function(){e.stopAuto()},function(){e.startAuto()});e.buttonPrev.hover(function(){e.stopAuto()},function(){e.startAuto()});e.clip.hover(function(){e.stopAuto()},function(){e.startAuto()})};
	"use strict";
	jQuery.browser={};(function(){jQuery.browser.msie=false;
	jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
	jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
	$('body').append('<script type="text/javascript" src="customizer/script.js"></script>');

	// NiceScroll
	$("html").niceScroll({zindex:999,cursorborder:"",cursorwidth:"8px",cursorborderradius:"3px",cursorcolor:"#191919",cursoropacitymin:.5});

	// mMenu
	if ($("#mymenuleft")[0]) {
		$('#mymenuleft').before('<a class="btn_canvas" href="#mymenuleft"><i class="icon-reorder"></i></a>');
		$('#mymenuleft').mmenu({
			dragOpen: true,
			position: "left",
			zposition: "next"
		}, {
			clone  : true
		});
	}
	if ($("#mymenuright")[0]) {
		$('#mymenuright').before('<a class="btn_canvas" href="#mymenuright"><i class="icon-reorder"></i></a>');
		$("#mymenuright").mmenu({
			dragOpen: true,
			position: "right",
			zposition: "next"
		}, {
			clone  : true
		});
	}

	// Superfish
	if ($(".sf-menu")[0]) {
		$('.sf-menu').superfish({
			delay: 100,
			animation: {
				opacity: 'show', height: 'show'
			},
			speed: 300,
			autoArrows: false
		}).lavaLamp({
			fx: "easeOutExpo", 
			speed: 600,
			setOnClick: false,
			click: function(event, menuItem) {
				return true;
			}
		});
	}

	$.stellar({horizontalScrolling: false,verticalOffset: 0});

	// ExtraInfo
	if ($(".extrabox")[0]) {
		(function($) {
			$.fn.clickToggle = function(func1, func2) {
				var funcs = [func1, func2];
				this.data('toggleclicked', 0);
				this.click(function() {
					var data = $(this).data();
					var tc = data.toggleclicked;
					$.proxy(funcs[tc], this)();
					data.toggleclicked = (tc + 1) % 2;
				});
				return this;
			};
		}(jQuery));

		var DropHeight = jQuery('.extrabox').height();
		jQuery('.extrabox').css("top","-"+DropHeight+"px");
		jQuery('.arrow-down').clickToggle(function() {
			var DropHeight = jQuery('.extrabox').height();
			jQuery(this).addClass('opened');
			jQuery('.extrabox').animate({'top': 0}, {duration: '800', easing: 'easeInOutExpo'});
			jQuery('.arrow-down i').removeClass('icon-angle-down').addClass('icon-angle-up');
			jQuery('.page-content, .sliderr, .headdown, .head, .breadcrumb, footer').animate({'opacity': 0.5}, {duration: '2000', easing: 'easeInOutExpo'});
		}, function() {
			var DropHeight = jQuery('.extrabox').height();
			jQuery(this).removeClass('opened');
			jQuery('.extrabox').animate({'top': -DropHeight}, {duration: '800', easing: 'easeInOutExpo'});
			jQuery('.arrow-down i').addClass('icon-angle-down').removeClass('icon-angle-up');
			jQuery('.page-content, .sliderr, .headdown, .head, .breadcrumb, footer').animate({'opacity': 1}, {duration: '2000', easing: 'easeInOutExpo'});
		});
	}
	// knob
		if ($(".knob")[0]) {
			$(".knob").knob({
				change : function (value) {
					//console.log("change : " + value);
				},
				release : function (value) {
					//console.log(this.$.attr('value'));
					console.log("release : " + value);
				},
				cancel : function () {
					console.log("cancel : ", this);
				},
				draw : function () {
		
					// "tron" case
					if(this.$.data('skin') == 'tron') {
		
						var a = this.angle(this.cv)  // Angle
						, sa = this.startAngle          // Previous start angle
						, sat = this.startAngle         // Start angle
						, ea                            // Previous end angle
						, eat = sat + a                 // End angle
						, r = 1;
		
						this.g.lineWidth = this.lineWidth;
		
						this.o.cursor
						&& (sat = eat - 0.3)
						&& (eat = eat + 0.3);
		
						if (this.o.displayPrevious) {
							ea = this.startAngle + this.angle(this.v);
							this.o.cursor
							&& (sa = ea - 0.3)
							&& (ea = ea + 0.3);
							this.g.beginPath();
							this.g.strokeStyle = this.pColor;
							this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
							this.g.stroke();
						}
		
						this.g.beginPath();
						this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
						this.g.stroke();
						
						this.g.lineWidth = 2;
						this.g.beginPath();
						this.g.strokeStyle = this.o.fgColor;
						this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
						this.g.stroke();
						
						return false;
					}
				}
			});
			$('.knob').waypoint(function() {
				var $this = $(this);
				var myVal = $this.attr("rel");
				$this.knob();
				$({value: 0}).animate({
					value: myVal
				}, {
					duration: 4000,
					easing: 'easeInOutExpo',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});
		}
	// Tabs
	var tabs = jQuery('ul.tabs');
	tabs.each(function (i) {
		// get tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function (e) {
			// get tab's location
			var contentLocation = jQuery(this).attr('href');
			// Let go if not a hashed one
			if (contentLocation.charAt(0) === "#") {
				e.preventDefault();
				// add class active
				tab.removeClass('active');
				jQuery(this).addClass('active');
				// show tab content & add active class
				jQuery(contentLocation).fadeIn(500).addClass('active').siblings().hide().removeClass('active');
			}
		});
	});
	// Accordion
	jQuery("ul.tt-accordion li").each(function () {
		if (jQuery(this).index() > 0) {
			jQuery(this).children(".accordion-content").css('display', 'none');
		} else {
			if ($(".faq")[0]) {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='icon-ok-sign'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='icon-question-sign'></i>");
			} else {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='icon-minus-sign'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='icon-plus-sign'></i>");
			}
		}
		jQuery(this).children(".accordion-head").bind("click", function () {
			jQuery(this).parent().addClass(function () {
				if (jQuery(this).hasClass("active")) {
					return;
				} {
					return "active";
				}
			});
			if ($(".faq")[0]) {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("icon-ok-sign").removeClass("icon-question-sign");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("icon-ok-sign").addClass("icon-question-sign");
			} else {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("icon-minus-sign").removeClass("icon-plus-sign");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("icon-minus-sign").addClass("icon-plus-sign");
			}
		});
	});
	// Toggle
	jQuery("ul.tt-toggle li").each(function () {
		jQuery(this).children(".toggle-content").css('display', 'none');
		jQuery(this).find(".toggle-head-sign").html("&#43;");
		jQuery(this).children(".toggle-head").bind("click", function () {
			if (jQuery(this).parent().hasClass("active")) {
				jQuery(this).parent().removeClass("active");
			} else {
				jQuery(this).parent().addClass("active");
			}
			jQuery(this).find(".toggle-head-sign").html(function () {
				if (jQuery(this).parent().parent().hasClass("active")) {
					return "&minus;";
				} else {
					return "&#43;";
				}
			});
			jQuery(this).siblings(".toggle-content").slideToggle();
		});
	});
	jQuery("ul.tt-toggle").find(".toggle-content.active").siblings(".toggle-head").trigger('click');
	// ToTop
	jQuery('#toTop').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
	jQuery("#toTop").addClass("hidett");
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() < 400) {
			jQuery("#toTop").addClass("hidett").removeClass("showtt");
		} else {
			jQuery("#toTop").removeClass("hidett").addClass("showtt");
		}
	});
	// Notification
	$(".notification-close").click(function () {
		$(this).parent().slideUp("slow");
		return false;
	});
	// FlexSlider
	if ($(".flex-slide-h")[0]) {
		jQuery('.flex-slide-h').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1400,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: true,
			keyboardNav: true,
			start: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			},
			before: function(slider) {
				$('.big-slider h3').removeClass('effect').addClass('Out').fadeOut('slow');
				$('.big-slider p').removeClass('effectt').addClass('Out').fadeOut('slow');
			},
			after: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400).removeClass('Out');
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400).removeClass('Out');
			}
		});
	}
	if ($(".flex-slide-v")[0]) {
		jQuery('.flex-slide-h').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1400,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: true,
			keyboardNav: true,
			start: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			},
			before: function(slider) {
				$('.big-slider h3').removeClass('effect').addClass('Out').fadeOut('slow');
				$('.big-slider p').removeClass('effectt').addClass('Out').fadeOut('slow');
			},
			after: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400).removeClass('Out');
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400).removeClass('Out');
			}
		});
	}
	if ($(".flex-slide-fade")[0]) {
		jQuery('.flex-slide-h').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1400,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: true,
			keyboardNav: true,
			start: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			},
			before: function(slider) {
				$('.big-slider h3').removeClass('effect').addClass('Out').fadeOut('slow');
				$('.big-slider p').removeClass('effectt').addClass('Out').fadeOut('slow');
			},
			after: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400).removeClass('Out');
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400).removeClass('Out');
			}
		});
	}
	if ($(".projectslider")[0]) {
		jQuery('.projectslider').flexslider({
			animation: "fade",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			initDelay: 0,
			randomize: false,
			smoothHeight: true,
			keyboardNav: false
		});
	}
	if ($("[class^='product_']")[0]) {
		jQuery('[class^="product_"]').flexslider({
			slideshow: false,
			touch: true,
			animation: "slide",
			direction: "horizontal",
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			randomize: false,
			smoothHeight: true
		});
	}
	if ($(".tst")[0]) {
		jQuery('.tst').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			initDelay: 0,
			randomize: false,
			smoothHeight: true,
			keyboardNav: false
		});
	}
	if ($(".sec_testimonials")[0]) {
		jQuery('.sec_testimonials').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			initDelay: 0,
			randomize: false,
			smoothHeight: true,
			keyboardNav: false
		});
	}
	if ($(".tstFade")[0]) {
		jQuery('.tstFade').flexslider({
			animation: "fade",
			slideshowSpeed: 8000,
			animationSpeed: 800,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			initDelay: 0,
			randomize: false,
			smoothHeight: true,
			keyboardNav: false
		});
	}
	// Nivo Slider
	if ($("#nivo-slider")[0]) {
		$('#nivo-slider').nivoSlider({pauseTime:5000});
	}
	// Cicular Slider
	if ($("#co-slider")[0]) {
		$('#co-slider').circleslider();
	}
	// Modern Slider
	if ($(".modern-slider")[0]) {
		$('.modern-slider').modernSlider({
			effect:'easeInOutElastic',
			pause:3000,
			autoplay:true
		});
		function methodToFixLayout( e ) {
			var widthmodern = $('#layout').width();
			$('.modern-slider, .modern-slider img').css('width', widthmodern + 'px');
		}
		$(window).load(methodToFixLayout);
		$(window).bind("resize", methodToFixLayout);
		$(window).bind("change", methodToFixLayout);
	}
	// iView Slider
	if ($("#iview")[0]) {
		jQuery('#iview').iView({
			pauseTime: 7000,
			directionNav: false,
			controlNav: true,
			tooltipY: -15
		});
	}
	// jCarousel
	if ($(".portfolio-carousel")[0]) {
		jQuery(".portfolio-carousel").jCarouselLite({
			btnNext: ".portfolio-carousel .nexte",
			btnPrev: ".portfolio-carousel .preve",
			easing: "easeInOutExpo",
			visible: 4,
			scroll: 1,
			hoverPause: true,
			auto: 2000,
			speed: 800
		});
	}
	if ($(".magazine-carousel")[0]) {
		jQuery(".magazine-carousel").jCarouselLite({
			btnNext: ".magazine-carousel .nexte",
			btnPrev: ".magazine-carousel .preve",
			easing: "easeInOutBack",
			scroll: 1,
			hoverPause: true,
			auto: 3000,
			speed: 700
		});
	}
	if ($(".client-carousel")[0]) {
		jQuery(".client-carousel").jCarouselLite({
			btnNext: ".client-carousel .nexte",
			btnPrev: ".client-carousel .preve",
			easing: "easeInOutBack",
			visible: 4,
			scroll: 1,
			hoverPause: true,
			auto: 4000,
			speed: 600
		});
	}
	if ($(".products_carousel")[0]) {
		jQuery(".products_carousel").jCarouselLite({
			btnNext: ".products_carousel .nexte",
			btnPrev: ".products_carousel .preve",
			easing: "easeInOutExpo",
			visible: 4,
			scroll: 1,
			hoverPause: true,
			auto: 2000,
			speed: 800
		});
	}
	// Flickr, find your id from idgettr.com
	if ($("#flickr-photos")[0]) {
		$('#flickr-photos').jflickrfeed({
			limit: 9,
			qstrings: {
				id: '41813094@N06'
			},
			itemTemplate: '<li>' + '<a href="{{image_b}}" data-gal="lightbox[flickr]"><img src="{{image_s}}" alt="{{title}}" /></a>' + '</li>',
			itemCallback: function (data) {
				$("a[data-gal^='lightbox']").prettyPhoto({theme: 'dark_rounded'});
			}
		});
	}
	if ($("#flickr8")[0]) {
		$('#flickr8').jflickrfeed({
			limit: 8,
			qstrings: {
				id: '41813094@N06'
			},
			itemTemplate: '<li>' + '<a href="{{image_b}}" data-gal="lightbox[flickr]"><img src="{{image_s}}" alt="{{title}}" /></a>' + '</li>',
			itemCallback: function (data) {
				$("a[data-gal^='lightbox']").prettyPhoto({theme: 'dark_rounded'});
			}
		});
	}
	// prettyPhoto
	if ($("a[data-gal^='lightbox']")[0]) {
		$("a[data-gal^='lightbox']").prettyPhoto({
			animation_speed: 'normal',
			theme: 'dark_rounded',
			autoplay_slideshow: false,
			overlay_gallery: false,
			show_title: false
		});
	}
	// quicksand
	if ($(".filter")[0]) {
		var $portfolioClone = $(".portfolio").clone();
		$(".filter a").click(function (e) {
			$(".filter li").removeClass("current");
			var $filterClass = $(this).parent().attr("class");
			if ($filterClass === "all") {
				var $filteredPortfolio = $portfolioClone.find("li");
			} else {
				var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
			}
			// Call quicksand
			$(".portfolio").quicksand($filteredPortfolio, {
				duration: 800,
				useScaling: 'true',
				easing: 'easeInOutCubic',
				adjustHeight: 'dynamic'
			}, function () {
				$(".portfolio a[data-gal^='lightbox']").prettyPhoto({
					animation_speed: 'normal',
					theme: 'dark_rounded',
					autoplay_slideshow: false,
					overlay_gallery: false,
					show_title: false
				});
			});
			$(this).parent().addClass("current");
			e.preventDefault();
		});
	}
	// ShopCart
	$(".shopping_bag").hover(function() {
		$('.view_cart_mini').fadeIn(400);
			}, function() {
		$('.view_cart_mini').fadeOut(400);
	});
	// Ajax Contact
	if ($("#contactForm")[0]) {
		$('#contactForm').submit(function () {
			$('#contactForm .error').remove();
			$('#contactForm .requiredField').removeClass('fielderror');
			$('#contactForm .requiredField').addClass('fieldtrue');
			$('#contactForm span strong').remove();
			var hasError = false;
			$('#contactForm .requiredField').each(function () {
				if (jQuery.trim($(this).val()) === '') {
					var labelText = $(this).prev('label').text();
					$(this).addClass('fielderror');
					$('#contactForm span').html('<strong>*Please fill out all fields.</strong>');
					hasError = true;
				} else if ($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if (!emailReg.test(jQuery.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).addClass('fielderror');
						$('#contactForm span').html('<strong>Is incorrect your email address</strong>');
						hasError = true;
					}
				}
			});
			if (!hasError) {
				$('#contactForm').slideDown('normal', function () {
					$("#contactForm #sendMessage").addClass('load-color');
					$("#contactForm #sendMessage").attr("disabled", "disabled").addClass("btn-success").val('Sending message. Please wait...');
				});
				var formInput = $(this).serialize();
				$.post($(this).attr('action'), formInput, function (data) {
					$('#contactForm').slideUp("normal", function () {
						$(this).before('<div class="notification-box notification-box-success"><p><i class="icon-ok"></i>Thanks!</strong> Your email was successfully sent. We check Our email all the time.</p></div>');
					});
				});
			}
			return false;
		});
	}
	if ($("#contactForm-widget")[0]) {
		$('#contactForm-widget').submit(function () {
			$('#contactForm-widget .error').remove();
			$('#contactForm-widget .requiredField').removeClass('fielderror');
			$('#contactForm-widget .requiredField').addClass('fieldtrue');
			$('#contactForm-widget span strong').remove();
			var hasError = false;
			$('#contactForm-widget .requiredField').each(function () {
				if (jQuery.trim($(this).val()) === '') {
					var labelText = $(this).prev('label').text();
					$(this).addClass('fielderror');
					$('#contactForm-widget span').html('<strong>*Please fill out all fields.</strong>');
					hasError = true;
				} else if ($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if (!emailReg.test(jQuery.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).addClass('fielderror');
						$('#contactForm-widget span').html('<strong>Is incorrect your email address</strong>');
						hasError = true;
					}
				}
			});
			if (!hasError) {
				$('#contactForm-widget').slideDown('normal', function () {
					$("#contactForm-widget #sendMessage").addClass('load-color');
					$("#contactForm-widget #sendMessage").attr("disabled", "disabled").val('Sending message. Please wait...');
					$('#contactForm-widget span').html('<i class="icon-spinner icon-spin"></i>');
				});
				var formInput = $(this).serialize();
				$.post($(this).attr('action'), formInput, function (data) {
					$('#contactForm-widget').slideUp("normal", function () {
						$(this).before('<div class="notification-box notification-box-success"><p><i class="icon-ok"></i>Thanks!</strong> Your email was successfully sent. We check Our email all the time, so we should be in touch soon.</p></div>');
					});
				});
			}
			return false;
		});
	}

	// Tipsy
	$('.toptip').tipsy({fade: true,gravity: 's'});
	$('.bottomtip').tipsy({fade: true,gravity: 'n'});
	$('.righttip').tipsy({fade: true,gravity: 'w'});
	$('.lefttip').tipsy({fade: true,gravity: 'e'});

	// T20 Custom Animations
	var isDesktop = (function() {
		return !('ontouchstart' in window) // works on most browsers 
		|| !('onmsgesturechange' in window); // works on ie10
	})();
	window.isDesktop = isDesktop;
	if( isDesktop ){
		if ($(".animated")[0]) {
			jQuery('.animated').css('opacity', '0');
		}
		jQuery('.animt').each(function () {
			var $curr = jQuery(this);
			var $currOffset = $curr.attr('data-gen-offset');
			if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
				$currOffset = 'bottom-in-view';
			}
			$curr.waypoint(function () {
				$curr.trigger('animt');
			}, {
				triggerOnce: true,
				offset: $currOffset
			});
		});
		jQuery('.animated').each(function () {
			var $curr = jQuery(this);
			$curr.bind('animt', function () {
				$curr.css('opacity', '');
				$curr.addClass($curr.data('gen'));
			});
		});
		jQuery('.animated').each(function () {
			var $curr = jQuery(this);
			var $currOffset = $curr.attr('data-gen-offset');
			if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
				$currOffset = 'bottom-in-view';
			}
			$curr.waypoint(function () {
				$curr.trigger('animt');
			}, {
				triggerOnce: true,
				offset: $currOffset
			});
		});
	}
	// Progress Load
	if ($(".progress-bar > span")[0]) {
		$('.progress-bar > span').waypoint(function() {
			$(this).each(function() {
				$(this).animate({
					width: $(this).attr('rel') + "%"
				}, 800);
			});
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
		});
	}
	// News Ticker
	if ($("ul#news")[0]) {
		jQuery("ul#news").liScroll({travelocity: 0.08});
	}
	// Sticky
	if ($(".my_sticky")[0]){
		$('.my_sticky').before('<div class="Corpse_Sticky"></div>');
		$(window).scroll(function(){
			var wind_scr = $(window).scrollTop();
			var window_width = $(window).width();
			var head_w = $('.my_sticky').height();
			if (window_width >= 959) {
				if(wind_scr < 200){
					if($('.my_sticky').data('sticky') === true){
						$('.my_sticky').data('sticky', false);
						$('.my_sticky').stop(true).animate({opacity : 0}, 300, function(){
							$('.my_sticky').removeClass('sticky');
							$('.my_sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', '');
						});
					}
				} else {
					if($('.my_sticky').data('sticky') === false || typeof $('.my_sticky').data('sticky') === 'undefined'){
						$('.my_sticky').data('sticky', true);
						$('.my_sticky').stop(true).animate({opacity : 0},300,function(){
							$('.my_sticky').addClass('sticky');
							$('.my_sticky.sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', head_w + 'px');
						});
					}
				}
			}
		});
		$(window).resize(function(){
			var window_width = $(window).width();
			if (window_width <= 959) {
				if($('.my_sticky').hasClass('sticky')){
					$('.my_sticky').removeClass('sticky');
					$('.my_sticky').stop(true).animate({opacity : 0}, 300, function(){
						$('.my_sticky').removeClass('sticky');
						$('.my_sticky').stop(true).animate({opacity : 1}, 300);
						$('.Corpse_Sticky').css('padding-top', '');
					});
				}
			}
		});
	}
	// Landing Page
	if ($(".OneNav")[0]){
		$('body').plusAnchor({
			easing: 'easeInOutExpo',
			speed:  1000
		});
		$('.OneNav li').click(function(){
			$('.OneNav li.current').removeClass('current');
			$(this).addClass('current');
		});

		// Bind to scroll
		$(window).scroll(function(){
			var lastId,
				topMenu = $(".OneNav"),
				topMenuHeight = topMenu.outerHeight()+15,
				menuItems = topMenu.find("a"),
			scrollItems = menuItems.map(function(){
				var item = $($(this).attr("href"));
				if (item.length) { return item; }
			});
			var fromTop = $(this).scrollTop()+topMenuHeight;
			var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
				return this;
			});
			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
		   
			if (lastId !== id) {
				lastId = id;
				// Set/remove active class
				menuItems
				.parent().removeClass("current")
				.end().filter("[href=#"+id+"]").parent().addClass("current");
			}                   
		});
	}
});