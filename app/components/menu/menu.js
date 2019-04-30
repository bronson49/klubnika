
const menuFunc= function () {
  $('.menu__language').click(function () {
      $(this).toggleClass('langOpen');
  });


  const topInit = [];
    $('.bg').each(function () {
        topInit.push(parseInt( $(this).css('top') ))
    });

  $(window).scroll(function (e) {
      let _scrollTop = $(window).scrollTop();
      $('.bg').each(function (i) {
          let parallaxStep = topInit[i] - (_scrollTop * 0.3) + 'px';
          $(this).css({'top': parallaxStep});
      });

      if (_scrollTop > 600){
          $('#btnUp').css({
              'opacity': 1,
              'visibility': 'visible'
          })
      } else {
          $('#btnUp').css({
              'opacity': 0,
              'visibility': 'hidden'
          })
      }
  });

  $('#btnUp').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
  });
};

export {menuFunc}