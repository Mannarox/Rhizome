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
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        loop: true,
        hashnav: true
    });
    
    var mySwiper2 = new Swiper ('.swiper-container2', {
        // Optional parameters
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        spaceBetween: 30,
        loop: true,
        hashnav: true
    });
    
    //  var mySwiper3 = new Swiper ('.swiper-container', {
    //     // Optional parameters
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     spaceBetween: 30,
    //     loop: true,
    //     hashnav: true
    // });
//=====swiper slider end========
  
});    
