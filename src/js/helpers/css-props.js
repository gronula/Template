import getScrollbarWidth from './get-scroll-width';

export default () => {
  window.addEventListener(`DOMContentLoaded`, () => {
    const scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty(`--scrollbar-width`, `${scrollbarWidth}px`);
  });
};
