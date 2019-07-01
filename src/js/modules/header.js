import { mainNavLinkClickHandler } from './main-nav';

window.addEventListener(`DOMContentLoaded`, () => {
  const header = document.querySelector(`.header`);
  const menuToggleBtn = header.querySelector(`.header__menu-toggle-btn`);
  const mainNavItems = header.querySelectorAll(`.main-nav__item`);
  const mainNavLinks = header.querySelectorAll(`.main-nav__link`);

  const menuToggleBtnClickHandler = () => {
    document.body.classList.toggle(`no-scroll`);
    header.classList.remove(`no-scroll`);
    header.classList.toggle(`header--opened`);
    mainNavItems.forEach((item) => {
      item.classList.remove(`main-nav__item--opened`);
    });
  };

  menuToggleBtn.addEventListener(`click`, menuToggleBtnClickHandler);
  mainNavLinks.forEach((link) => link.addEventListener(`click`,   mainNavLinkClickHandler));

  window.addEventListener(`resize`, () => {
    if (window.innerWidth >= 1024) {
      document.body.classList.remove(`no-scroll`);
      header.classList.remove(`no-scroll`);
      header.classList.remove(`header--opened`);
      mainNavItems.forEach((item) => {
        item.classList.remove(`main-nav__item--opened`);
      });
    }
  });
});
