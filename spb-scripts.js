var swiper = new Swiper('.swiper-slider .swiper-plays-slider', {
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
        nextEl: ".swiper-slider .swiper-button-next.plays",
        prevEl: ".swiper-slider .swiper-button-prev.plays",
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

  var swiper = new Swiper('.swiper-partner-slider', {
    // Default parameters
    spaceBetween: 0,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        660: {
            speed: 3000,
        },
    },
  });
