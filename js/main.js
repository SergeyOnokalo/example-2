$(function(){
  $('.slider1').slick({
  fade: true,
  arrows:true,
  autoplay: true,
  autoplaySpeed: 3000
  });
});
$(function(){
  $('.slider2__items-for').slick({
    // infinite: true,
    arrows:false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    // speed: 150,
    // slidesToShow: 1,
    // centerMode: true,
    // variableWidth: true,
    focusOnSelect: true
  });
});
$(function(){
  $('.slider2__items-nav').slick({
    infinite: true,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 150,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    asNavFor: '.slider2__items-for'
    
  });
});

