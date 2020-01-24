import renderLineItem from './render-line-item.js';
import findById, { calcOrderTotal } from '../common/utils.js';
// import cart from '../data/cart.js';
import brewers from '../data/brewers.js';


const tBody = document.getElementById('tbody'); 
const orderTotalCell = document.getElementById('order-total-cell');

// Call local storage
const myCart = localStorage.getItem('CART');
let cart;
if (myCart) {
    cart = JSON.parse(myCart);
} else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const brewer = findById(lineItem.id, brewers);
    const newCartItem = renderLineItem(lineItem, brewer);

    tBody.append(newCartItem);
}

const orderTotal = calcOrderTotal(cart, brewers);


orderTotalCell.textContent = orderTotal;