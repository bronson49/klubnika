const popupFunc = function () {
    let choosenVacancy = '';

    $('input[name=phone]').inputmask('*{16,}',{
        "mask": "+380ss-sss-ss-ss",
        definitions: {'s': {validator: "[0-9]"}},
        clearIncomplete: true,
        clearMaskOnLostFocus: false,
    });
    // ajax
    const regExp = /\S+@\S+\.\S+/;

    $('#formMain').submit(function () {
        let mailValid = $(this).find('#mail');

        if (!$('#phone').val()){
            $('#phone').css({'border': '2px solid red'});
            return false;
        } else {
            $('#phone').css({'border': '1px solid black'});
        }
        if (mailValid[0].value!=='' && !regExp.test(mailValid[0].value) ) {
            $(mailValid).css({'border': '2px solid red'});
            return false;
        } else {
            $(mailValid).css({'border': '1px solid black'});

            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(this).serialize()
            }).done(function () {
                $('.popup-body').hide();
                $('#ajaxMsg').show();
                setTimeout(function () {
                    closeForm();
                },3000)
            });
            return false;
        }
    });


    $('.vacancy-order').click(function () {
        choosenVacancy = $(this).attr('data-info');
        $('#info').attr('value', choosenVacancy);
        $('#ajaxMsg').hide();
        $('.popup-body').show();
        $('#popup').show();
        return false
    });
    $('#closePopup, #popup').click(function () {
        closeForm();
    });
    $('.popup-body').click(function (e) {
        e.stopPropagation();
    });

    function closeForm() {
        $('#popup').hide();
    }
};

export {popupFunc}