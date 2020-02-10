import { getCart, addToCart } from '../shopping-cart/make-api.js';
import { toUSD } from '../common/utils.js';

export default function renderBrewer(brewer) {
    // Create list element in the DOM
    const listElement = document.createElement('li');

    // Create an image
    const img = document.createElement('img');
    img.src = brewer.image;
    img.style.width = '150px';
    img.alt = brewer.name + ' image'; 

    // Create an h3 element
    const h3 = document.createElement('h3');
    h3.textContent = brewer.name;

    // Create a p element
    const p = document.createElement('p');
    p.classList.add('price');

    // Calculate the price
    // const usd = '$' + brewer.price.toFixed(2);
    const numberizedPrice = Number(brewer.price);
    p.textContent = `$${numberizedPrice.toFixed(2)}`;
    // p.textContent = toUSD(brewer.price);

    // Create button element
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.classList.add('brown-button');
    addButton.value = brewer.code;

    // When button is clicked
    addButton.addEventListener('click', () => {
        // Get item (key: CART) from localStorage and assign variable json
        let json = localStorage.getItem('CART');

        // Get possibly empty cart and store as variable (parse contents if cart already exists; otherwise, create empty array)
        let possiblyEmptyCart = getCart(json);

        // Add requested item to cart
        addToCart(possiblyEmptyCart, brewer);
        
        // Alert user that an item has been added to cart
        alert(`You've added one ${brewer.name} to your cart.`);
    });
    
    // Append elements to new list element
    listElement.appendChild(h3);
    listElement.appendChild(img);
    listElement.appendChild(p);
    listElement.appendChild(addButton);
    
    // Return list element
    return listElement;
}