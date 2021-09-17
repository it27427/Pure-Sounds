// const searchForm = document.querySelector('.search-form');
// const searchField = document.querySelector('#search-field');
// const responsiveSearchField = document.querySelector('#responsivesearch-field');
// const headerWrapper = document.querySelector('.header-wrapper');
// const headerOverlay = document.querySelector('.header-overlay');
// const loader = document.querySelector('.loaderbox');

// const searchSuggestion = document.querySelector('.search-suggestions');
// let filter = searchField.value.toUpperCase();
// const suggestionsList = document.querySelector('suggestion-list');

// searchField.addEventListener('keyup', showSearchSuggestions);
// responsiveSearchField.addEventListener('keyup', showSearchSuggestions);


// function showSearchSuggestions() {
//     if(loader.classList.contains('show')) {
//         loader.classList.remove('show');
//     } else {
//         loader.classList.add('show');
//     }

//     if(searchField.value > 0 && searchSuggestion.classList.contains('show')) {
//         searchSuggestion.classList.remove('show');
//         loader.classList.remove('show');
//     } else if((searchField.value == 0 || searchField.value == null) && searchSuggestion.classList.contains('show')) {
//         searchSuggestion.classList.remove('show');
//         loader.classList.add('show');
//     } else {
//         searchSuggestion.classList.add('show');
//         loader.classList.add('show');
//     }

//     if(responsiveSearchField.value > 0 && responsiveSearchField.classList.contains('show')) {
//         responsiveSearchField.classList.remove('show');
//         loader.classList.remove('show');
//     } else if((searchField.value == 0 || searchField.value == null) && responsiveSearchField.classList.contains('show')) {
//         responsiveSearchField.classList.remove('show');
//         loader.classList.add('show');
//     } else {
//         responsiveSearchField.classList.add('show');
//         loader.classList.add('show');
//     }

//     if(headerWrapper.classList.contains('shadowless')) {
//         headerWrapper.classList.remove('shadowless');
//     } else {
//         headerWrapper.classList.add('shadowless');
//     }
    
//     if(headerOverlay.classList.contains('show')) {
//         headerOverlay.classList.remove('show');
//     } else {
//         headerOverlay.classList.add('show');
//     }
// }



// window.addEventListener('click', e => {
//     // console.log(e.target);
//     // if(e.target != searchForm) {
//     //     headerOverlay.classList.remove('show');
//     //     searchSuggestion.classList.remove('show');
//     //     loader.classList.remove('show');
//     // } else {
//     //     return false;
//     // }

//     // if(e.target !== headerOverlay) {
//     //     headerOverlay.classList.remove('show');
//     // } else {
//     //     return false;
//     // }

//     // if(e.target == headerOverlay) {
//     //     headerOverlay.classList.remove('show');
//     // } else {
//     //     return false;
//     // }


//     // if(searchSuggestion.classList.contains('show')) {
//     //     headerOverlay.classList.remove('show');
//     //     searchSuggestion.classList.remove('show');
//     //     loader.classList.remove('show');
//     // } else {
//     //     return false;
//     // }
// });