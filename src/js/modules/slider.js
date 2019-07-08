import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

window.addEventListener(`DOMContentLoaded`, () => {
  const bannersSlider = document.querySelector(`.banners__slider`);
  const productsSlider = document.querySelector(`.products__slider`);
  const investmentsSlider = document.querySelector(`.investments__slider`);
  const newsSlider = document.querySelector(`.news__slider`);
  let bannersSwiper;
  let productsSwiper;
  let investmentsSwiper;
  let newsSwiper;

  const bannersSwiperParams = {
    slidesPerView: 1,
    loop: true,
    loopAdditionalSlides: 3,
    autoplay: {
      delay: 6000,
      waitForTransition: false,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: `.banners .slider-arrows__arrow--next`,
      prevEl: `.banners .slider-arrows__arrow--prev`,
    },
    pagination: {
      el: '.slider-dots',
      clickable: true,
      bulletClass: `slider-dots__dot`,
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
    on: {
      touchStart: function (e) {
        this.autoplay.stop();
      },
      touchEnd: function (e) {
        this.autoplay.start();
      },
      slideChange: function () {
        const currentIndex = this.realIndex < 10 ? `0${this.realIndex + 1}` : `${this.realIndex + 1}`;
        this.el.querySelector(`.slider-pages__page--current`).textContent = currentIndex;
      }
    }
  };

  const productsSwiperParams = {
    slidesPerView: 'auto',
    loop: false,
    autoplay: false,
    navigation: false,
    pagination: false,
  };

  const investmentsSwiperParams = {
    slidesPerView: 'auto',
    loop: false,
    autoplay: false,
    navigation: false,
    pagination: false,
  };

  const newsSwiperParams = {
    slidesPerView: 'auto',
    loop: false,
    autoplay: false,
    navigation: {
      nextEl: `.news .slider-arrows__arrow--next`,
      prevEl: `.news .slider-arrows__arrow--prev`,
      disabledClass: `disabled`,
    },
    pagination: false,
  };

  if (bannersSlider) {
    bannersSwiper = new Swiper(bannersSlider, bannersSwiperParams);
  }

  if (productsSlider) {
    productsSwiper = new Swiper(productsSlider, productsSwiperParams);
  }

  if (investmentsSlider) {
    investmentsSwiper = new Swiper(investmentsSlider, investmentsSwiperParams);
  }

  if (newsSlider) {
    newsSwiper = new Swiper(newsSlider, newsSwiperParams);
  }

  if (window.innerWidth >= 1024) {
    productsSwiper.destroy();
    investmentsSwiper.destroy();
  }

  window.addEventListener(`resize`, () => {
    if (window.innerWidth >= 1024) {
      if (productsSwiper.initialized) {
        productsSwiper.destroy();
      }
      if (investmentsSwiper.initialized) {
        investmentsSwiper.destroy();
      }
    } else {
      if (!productsSwiper.initialized) {
        productsSwiper = new Swiper(productsSlider, productsSwiperParams);
      }
      if (!investmentsSwiper.initialized) {
        investmentsSwiper = new Swiper(investmentsSlider, investmentsSwiperParams);
      }
    }
  });
});
