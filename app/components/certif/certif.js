
const certFunc = function () {
    $('#certSlider').slick({
       // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
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
