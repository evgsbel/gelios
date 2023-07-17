// //masked inputs
// $(() => {
//   Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
// });
//
// tabs
document.addEventListener('DOMContentLoaded', function () {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});
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
$('.js-nav-item').click(function(e) {
  e.preventDefault()
  $('.js-nav-item').removeClass('is-active')
  $(this).addClass('is-active')
})

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

// sliders
$(() => {
  //hero-slider
  let swiperHero = new Swiper(".js-hero-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
    speed: 900,
  });

  //service slider
    let swiperService = new Swiper(".js-service-slider",{
      speed: 900,
      navigation: {
        nextEl: ".swiper-button-next-srv",
        prevEl: ".swiper-button-prev-srv",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          spaceBetween: 30,
          slidesPerView: 3,
        }
      }
    })
  let swiperNews = new Swiper(".js-news-slider",{
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next-news",
      prevEl: ".swiper-button-prev-news",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3,
      }
    }
  })
  let swiperCalculateNav = new Swiper(".js-calculate-nav",{
    speed: 900,
    watchSlidesProgress: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.1,
        spaceBetween: 20,
      },
      1280: {
        spaceBetween: 20,
        slidesPerView: 'auto',
      }
    }
  })
});

$(document).ready(function() {
  const checkLength = function(evt) {
    if (dateFrom.value.length > 0) {
      dateTo.removeAttribute('disabled')
    }
    else dateTo.setAttribute('disabled', '')
  }

  const dateFrom = document.querySelector('input[name="date-from"]')
  let dateTo = document.querySelector('input[name="date-to"]')
  dateFrom.addEventListener('input', checkLength)
});
