
// SEE MORE AND LESS EVENT
const seeless = document.querySelector('.btn-showless');
const showmore = document.querySelector('.btn-showall');

seeless.addEventListener('click', toggleSeeLess);
showmore.addEventListener('click', toggleMore);

function toggleSeeLess() {
    const tagbox = document.querySelector('.tag-buttons');

    if(tagbox.classList.contains('show')) {
        tagbox.classList.remove('show');
        seeless.textContent = 'See more';
    } else {
        tagbox.classList.add('show');
        seeless.textContent = 'See less';
    }
}

function toggleMore() {
    const libraryBox = document.querySelector('.library-buttons');

    if(libraryBox.classList.contains('show')) {
        libraryBox.classList.remove('show');
        showmore.textContent = 'See more';
    } else {
        libraryBox.classList.add('show');
        showmore.textContent = 'See less';
    }
}

const collapseBtn = document.querySelector('.btn-collapse');
const collapse = document.querySelector('.collapse');


collapseBtn.addEventListener('click', () => {
    if(collapseBtn.classList.contains('active')) {
        collapseBtn.classList.remove('remove');
    } else {
        collapseBtn.classList.add('active');
    }
});