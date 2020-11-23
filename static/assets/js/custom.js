jQuery(document).ready(function () {

    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    // for hover dropdown menu
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
    // slick slider call 
    $('.slick_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slide: 'div',
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });
    // slick slider2 call
    $('.slick_slider2').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
    });

    //Check to see if the window is top if not then display button
    jQuery(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $("#item1").click(function () {
        $('html,body').animate({
                scrollTop: $("#escritos").offset().top - 100
            },
            'slow');
    });
    $("#item2").click(function () {
        $('html,body').animate({
                scrollTop: $("#conferencias").offset().top - 100
            },
            'slow');
    });
    $("#item3").click(function () {
        $('html,body').animate({
                scrollTop: $("#audiovisual").offset().top
            },
            'slow');
    });
    $("#item6").click(function () {
        $('html,body').animate({
                scrollTop: $(".footer_bottom").offset().top
            },
            'slow');
    });

});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

jQuery(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({
        'overflow': 'visible'
    });

    thinHeight = $('.content_bottom_right').height();
    fat = $('.content_bottom_left');
    if (thinHeight > fat.height()) {
        columnHeight = thinHeight - 20;
        fat.height(columnHeight);
    }
});