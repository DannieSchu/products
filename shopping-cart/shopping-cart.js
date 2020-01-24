import renderLineItem from './render-line-item.js';
import findById, { calcOrderTotal } from '../common/utils.js';
// import cart from '../data/cart.js';
import brewers from '../data/brewers.js';


const tBody = document.getElementById('tbody'); 
const orderTotalCell = document.getElementById('order-total-cell');

// Call local storage
let json = localStorage.getItem('CART');
// Initialize state
let cart;
// If cart already exists, parse contents
if (json) {
    cart = JSON.parse(json);
// If it doesn't exist, assign to empty array
} else {
    cart = [];
}
// For each item in the array
for (let i = 0; i < cart.length; i++) {
    // Find id match between brewers array and line items
    const lineItem = cart[i];
    const newItem = findById(lineItem.id, brewers);
    
    // Render line item for item in cart
    const dom = renderLineItem(lineItem, newItem);
    // Append new item to chart
    tBody.append(dom);
}

const orderTotal = calcOrderTotal(cart, brewers);
orderTotalCell.textContent = orderTotal;

// Call place order button
const orderButton = document.getElementById('order-button');

// When button is clicked
orderButton.addEventListener('click', () => {
    // Disable button if cart is empty
    if (cart.length === 0) {
        orderButton.disabled = true;
    } else {
        // Display alert with contents of cart
        alert(`Order placed: ${JSON.stringify(cart, true, 2)}`);
        
        // Update JSON by clearing cart
        json = localStorage.clear(cart);

        // Redirect user to homepage
        window.location = '../';
    }
}
);