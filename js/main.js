"use strict";

const jsButton = document.querySelector('.js-button');
const spMenu = document.querySelector('.sp-menu')
const body = document.querySelector('body')

jsButton.addEventListener('click', () => {
    spMenu.classList.toggle('is-open')
    jsButton.classList.toggle('is-open')
    body.classList.toggle('is-menu-open')
    if (jsButton.classList.contains('is-open')) {
        jsButton.setAttribute('aria-expanded', 'true')
    } else {
        jsButton.setAttribute('aria-expanded', 'false')
    }
});

const closeNav = document.querySelectorAll('.sp-menu .nav-list a');
closeNav.forEach(link => {
    link.addEventListener('click', () => {
        spMenu.classList.remove('is-open')
        jsButton.classList.remove('is-open')
        body.classList.remove('is-menu-open')
        jsButton.setAttribute('aria-expanded','false')

    })
});
