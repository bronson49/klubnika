const eatFunc = function () {
    $('#foodSlider').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
};

export {eatFunc}