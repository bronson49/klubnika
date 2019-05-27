const headerFunc = function () {
    $('.header-slider').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.header-prev'),
        nextArrow: $('.header-next'),
    });

    $('.header-link').click(function () {
        let choosenVacancy = $(this).attr('data-info');
        $('#info').attr('value', choosenVacancy);
        $('#ajaxMsg').hide();
        $('.popup-body').show();
        $('#popup').show();
        return false
    });
};

export {headerFunc}
