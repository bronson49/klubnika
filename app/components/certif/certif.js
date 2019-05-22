
const certFunc = function () {
    $('#certSlider').slick({
        //infinite: false,
        initialSlide: 3,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $('.cert-prev'),
        nextArrow: $('.cert-next'),
        centerPadding: '200px',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    centerPadding: '100px',
                }
            },
        ]
    });
};

export {certFunc}
