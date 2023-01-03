$(function () {

//광고 슬라이드
  var ad = new Swiper(".ad-box", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
    }, 
});


// 메인슬라이드
  var slide = new Swiper(".main-slide", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      // type: "progressbar",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   hide: true,
    // },
  });

//레깅스,브라탑,세트
//섹션 하나로 줬으면 구현 가능
  var slide3 = new Swiper(".sc-leggings .swiper", {
    slidesPerView: "2.2",
    spaceBetween: 10,
  });
  // var swiper = new Swiper(".sc-leggings .list-box2", {});
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
        // $('.bottom-menu').css('display', 'block');
    } else {
        $('.header, .hidden-menu').removeClass('active');
        // $('.bottom-menu').css('display', 'none');
    }
  })
  $(window).trigger('scroll');

  // //////////top-menu펼치기/////////////
  $('.hidden-menu .ic-show').click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $('.bottom-menu').stop().slideToggle();
    
    if ($(this).hasClass('active')) {
      // $('bottom-menu').slideDown();
      $('.all-menu').addClass("active");
      $('.top-menu-list').addClass("active");
    } else {
      // $('bottom-menu').slideUp();
      $('.all-menu').removeClass("active");
      $('.top-menu-list').removeClass("active");
    }

    // if($(window).scrollTop() == 0) {
    //   $('.bottom-menu').css('display', 'none');
    // }

    // $(this).toggleClass("active");
   

  })
  



//사이드 메뉴
  $('.link-menu').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.sc-menu, .dimmed').addClass('active');
    $('body').addClass('hidden');
  })//END

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

    // if(curr < 0){
    //   $('.appear-tab').css('display','none');
    // }

    lastScroll = curr;
  })
  



  // var last_scroll = 0;
  // $(window).scroll(function () {
  //     var curr_scroll = $(window).scrollTop();

  //     if (curr_scroll > last_scroll || $(window).scrollTop() == 0) {
  //         $('.appear-tab').fadeOut(500);
  //     } else {
  //         $('.appear-tab').fadeIn(500);
  //     }
  //     last_scroll = curr_scroll;
  // })



  $('.top-box').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 400);
  })





})