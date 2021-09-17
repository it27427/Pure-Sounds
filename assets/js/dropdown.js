const dropdownLink = document.querySelector('.dropdown-link');
const dropdownMenu = document.querySelector('.dropdownmain');

dropdownLink.addEventListener('mouseover', () => {

    if(dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    } else {
        dropdownMenu.classList.add('show');
    }
});

window.addEventListener('click', e => {  
    if(e.target !== dropdownMenu) {
        dropdownMenu.classList.remove('show');
    } else {
        return false;
    }

    if(e.target === dropdownMenu) {
        dropdownMenu.classList.add('show');
    } else {
        return false;
    }
});