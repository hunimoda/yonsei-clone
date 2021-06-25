// constants
const HIDDEN_CLASS = 'hidden';

// html elements
const more = document.querySelector('.bottom__more');
const moreSpan = more.querySelector('span');
const moreNav = more.querySelector('.bottom__navbar');

function onMouseInOutMore() {
    moreSpan.classList.toggle(HIDDEN_CLASS);
    moreNav.classList.toggle(HIDDEN_CLASS);
}

function mainApp() {
    more.addEventListener('mouseenter', onMouseInOutMore);
    more.addEventListener('mouseleave', onMouseInOutMore);
}
mainApp();