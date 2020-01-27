// import cart from '../data/cart.js';
import { toUSD, calcLineTotal } from '../common/utils.js';


export default function renderLineItem(lineItem, someBrewer) {
    // Create element that contains a name, a quantity and a price
    const tableRow = document.createElement('tr');
    
    // In first cell, place name property
    const nameCell = document.createElement('td');
    nameCell.textContent = someBrewer.name;
    nameCell.classList.add('product-heading');
    tableRow.appendChild(nameCell);

    // In second cell, place quantity
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tableRow.appendChild(quantityCell);

    // In third cell, place price
    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(someBrewer.price);
    // priceCell.textContent = someBrewer.price;
    tableRow.appendChild(priceCell);

    // In fourth cell, place total
    const totalCell = document.createElement('td');
    
    totalCell.className = 'line-item-total';
    // const total = lineItem.quantity * someBrewer.price;
    let total = calcLineTotal(lineItem.quantity, someBrewer.price);
    totalCell.textContent = toUSD(total);
    tableRow.appendChild(totalCell);

    return tableRow;
}