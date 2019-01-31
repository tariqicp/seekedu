(function ($) {

    "use strict";

    /*  ======================================
        Smooth scroll
        ====================================== */
    $('a.smooth-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
    });
    /*  ======================================
        Bootstrap scrollspy
        ====================================== */
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });
    /*  ======================================
		    Scroll Up
		====================================== */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "Top", // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

}(jQuery));
