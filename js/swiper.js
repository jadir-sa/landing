const swiperOne = new Swiper('.swiper-1', {
    loop: false,
    spaceBetween: 15,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 4.5,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5.5,
        spaceBetween: 10
      },
      // when window width is >= 850px
      850: {
        slidesPerView: 6,
        spaceBetween: 10
      }
    }
});

const swiperTwo = new Swiper('.swiper-2', {
    loop: false,
    spaceBetween: 15,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      // when window width is >= 850px
      850: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
});