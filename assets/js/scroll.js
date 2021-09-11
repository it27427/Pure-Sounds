// HEADER BACKGROUND CHANGE ON SCROLL
let header = document.querySelector('header');
let wrapper = document.querySelector('.wrapper');

window.addEventListener('scroll', () => {
    let windowPosition = window.scrollY > 0;

    if(windowPosition) {
        wrapper.classList.remove('dark-header-wrapper');
        header.classList.remove('dark-header');
        wrapper.classList.add('header-wrapper');
        header.classList.add('home-header');
    } else {
        wrapper.classList.remove('header-wrapper');
        header.classList.remove('home-header');
        wrapper.classList.add('dark-header-wrapper');
        header.classList.add('dark-header');
    }
});

let backgroundChanger = document.querySelector('.bg-changer');

backgroundChanger.addEventListener('click', () => {
    wrapper.classList.toggle('header-wrapper');
    header.classList.toggle('home-header');
    wrapper.classList.toggle('dark-header-wrapper');
    header.classList.toggle('dark-header');
});