const creditPromoBtn = document.querySelector('#credit-promo-btn');
const creditInvoiceBtn = document.querySelector('#credit-invoice-btn');

creditPromoBtn.addEventListener('click', () => {
    const creditPromoBox = document.querySelector('#creditpromo');

    if(creditPromoBox.classList.contains('show')) {
        creditPromoBox.classList.remove('show');
    } else {
        creditPromoBox.classList.add('show');
    }
});

creditInvoiceBtn.addEventListener('click', () => {
    const creditInvoiceBox = document.querySelector('#creditinvoicebox');

    if(creditInvoiceBox.classList.contains('show')) {
        creditInvoiceBox.classList.remove('show');
    } else {
        creditInvoiceBox.classList.add('show');
    }
});


const paypalPromoBtn =document.querySelector('#paypal-promo-btn');
const paypalInvoiceBtn = document.querySelector('#paypal-invoice-btn');

paypalPromoBtn.addEventListener('click', () => {
    const paypalPromoBox = document.querySelector('#paypalpromo');

    if(paypalPromoBox.classList.contains('show')) {
        paypalPromoBox.classList.remove('show');
    } else {
        paypalPromoBox.classList.add('show');
    }
});

paypalInvoiceBtn.addEventListener('click', () => {
    const paypalInvoiceBox = document.querySelector('#paypalinvoicebox');

    if(paypalInvoiceBox.classList.contains('show')) {
        paypalInvoiceBox.classList.remove('show');
    } else {
        paypalInvoiceBox.classList.add('show');
    }
});

