$(document).ready(function(){
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: "slider__dots",
  });
  $(".hamburger").click(function(e) {
    e.preventDefault();
    $(".menu__mobile").removeClass('close');
    $(".menu__mobile").addClass('open');
  })
  $(".menu__mobile--close").click(function(e) {
    e.preventDefault();
    $(".menu__mobile").removeClass('open');
  })
});