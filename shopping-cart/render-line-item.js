// import cart from '../data/cart.js';
import { calcLineTotal } from '../common/utils.js';


export default function renderLineItem(lineItem, someBrewer) {
    // Create element that contains a name, a quantity and a price
    const tr = document.createElement('tr');
    
    // In first cell, place name property
    const nameTd = document.createElement('td');
    nameTd.textContent = someBrewer.name;
    tr.appendChild(nameTd);

    // In second cell, place quantity
    const quantityTd = document.createElement('td');
    quantityTd.textContent = lineItem.quantity;
    tr.appendChild(quantityTd);

    // In third cell, place price
    const priceTd = document.createElement('td');
    // priceTd.textContent = toUSD(someBrewer.price);
    priceTd.textContent = someBrewer.price;
    tr.appendChild(priceTd);

    // In fourth cell, place total
    const totalTd = document.createElement('td');
    
    totalTd.className = 'line-item-total';
    // const total = lineItem.quantity * someBrewer.price;
    const total = calcLineTotal(lineItem.quantity, someBrewer.price);
    // totalTd.textContent = toUSD(total);
    totalTd.textContent = total;
    tr.appendChild(totalTd);
    

    return tr;
}