// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
// import { lory } from 'lory.js';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

$(document).ready(function (){
  const slider = $(`.slider-top`);

  if (slider) {
    const mySwiper = new Swiper('.slider-top.swiper-container', {
      slidesPerView: 1,
      loop: true,
      loopAdditionalSlides: 3,
      autoplay: {
        delay: 6000,
        waitForTransition: false,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.slider-top__arrow--next',
        prevEl: '.slider-top__arrow--prev',
      },
      pagination: {
        el: '.slider-top__dots',
        clickable: true,
        bulletClass: `slider-top__dot`,
        bulletActiveClass: `active`,
        renderBullet: function (index, className) {
          return `
          <button class="${className}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="25"></circle>
            </svg>
          </button>`;
        },
      },
      breakpointsInverse: true,
      breakpoints: {
        // when window width is >= 1024px
        1024: {

        }
      },
      on: {
        touchStart: function (e) {
          this.autoplay.stop();
        },
        touchEnd: function (e) {
          this.autoplay.start();
        },
        slideChange: function () {
          const currentIndex = this.realIndex < 10 ? `0${this.realIndex + 1}` : `${this.realIndex + 1}`;
          $(this.el).find(`.slider-top__page--current`).text(currentIndex);
        }
      }
    });
  }
});
