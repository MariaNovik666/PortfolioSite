var menuElement = document.querySelector('.header__menu-mobile');

function menuClassToggle() {
    menuElement.closest('.header__menu').classList.toggle("open");
}

menuElement.addEventListener('click', menuClassToggle);