const infoFunc = function () {
    $('#showInfoBtn').click(function () {
        $('.info__body-text').addClass('info-open');
        $(this).remove();
        return false
    });


};
export {infoFunc}