$(document).ready(function () {
    // Swiper: Slider
    new Swiper('.promo-slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        loop: true,
        centeredSlides: false,
        slidesPerView: 1,
        spaceBetween: -790,
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1,
            slideShadows: false,
        }

    });

    new Swiper('.hero-slider', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,

    });



    //Mobile Nav
    $(".burger-btn").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.nav-menu').css('height', '0');
        }else{
            $(this).addClass('active');
            $('.nav-menu').css('height', 'auto');
        }
    })


});
