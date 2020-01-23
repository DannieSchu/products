// import cart from '../data/cart.js';
import { calcLineItem } from '../common/utils.js';


export default function renderLineItem(lineItem, brewer) {
    // Create element that contains a name, a quantity and a price
    const tr = document.createElement('tr');
    
    // In first cell, place name property
    const nameTd = document.createElement('td');
    nameTd.textContent = brewer.name;
    tr.appendChild(nameTd);

    // In second cell, place quantity
    const quantityTd = document.createElement('td');
    quantityTd.textContent = lineItem.quantity;
    tr.appendChild(quantityTd);

    // In third cell, place price
    const priceTd = document.createElement('td');
    // priceTd.textContent = toUSD(brewer.price);
    priceTd.textContent = brewer.price;
    tr.appendChild(priceTd);

    // In fourth cell, place total
    const totalTd = document.createElement('td');
    
    totalTd.className = 'line-item-total';
    // const total = lineItem.quantity * brewer.price;
    const total = calcLineItem(lineItem.quantity, brewer.price);
    // totalTd.textContent = toUSD(total);
    totalTd.textContent = total;
    tr.appendChild(totalTd);
    

    return tr;
}