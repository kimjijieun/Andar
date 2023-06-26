$(function () {

//광고 슬라이드
  var ad = new Swiper(".ad-box", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }, 
});


// 메인슬라이드
  var slide = new Swiper(".main-slide", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });


  var slide3 = new Swiper(".sc-leggings .swiper", {
    slidesPerView: "2.2",
    spaceBetween: 10,
  });
  var slide4 = new Swiper(".sc-top .swiper", {
    slidesPerView: "2.2",
    spaceBetween: 10,
  });
  var slide5 = new Swiper(".sc-set .swiper", {
    slidesPerView: "2.2",
    spaceBetween: 10,
  });



  // 스크롤이벤트


  $(window).scroll(function(){
    curr = $(this).scrollTop();
    if (curr>0) {
        $('.header, .hidden-menu').addClass('active');
        $('.menu-wrap').fadeIn(0);
    } else {
        $('.header, .hidden-menu').removeClass('active');
    }
  })
  $(window).trigger('scroll');


  // //////////top-menu펼치기/////////////
  $('.hidden-menu .ic-show').click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $('.bottom-menu').stop().slideToggle();
    
    if ($(this).hasClass('active')) {
      $('.all-menu').addClass("active");
      $('.top-menu-list').addClass("active");
    } else {
      $('.all-menu').removeClass("active");
      $('.top-menu-list').removeClass("active");
    }

   

  })
  



//사이드 메뉴
  $('.link-menu').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.sc-menu, .dimmed').addClass('active');
    $('body').addClass('hidden');
  })

  $('.close, .dimmed').click(function(){
    $('.sc-menu, .dimmed').removeClass('active');
    $('body').removeClass('hidden');
  })



// 사이드메뉴 오픈
$('.sc-menu .category-item').click(function(e){
  e.preventDefault();

  $(this).toggleClass('active');
  $(this).children('ul').slideToggle();
  })



  // 스크롤시 나타나기
  lastScroll = 0;

  $(window).scroll(function(){

    curr = $(this).scrollTop();

    if (curr > lastScroll || curr == 0) {
      $('.appear-tab').fadeOut();
    } else {
      $('.appear-tab').fadeIn();
    }


    lastScroll = curr;
  })
  






  $('.top-box').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 400);
  })





})