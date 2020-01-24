import findById from '../common/utils.js';

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
    p.className = 'price';

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
        // Initialize state of 'cart' (hoisting)
        let cart;
        // Call local storage
        let json = localStorage.getItem('CART');
        
        // If json already exists
        if (json) {
            // then parse the contents and assign to variable
            cart = JSON.parse(json);
            // else, assign variable to empty array
        } else {
            cart = [];
        }

        // Initialize state
        let itemAlreadyInCart = findById(brewer.id, cart);

        // If item isn't already present in cart
        if (!itemAlreadyInCart) {
            // Set initial item
            const initialItem = {
                id: brewer.id,
                quantity: 1,
            };
            // Then push it to the cart
            cart.push(initialItem);
        } else {
            itemAlreadyInCart.quantity++;
        }
        
        // Update JSON with new state (serialize with JSON.stringify)
        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);
        
        // Alert user that an item has been added to cart
        alert(`1 ${brewer.name} added to cart.`);
    });

    li.appendChild(p);
    li.appendChild(addButton);

    return li;

}







    // <ul class="container" id="coffee-brewer">
    // <li class="pour-over" id="chemex" title="Delicate and slightly more user-friendly than the V60."></li>
    // <img src="../assets/chemex-white-bold.png" alt="Chemex">
    // <h3>Chemex</h3>
    // <p>Price: $30.00</p>
    // <button id="chemex-button" value="chemex">Add to Cart</button>
