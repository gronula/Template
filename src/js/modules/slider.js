// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
// import { lory } from 'lory.js';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

$(document).ready(function (){
  const slider = $(`.slider`);

  if (slider) {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      loopAdditionalSlides: 3,
      autoplay: {
        delay: 6000,
        waitForTransition: false,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.slider__arrow--next',
        prevEl: '.slider__arrow--prev',
      },
      pagination: {
        el: '.slider__dots',
        clickable: true,
        bulletClass: `slider__dot`,
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
          $(this.el).find(`.slider__page--current`).text(currentIndex);
        }
      }
    });


    // const owl = $(`.owl-carousel`);
    // owl.owlCarousel({
    //   autoplay: true,
    //   autoplayTimeout: 6000,
    //   autoplaySpeed: 1000,
    //   autoplayHoverPause: true,
    //   loop: true,
    //   items: 1,
    //   startPosition: 0,
    //   dots: true,
    //   dotsContainer: `#slider__dots`,
    //   nav: false,
    //   onInitialized: function () {
    //     $(`.slider__dot:first-of-type`).addClass(`active`);
    //   },
    //   onChange: function () {
    //     $(`.slider__dot.active`).removeClass(`active`);
    //   },
    //   onChanged: function (e) {
    //     const currentIndex = e.item.index - 2 < 0 ? 0 : e.item.index - 2;
    //     $(`.slider__dot`).eq(currentIndex).addClass(`active`);
    //   }
    // });
    // $(`.slider__dots`).on(`click`, `.slider__dot`, function() {
    //   owl.trigger(`to.owl.carousel`, [$(this).index(), 300]);
    //   $(`.slider__dot.active`).removeClass(`active`);
    //   $(this).addClass(`active`);
    // });
  }
});
