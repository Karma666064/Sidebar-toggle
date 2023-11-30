const btn = document.querySelector('#btn');
const mainContainer = document.querySelector('#mainContainer');
const nav = document.querySelector('#nav');

btn.addEventListener('click', () => {
    mainContainer.classList.toggle('main-close-nav');
    nav.classList.toggle('nav-close-nav');
});