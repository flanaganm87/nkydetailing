(function (document, $, undefined) {

	 /*

    	Advanced example - Customized layout
        ====================================

    */

	$(window).ready(function(){
		$('a[data-fancybox="gallery_a"]').fancybox({
	        idleTime  : false,
			baseClass : 'fancybox-custom-layout',
	        margin    : 0,
			infobar   : true,
			backFocus : false,
	        thumbs    : {
	            hideOnClose : false,
	            showOnStart : true
	        },
	        touch : {
	            vertical : 'auto'
	        },
	        buttons : [
	            'close',
	            'thumbs',
	            'slideShow',
	            'fullScreen',
	        ],
	        animationEffect   : false,
	        closeClickOutside : false,

	        // Customize caption area - append an advertisement
	        caption : function( instance ) {
	            var advert = '<div class="ad"><p><a href="//fancyapps.com/fancybox/">fancyBox3</a> - touch enabled, responsive and fully customizable lightbox script</p></div>';

	            return advert + ( $(this).data('caption') || '' );
	        }
		});
	});



	/**
	 * Add shrink class to header on scroll.
	 */
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var height = $('.hero-section').outerHeight();
		var header = $('.site-header').outerHeight();
		if (scroll >= header) {
			$(".site-header").addClass("shrink");
		} else {
			$(".site-header").removeClass("shrink");
		}
	});

	/**
	 * Show/hide video lightbox.
	 */
	$('.front-page-4 .wp-video').append('<button class="hide-video">×</button>');
	$('.front-page-4 .wp-video').prepend('<div class="before"></div>');
	$('.show-video').on('click', function () {
		$('.widget_media_video').toggleClass('visible');
	});
	$('.hide-video, .before').on('click', function () {
		$('.front-page-4 .widget_media_video').toggleClass('visible');
	});

	// Append icon for enews footer widget.
	$('.footer-widgets .enews form').append('<i class="fa fa-send-o"></i>');

	// Add back to top button.
	$('.site-footer > .wrap').append('<a href="#top" class="back-to-top"></a>');

	// Add id to top of page for scrolling target.
	$('html').attr('id', 'top');

	/**
	 * Smooth scrolling.
	 */
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	// Remove WooCommerce tabs
	.not('[href*="#tab-"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

})(document, jQuery);
