let head = document.querySelector('.blog-head');
let sticky = head.offsetTop;

window.addEventListener('scroll', () => {
    let windowPosition = window.pageYOffset;

    if(windowPosition > sticky) {
        head.classList.add('sticky-head');
    } else {
        head.classList.remove('sticky-head');
    }
});