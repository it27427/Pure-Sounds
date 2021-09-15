const viewAll = Array.from(document.querySelectorAll('.view-btn'));

for(i of viewAll) {
    i.addEventListener('click', (e) => {
        let prevSibling = e.currentTarget.previousElementSibling;

        if(prevSibling.classList.contains('shown')) {
            prevSibling.classList.remove('shown');
        } else {
            prevSibling.classList.add('shown');
        }
    });
}
