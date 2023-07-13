"use strict";

// //masked inputs
// $(() => {
//   Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
// });
//
// // tabs
// document.addEventListener('DOMContentLoaded', function () {
//   const tabsBtn = document.querySelectorAll('.tabs__btn');
//   tabsBtn.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//       tabsBtn.forEach(tabsBtn => {
//         tabsBtn.classList.remove('is-active');
//       });
//       const path = event.currentTarget.dataset.path;
//       document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
//         tabContent.classList.remove('is-active');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
//       el.classList.add('is-active');
//     });
//   });
// });
//
//
// // mobile menu
// $(() => {
//   const btnMenu = document.querySelectorAll('.js-open-mobile-menu');
//   const menu = document.querySelector('.js-mobile-menu');
//   const body = document.querySelector('body');
//   btnMenu.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//       e.stopPropagation();
//       menu.classList.add('is-open');
//       body.classList.add('opened-menu')
//     });
//   })
//   const closeBtn = document.querySelector('.js-close-mobile-menu');
//   closeBtn.addEventListener('click', function (e) {
//     e.stopPropagation();
//     menu.classList.remove('is-open');
//     body.classList.remove('opened-menu')
//   });
// });
//
//

//nav
$('.js-nav-item').click(function (e) {
  e.preventDefault();
  $('.js-nav-item').removeClass('is-active');
  $(this).addClass('is-active');
});

//fixed header
// fixed header
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
            $header = $('.sub-menu'),
            $miniLogo = $('.logo-mini');
          if (scrollDistance >= headerHeight) {
            $header.addClass('is-fixed');
            $miniLogo.addClass('is-active');
          } else {
            $header.removeClass('is-fixed');
            $miniLogo.removeClass('is-active');
          }
          if (scrollDistance + headerHeight >= footerOffsetTop) {
            $header.removeClass('is-fixed');
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