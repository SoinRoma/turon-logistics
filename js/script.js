(function ($) {
    'use strict';
    let $window = $(window);


    $('.navbar-nav .nav-item .dropdown-item').on("click", function (e) {
        $('.navbar-collapse').removeClass('show');
    });
    $('.navbar-nav .nav-item a').on("click", function (e) {
        $('.navbar-collapse').removeClass('show');
    });
    $('.navbar-toggler').on("click", function (e) {
        $('.header-area').addClass('sticky');
    });
    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');

        } else {
            $('.header-area').removeClass('sticky');
            $('.navbar-collapse').removeClass('show');
        }
    });

    /*======================================
     ScrollIT
     ======================================*/
    $.scrollIt({
            upKey: 60, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 600, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -70 // offste (in px) for fixed top navigation
        }
    );

    /*======================================
     WOW Animation
     ======================================*/
    let wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function (box) {
            }
            , scrollContainer: true // optional scroll container selector, otherwise use window
        }
    );
    wow.init();


    /* =====================================
     Back To Top
     =====================================*/
    $('#back-to-top').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function () {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });

})(jQuery);
