const mobileDropdownLink = Array.from(document.querySelectorAll('.m-dropdownlink'));

for(link of mobileDropdownLink) {
    link.addEventListener('click', (e) => {
        let current = e.currentTarget;
        let dropdownMenu = current.nextElementSibling;

        if(dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            current.classList.remove('active');
        } else {
            dropdownMenu.classList.add('show');
            current.classList.add('active');
        }
    });
}