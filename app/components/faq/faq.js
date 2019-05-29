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

    $('.faq__body-category-list li').each(function (index) {
        $(this).attr('data-faq', index);
    });
    $('.faq__body-category-list li').click(function () {
        $('.active-faq').removeClass('active-faq');
        $(this).addClass('active-faq');
        let tabNumber = $(this).attr('data-faq');
        let answers = $('.faq__body-answers-item')[tabNumber];
        $('.active-faq-tab').removeClass('active-faq-tab');
        $(answers).addClass('active-faq-tab');
        $('.faq-open').removeClass('faq-open');
        $(answers).find('.faq__body-answers-container').first().addClass('faq-open');
    });
};

export {faqFunc}