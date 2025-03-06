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
  var historySwiper = new Swiper(".historySwiper", {
    spaceBetween: 8,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
      1024: {
        spaceBetween: 24,
      },
    }
  });
  var historySwiper2 = new Swiper(".historySwiper2", {
    spaceBetween: 8,
    navigation: {
      nextEl: ".history-next",
      prevEl: ".history-prev",
    },
    pagination: {
      el: ".history-pagination",
      type: "fraction",
    },
    thumbs: {
      swiper: historySwiper,
    },
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
      1024: {
        spaceBetween: 24,
      },
    }
  });
  var photoSwiper = new Swiper(".photoSwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    pagination: {
      el: ".photo-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
        nextEl: ".photo-next",
        prevEl: ".photo-prev",
      },
    spaceBetween: 40,
    loop: true,
    breakpoints: {
      1024: {
        spaceBetween: 60,
      },
    }
  });
  var videoSwiper = new Swiper(".videoSwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    pagination: {
      el: ".video-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
        nextEl: ".video-next",
        prevEl: ".video-prev",
      },
    spaceBetween: 40,
    loop: true,
    breakpoints: {
      1024: {
        spaceBetween: 60,
      },
    }
  });
}