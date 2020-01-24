import renderLineItem from './render-line-item.js';
import findById, { calcOrderTotal } from '../common/utils.js';
import cart from '../data/cart.js';
import brewers from '../data/brewers.js';


const tBody = document.getElementById('tbody'); 
const orderTotalCell = document.getElementById('order-total-cell');


for (let i = 0; i < cart.length; i++) {
    // Store cart array index in variable
    const lineItem = cart[i];
    // Find object that corresponds with that item and store in variable
    const brewer = findById(lineItem.id, brewers);
    // Perform renderLineItems function on that item to render it to the table
    const newRowElement = renderLineItem(lineItem, brewer);
    
    // Append to the table body
    tBody.appendChild(newRowElement);
    
}
console.log(brewers);

const orderTotal = calcOrderTotal(cart, brewers);

orderTotalCell.textContent = orderTotal;