(function($) {
    "use strict";

    // Window Resize Mobile Menu Fix
    mobileNav();
    
    // Scroll animation init
    window.sr = new scrollReveal();
    
    // Menu Dropdown Toggle
    if($('.menu-trigger').length){
        $(".menu-trigger").on('click', function() {  
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }

    // Preloader
    $(window).on('load', function() {
        $('.loader-wrapper').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    // Animation on scroll
    window.addEventListener('load', function(){
        AOS.init({
            duration: 1000,
            once: true
        });
    });

    // Parallax background
    $('.welcome-bg').parallax("50%", 0.3);

    // Magnific Popup
    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Accordion
    $('.accordion').accordion();

    // Counter animation
    $('.count-item').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Smooth scrolling
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

})(window.jQuery);