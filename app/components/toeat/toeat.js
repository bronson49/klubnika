const eatFunc = function () {
    $('#foodSlider').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.to-eat-prev'),
        nextArrow: $('.to-eat-next'),
    });
};

export {eatFunc}