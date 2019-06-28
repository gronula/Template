const header = document.querySelector(`.header`);
const mainNav = header.querySelector(`.main-nav__list`);
const mainNavItems = mainNav.querySelectorAll(`.main-nav__item`);

const mainNavLinkClickHandler = (evt) => {
  header.classList.toggle(`no-scroll`);
  const currentItem = evt.currentTarget.closest(`.main-nav__item`);
  mainNavItems.forEach((item) => {
    if (item !== currentItem) {
      item.classList.remove(`main-nav__item--opened`);
    }
  });
  currentItem.classList.toggle(`main-nav__item--opened`);
};

export { mainNavLinkClickHandler };
