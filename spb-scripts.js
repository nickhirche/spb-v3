var swiper = new Swiper('.swiper-plays-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        600: {
        slidesPerView: 2,
        spaceBetween: 0,
        },
        // when window width is >= 640px
        960: {
        slidesPerView: 3,
        spaceBetween: 0,
        },
    },
    // Navigation
    navigation: {
        nextEl: ".swiper-button-next.plays",
        prevEl: ".swiper-button-prev.plays",
    },
});
var swiper = new Swiper('.swiper-story-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
        loopedSlides: 6,
    speed: 400,
    
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
                disableOnInteraction: false,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper('.swiper-challenges-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
    // Responsive breakpoints
        breakpoints: {
      // when window width is >= 480px
      660: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      960: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      },
    // Navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });