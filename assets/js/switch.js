const switchCheck = document.querySelector('.switch-input');

switchCheck.addEventListener('click', () => {
    let checked = switchCheck.checked;
    const switchLabel = document.querySelector('.switch-label');

    if(checked) {
        switchLabel.textContent = 'On';
    } else {
        switchLabel.textContent = 'Off';
    }

    var successToast = document.querySelector('#successToast');
    let toast = new bootstrap.Toast(successToast);

    toast.show();
});