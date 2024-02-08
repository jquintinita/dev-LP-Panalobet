$(document).ready(function () {
    // Swiper: Slider
    new Swiper('.promo-slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: -100,
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



    //SMOOTH SCROLL



});
