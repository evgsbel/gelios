"use strict";

// //masked inputs
// $(() => {
//   Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
// });
//
// tabs
document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});

// mobile menu
$(function () {
  var btnMenu = document.querySelectorAll('.js-burger');
  var cloeMenu = document.querySelectorAll('.js-close-burger');
  var btnCaption = document.querySelectorAll('.burger__caption');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      el.classList.toggle('is-active');
      cloeMenu[0].classList.toggle('is-active');
      if (btnCaption[1].innerHTML === "Меню") {
        btnCaption[1].innerHTML = "Скрыть";
      } else {
        btnCaption[1].innerHTML = "Меню";
      }
      if (btnCaption[0].innerHTML === "Меню") {
        btnCaption[0].innerHTML = "Скрыть";
      } else {
        btnCaption[0].innerHTML = "Меню";
      }
      menu.classList.toggle('is-open');
      menu.style.top = headerHeight;
      console.log(headerHeight);
      body.classList.add('opened-menu');
    });
  });
  cloeMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      el.classList.toggle('is-active');
      btnMenu[0].classList.toggle('is-active');
      btnCaption.innerHTML = "Меню";
      if (btnCaption[1].innerHTML === "Меню") {
        btnCaption[1].innerHTML = "Скрыть";
      } else {
        btnCaption[1].innerHTML = "Меню";
      }
      if (btnCaption[0].innerHTML === "Меню") {
        btnCaption[0].innerHTML = "Скрыть";
      } else {
        btnCaption[0].innerHTML = "Меню";
      }
      menu.classList.toggle('is-open');
      body.classList.remove('opened-menu');
    });
  });
});

//nav
$('.js-nav-item').click(function (e) {
  e.preventDefault();
  $('.js-nav-item').removeClass('is-active');
  $(this).addClass('is-active');
});

//fixed header
$(document).ready(function () {
  $(function () {
    var timer = null;
    window.addEventListener('scroll', function () {
      if (timer !== null) {
        var stickySidebar = function stickySidebar() {
          var scrollDistance = $(document).scrollTop(),
            headerHeight = $('.header').outerHeight(true),
            // sidebarHeight = $('aside').outerHeight(true),
            footerOffsetTop = $('.js-stop-header').offset().top,
            $subMenu = $('.sub-menu'),
            $header = $('.header'),
            $miniLogo = $('.logo-mini');
          if (scrollDistance >= headerHeight) {
            $header.addClass('is-fixed');
            $subMenu.addClass('is-fixed');
            $miniLogo.addClass('is-active');
          } else {
            $header.removeClass('is-fixed');
            $subMenu.removeClass('is-fixed');
            $miniLogo.removeClass('is-active');
          }
          if (scrollDistance + headerHeight >= footerOffsetTop) {
            $header.removeClass('is-fixed');
            $subMenu.removeClass('is-fixed');
            $miniLogo.removeClass('is-active');
          }
        };
        clearTimeout(timer);
        //document.querySelector('header').classList.add('out', 'is-fixed');
        stickySidebar();
        $(document).scroll(function () {
          stickySidebar();
        });
      }
      timer = setTimeout(function () {
        // document.querySelector('header').classList.remove('out');
      }, 800);
    }, false);
  });
});

// sliders
$(function () {
  //hero-slider
  var swiperHero = new Swiper(".js-hero-slider", {
    pagination: {
      el: ".swiper-pagination"
    },
    autoplay: true,
    speed: 900
  });

  //service slider
  var swiperService = new Swiper(".js-service-slider", {
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next-srv",
      prevEl: ".swiper-button-prev-srv"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  });
  var swiperNews = new Swiper(".js-news-slider", {
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next-news",
      prevEl: ".swiper-button-prev-news"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  });
  var swiperCalculateNav = new Swiper(".js-calculate-nav", {
    speed: 900,
    watchSlidesProgress: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1400: {
        spaceBetween: 20,
        slidesPerView: 'auto'
      }
    }
  });
});
$(document).ready(function () {
  var checkLength = function checkLength(el) {
    console.log($(this).val());
    if ($(this).val().length > 0) {
      $(this).closest('div').find('input[name="date-to"]').removeAttr('disabled');
    } else {
      $(this).closest('div').find('input[name="date-to"]').attr('disabled', '');
    }
  };
  var dateFrom = $('input[name="date-from"]');
  var dateTo = $('input[name="date-to"]');
  dateFrom.on('input', checkLength);
});