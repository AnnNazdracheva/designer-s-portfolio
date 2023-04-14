"use strict"

document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (targetElement.closest('[data-goto]')) {
    document.documentElement.classList.contains('menu-open') ? 
      document.documentElement.classList.remove('menu-open') : null;

    const targetNavElement = targetElement.closest('[data-goto]');
    const activeNavElement = document.querySelector('.menu__link.active');
    
    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (!targetNavElement.classList.contains('active')) {
      activeNavElement.classList.remove('active');
      targetNavElement.classList.add('active');
    }

    if (goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop - headerHeight,
        behavior: "smooth", 
      });
    }

    e.preventDefault();
  }
}