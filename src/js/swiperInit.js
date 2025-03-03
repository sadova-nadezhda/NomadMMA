export function swiperInit() {
  var heroSwiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".hero-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + "</span>";
      },
    },
  });
  var parthersSwiper = new Swiper(".parthersSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".parthers-pagination",
      type: "progressbar",
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 6,
        },
      },
  });
  var leadSwiper = new Swiper(".leadSwiper", {
    slidesPerView: "auto",
    spaceBetween: 18,
    navigation: {
      nextEl: ".about-lead__next",
      prevEl: ".about-lead__prev",
    },
  });
}