
const menuFunc= function () {
  $('.menu__language').click(function () {
      $(this).toggleClass('langOpen');
  });
};

export {menuFunc}