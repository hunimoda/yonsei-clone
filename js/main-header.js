// constants
const HIDDEN_CLASS = 'hidden';

// html elements
const more = document.querySelector('.bottom__more');
const moreSpan = more.querySelector('span');
const moreNav = more.querySelector('.bottom__navbar');

const openUtilMenuBtn = document.querySelector('.top-bar__navbar .open-util-menu');
const utilMenu = document.querySelector('.util-menu');
const exitUtilMenuBtn = utilMenu.querySelector('.util-menu__bar .util-menu__exit-btn');

function onMouseInOutMore() {
    moreSpan.classList.toggle(HIDDEN_CLASS);
    moreNav.classList.toggle(HIDDEN_CLASS);
}

function onUtilOpenClick() {
    utilMenu.classList.remove(HIDDEN_CLASS);
}

function onUtilCloseClick() {
    utilMenu.classList.add(HIDDEN_CLASS);
}

function mainApp() {
    more.addEventListener('mouseenter', onMouseInOutMore);
    more.addEventListener('mouseleave', onMouseInOutMore);

    openUtilMenuBtn.addEventListener('click', onUtilOpenClick);
    exitUtilMenuBtn.addEventListener('click', onUtilCloseClick);
}
mainApp();