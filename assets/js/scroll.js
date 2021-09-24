// HEADER BACKGROUND CHANGE ON SCROLL
let header = document.querySelector('header');
let wrapper = document.querySelector('.wrapper');

window.addEventListener('scroll', () => {
    let windowPosition = window.scrollY > 0;

    const whiteLogo = document.querySelector('.whitelogo');
    const blackLogo = document.querySelector('.blacklogo');

    if(windowPosition) {
        wrapper.classList.remove('dark-header-wrapper');
        header.classList.remove('dark-header');
        wrapper.classList.add('header-wrapper');
        header.classList.add('home-header');
        blackLogo.classList.remove('d-none');
        whiteLogo.classList.add('d-none');
    } else {
        wrapper.classList.remove('header-wrapper');
        header.classList.remove('home-header');
        wrapper.classList.add('dark-header-wrapper');
        header.classList.add('dark-header');
        blackLogo.classList.add('d-none');
        whiteLogo.classList.remove('d-none');
    }
});

let backgroundChanger = document.querySelector('.bg-changer');

backgroundChanger.addEventListener('click', () => {
    wrapper.classList.toggle('header-wrapper');
    header.classList.toggle('home-header');
    wrapper.classList.toggle('dark-header-wrapper');
    header.classList.toggle('dark-header');
});