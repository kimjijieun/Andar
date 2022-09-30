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
    if ($(this).scrollTop()>0) {
        $('.header, .gnb-area, .top-menu').addClass('active');
        $('.menu-wrap').fadeIn(0);
    } else {
        $('.header, .gnb-area, .top-menu').removeClass('active');
        
    }

  })

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



    // $(this).toggleClass("active");
   

  })
  



//사이드 메뉴
  $('.link-menu').click(function(e){
    e.preventDefault();
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
  // $(this).children('ul').length == 0
 
  // if ($(this).children('ul').css('display') == 'none') {
  //     $(this).children('ul').stop().slideDown();

  // } else {
  //     $(this).children('ul').stop().slideUp();
  // }
  // $(this).toggleClass('active');
  // $(this).siblings('ul').slideToggle();

  $(this).toggleClass('active');
  $(this).children('ul').slideToggle();
      // if ($(this).children('ul').css('display') == 'none') {
      //   $(this).children('ul').stop().slideDown();
      // } else {
      //   $(this).children('ul').stop().slideUp();
      // }
  })


  $('html, body').on('mousewheel',function(e){
    var E = e.originalEvent.wheelDelta; //마우스 휠의 데이터 값을 받아온다
    console.log(E);
    //밑을 내릴때는 음수 올릴때는 양수값을 받아온다
    if (E > 0) { /* 0보다 커야지 작동 */
      $('.appear-tab').fadeOut();

    } else {
      $('.appear-tab').fadeIn();
    }
  });



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