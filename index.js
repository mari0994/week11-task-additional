const firstPrice = document.getElementById('price-first');
const secondPrice = document.getElementById('price-second');
const thirdPrice = document.getElementById('price-third');
const fourthPrice = document.getElementById('price-fourth');

const firstPriceNumber = +firstPrice.innerHTML;
const secondPriceNumber = +secondPrice.innerHTML;
const thirdPriceNumber = +thirdPrice.innerHTML;
const fourthPriceNumber = +fourthPrice.innerHTML;

const sumBefore = firstPriceNumber + secondPriceNumber + thirdPriceNumber + fourthPriceNumber;

function calculatePrice(){
    const sumDiscount = document.querySelector('.total-price-quantity');
    sumDiscount.innerHTML = sumBefore - sumBefore * 0.2;
}

const button = document.querySelector('.btn-calculate');

button.addEventListener('click', calculatePrice);