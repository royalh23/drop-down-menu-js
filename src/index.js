import './style.css';

function activateMenu(menuBtnClass, menuClass, closeBtnClass) {
  const menuBtn = document.querySelector(`.${menuBtnClass}`);
  const menu = document.querySelector(`.${menuClass}`);
  const closeBtn = document.querySelector(`.${closeBtnClass}`);

  menuBtn.addEventListener('click', () => menu.classList.toggle('visible'));

  closeBtn.addEventListener('click', () => menu.classList.toggle('visible'));
}

activateMenu('menu-icon', 'menu', 'close-icon');
