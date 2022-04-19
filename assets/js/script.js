$(document).ready(function () {
    // fixed Nav
    var stickyNavTop = $('.fixed').offset().top;
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.fixed').addClass('sticky');
            $('.fixHeader').addClass('mobsticky');
            $('.big-img').addClass('topSpace');
        } else {
            $('.fixed').removeClass('sticky');
            $('.fixHeader').removeClass('mobsticky');
            $('.big-img').removeClass('topSpace');
        }
    };

    stickyNav();
    $(window).scroll(function () {
        stickyNav();
    });

    // nav
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-aside').animate({
            width: 'toggle'
        }, 200);
    });
});