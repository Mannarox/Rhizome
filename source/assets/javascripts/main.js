// var $window = $(window),
// //     width = $window.width();
//     isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
//     resizeTimeout;

// $(function() {

// if(!isMobile){

//   var $scrollElem = $('.dirt'),
//       $scrollElem2 = $('.dirt3');
//   $window.scroll(function(e){
//     parallax();
//   });

//   function parallax(){
//     console.log(1);
//     var scrolled = $(window).scrollTop();
//       $scrollElem.css('top',-(scrolled/6)+'px');
//       $scrollElem2.css('top',-(scrolled/2)+'px');
//   }

//   $window.resize(function(){
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(parallax($window.height()), 100);
//   });

// }

// });



//===slider===
//===slider===
jQuery(document).ready(function ($) {
    
//=====swiper slider start========
    var mySwiper = new Swiper ('#swiper1', {
        // Optional parameters
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true
    });
    
    var mySwiper2 = new Swiper ('#swiper2', {
        // Optional parameters
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        slidesPerView: 2,
        loop: true,
    });
    var mySwiper3 = new Swiper ('#swiper3', {
        // Optional parameters
        slidesPerView: 2,
        nextButton: '#buttonNext3',
        prevButton: '#buttonPrew3',
        // centeredSlides: true,
        loop: true,
        spaceBetween: 30
    });
    var mySwiper4 = new Swiper ('#swiper4', {
        // Optional parameters
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        slidesPerView: 2,
        loopedSlides:2,
        loop: true
    });
     var mySwiper5 = new Swiper ('#swiper5', {
        // Optional parameters
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true
    });
//=====swiper slider end========
  
});    
