const testimonialFunc = function () {
    $('.testimon-slider').slick({
       // infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.testimon-prev'),
        nextArrow: $('.testimon-next'),
    });
};

export {testimonialFunc}