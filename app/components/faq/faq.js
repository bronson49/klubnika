const faqFunc = function () {
    $('.faq__body-answers-container').click(function (e) {
        if ($(this).hasClass('faq-open')) {
            $(this).removeClass('faq-open');
            return
        }

        $('.faq-open').each(function () {
            $(this).removeClass('faq-open');
        });
        $(this).addClass('faq-open');
    });
};

export {faqFunc}