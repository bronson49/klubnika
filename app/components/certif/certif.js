
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
            {
                breakpoint: 800,
                settings: {
                    initialSlide: 3,
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 450,
                settings: {
                    initialSlide: 1,
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            },
        ]
    });
};

export {certFunc}
