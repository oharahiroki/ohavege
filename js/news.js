$(function () {
    $(window).scroll(function () {
        var wHeight = $(window).height();
        var scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            var targetPosition = $(this).offset().top;
            if (scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    $('.slshow').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        arrows:false
    });
});
