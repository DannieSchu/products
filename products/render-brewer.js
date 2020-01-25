// import findById from '../common/utils.js';
import { getCart, addToCart } from '../shopping-cart/make-api.js';

export default function renderBrewer(brewer) {
    // Create list element that contains a class and title (assigned to category and description)
    const li = document.createElement('li');
    // The class of the list element should correspond to the brewer category
    li.className = brewer.category;
    // The title of the list element should correspond to the brewer description
    li.title = brewer.description;

    // Create an image
    const img = document.createElement('img');
    // Assign image source and alt text
    img.src = '../assets/' + brewer.image;
    img.alt = brewer.name + ' image'; 
    // Append the img element to the li element
    li.appendChild(img);

    // Create an h3 element
    const h3 = document.createElement('h3');
    // The content of the element should correspond to the brewer name
    h3.textContent = brewer.name;
    // Append the h3 element to the li element
    li.appendChild(h3);

    // Create a p element
    const p = document.createElement('p');
    // The class of the p element should be 'price'
    // p.className = 'price';
    p.classList.add('price');

    // Calculate the price
    const usd = '$' + brewer.price.toFixed(2);
    p.textContent = usd;

    // Add button
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.className = 'add-button';
    addButton.value = brewer.id;
    
    // When button is clicked
    addButton.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart = getCart(json);
        addToCart(cart, brewer);
        
        // Alert user that an item has been added to cart
        alert(`You've added one ${brewer.name} to your cart.`);
    });

    li.appendChild(p);
    li.appendChild(addButton);

    return li;
}