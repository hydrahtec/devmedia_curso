"use strict";

const openMenu = document.querySelector('#openMenu')
const closeMenu = document.querySelector('#closeMenu')
const menu = document.querySelector('#menu')

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';

    openMenu.style.display = 'none';

    menu.style.right = (menu.offsetWidth * -1) + 'px'
    // move o elemento para fora da tela.
    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
        // tras o elemento para dentro da tela novamente
    }, 10);
});

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
   
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    // move o elemento para fora da tela.

    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 300);
});