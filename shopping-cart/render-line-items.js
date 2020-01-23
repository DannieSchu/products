// import cart from '../data/cart.js';
import calcLineItem from '../common/utils/js';


export default function makeProductRow(cart) {
    // Create element that contains a name, a quantity and a price
    const tr = document.createElement('tr');
    
    // In first cell, place name property
    const td1 = document.createElement('td');
    td1.textContent = cart.name;
    tr.appencChild(td1);

    // In second cell, place quantity
    const td2 = document.createElement('td');
    td2.textContent = cart.quantity;
    tr.appencChild(td2);

    // In third cell, place price
    const td3 = document.createElement('td');
    td3.textContent = cart.price;
    tr.appencChild(td3);

    // In fourth cell, place product
    const td4 = document.createElement('td');
    const product = calcLineItem(cart.quantity, cart.price);
    td4.textContent = product;
    tr.appencChild(td4);
    

    return tr;

}



// Write a for a function that lives in /shopping-cart/render-line-items.js. This function takes both a cart line item, and the corresponding product, and returns dom that matches your static html example.

// Copy the cart line item data for the one that corresponds to the example, and either copy the product or use your findById function to locate the product and use as your input to your function
// Using the DOM API, create your static example programmatically using JavaScript. Start by creating the top level element (<tr> for the line item)

