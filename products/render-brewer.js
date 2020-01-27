import { getCart, addToCart } from '../shopping-cart/make-api.js';
import { toUSD } from '../common/utils.js';

export default function renderBrewer(brewer) {
    // Create list element in the DOM
    const listElement = document.createElement('li');
    // The class of the list element should correspond to the brewer category
    listElement.className = brewer.category;
    // The title of the list element should correspond to the brewer description
    listElement.title = brewer.description;

    // Create an image
    const img = document.createElement('img');
    img.src = '../assets/' + brewer.image;
    img.alt = brewer.name + ' image'; 

    // Create an h3 element
    const h3 = document.createElement('h3');
    h3.textContent = brewer.name;

    // Create a p element
    const p = document.createElement('p');
    p.classList.add('price');

    // Calculate the price
    // const usd = '$' + brewer.price.toFixed(2);
    p.textContent = toUSD(brewer.price);

    // Create button element
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.classList.add('add-button');
    addButton.value = brewer.code;

    // Create dropdown element
    // const quantityDropDown = document.createElement('select');
    // quantityDropDown.name = 'quantities';
    // quantityDropDown.value = brewer.id;
    // const quantityOne = document.createElement('option');
    // quantityOne.value = 1;
    // quantityOne.textContent = 1;
    // const quantityTwo = document.createElement('option');
    // quantityTwo.value = 2;
    // quantityTwo.textContent = 2;
    // const quantityThree = document.createElement('option');
    // quantityThree.value = 3;
    // quantityThree.textContent = 3;

    // Append dropdown menu to button
    // addButton.appendChild(quantityDropDown);
    // quantityDropDown.appendChild(quantityOne);
    // quantityDropDown.appendChild(quantityTwo);
    // quantityDropDown.appendChild(quantityThree);

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