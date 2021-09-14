const viewAll = document.querySelectorAll('.view-btn');

for(i of viewAll) {
    i.addEventListener('click', () => {
        const listElements = document.querySelectorAll('.categorylist');

        for(list of listElements) {
            if(list.classList.contains('shown')) {
                list.classList.remove('shown');
            } else {
                list.classList.add('shown');
            }
        }
    });
}



console.log(viewAll);