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
    var mySwiper = new Swiper ('#swiper1', { //slider 1
        // Optional parameters
        nextButton: '#swiperNext1',
        prevButton: '#swiperPrev1',
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true
    });
    
    var mySwiper2 = new Swiper ('#swiper2', { //slider 2
        // Optional parameters
        nextButton: '#swiperNext2',
        prevButton: '#swiperPrev2',
        spaceBetween: 10,
        slidesPerView: 2,
        loop: true,
    });
    var mySwiper3 = new Swiper ('#swiper3', { //slider 3
        // Optional parameters
        slidesPerView: 2,
        nextButton: '#swiperNext3',
        prevButton: '#swiperPrev3',
        // centeredSlides: true,
        loop: true,
        spaceBetween: 30
    });
    var mySwiper4 = new Swiper ('#swiper4', { //slider 4
        // Optional parameters
        nextButton: '#swiperNext4',
        prevButton: '#swiperPrev4',
        spaceBetween: 20,
        slidesPerView: 2,
        loopedSlides:2,
        loop: true
    });
     var mySwiper5 = new Swiper ('#swiper5', { //slider 5
        // Optional parameters
        nextButton: '#swiperNext5',
        prevButton: '#swiperPrev5',
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true
    });
//=====swiper slider end========
  
});    
