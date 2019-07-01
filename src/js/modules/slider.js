import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { lory } from 'lory.js';

$(document).ready(function (){
  const slider = $(`.slider`);
  if (slider) {
    $('.owl-carousel').owlCarousel({
      items: 1,
      navContainer: `.slider__arrows`,
      navContainerClass: `slider__arrows`,
      dots: true,
      dotsContainer: `.slider__dots`,
      dotsClass: `slider__dots`,
      responsive: {
        0: {
          nav: false,
        },
        1024: {
          nav: true,
        },
      }
    });
    console.log(slider);
  }
});
