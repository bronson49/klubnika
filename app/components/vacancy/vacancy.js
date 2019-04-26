
const vacancyFunc = function () {
    $('.vacancy-detail').click(function () {
        $(this).closest('.vacancy-item').find('.vacancy-item__info').addClass('vacancy-open');
        return false;
    });
    $('.vacancy-item__info-close').click(function () {
        $(this).parent('.vacancy-item__info').removeClass('vacancy-open');
    });
};

export {vacancyFunc}
