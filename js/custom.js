$(document).ready(function () {
    // Read More Button
    $('.read-more').click(function () {
        $('.toggle-text').slideToggle();
    });

    // Mobile Nav-bar
    $('.mobile-btn').click(function () {
        $('nav').slideToggle();
        $('nav').toggleClass('show');
        $('.mobile-btn').toggleClass('close-sign');
        $('.drop-down-list-content').hide();

    });

    // Show and Hide Drop Down List
    $('.drop-down-list').click(function(){
        $('.drop-down-list-content').slideToggle();
    })

    // Hide Nav-bar, Drop Down List and "X" Sign When The Website Width More Than 991
    $(window).resize(function () {
        if (window.innerWidth > 991) {
            $('nav').removeClass('show');
            $('nav').css("display","none");
            $('.mobile-btn').removeClass('close-sign');
            $('.drop-down-list-content').hide();
        }
    })

    // Go to Top Icon
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
});
