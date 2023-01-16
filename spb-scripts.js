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

var swiper = new Swiper('.swiper-slider .swiper-advanced-plays-slider', {
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
        nextEl: ".swiper-slider .swiper-button-next.plays-2",
        prevEl: ".swiper-slider .swiper-button-prev.plays-2",
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

// Replace Play Card Facts
var Webflow = Webflow || [];
Webflow.push(function() {
    $('.swiper-plays-slider .facts-group').each(function (groupIndex, group) {
        $(group).find('.facts-resort').each(function (resortIndex, resort) {
            var unorderedListItems = $(resort).find('.unordered-list-item')
            var checkListItems = $(resort).find('.check-list-item')

            var unorderedList = $(group).find('.fact-group .unordered-list');
            var checkList = $(group).find('.fact-group .check-list');

            $(unorderedListItems).appendTo(unorderedList);
            $(checkListItems).appendTo(checkList);

            if (resortIndex + 1 === $(group).find('.facts-resort').length) {
                $(group).find('.w-dyn-list').remove();
            }
        });
    });
});