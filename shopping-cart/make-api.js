import findById from '../common/utils.js';

const getCart = json => {
    // Initialize state of 'cart'
    let cart;
    
    // If json already exists
    if (json) {
        // then parse the contents and assign to variable
        cart = JSON.parse(json);
        // else, assign variable to empty array
    } else {
        cart = [];
    }
    return cart;
};

const addToCart = (cart, brewer) => {
    
    // Initialize state
    const itemAlreadyInCart = findById(brewer.id, cart);

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
    const newCart = JSON.stringify(cart);
    localStorage.setItem('CART', newCart);
};

const clearCart = (cart) => {
    // Display alert with contents of cart
    alert(`Order placed: ${JSON.stringify(cart, true, 2)}`);
    
    // Update JSON by clearing cart
    localStorage.clear(cart);

    // Redirect user to homepage
    window.location = '../';

};

export { 
    getCart, 
    addToCart, 
    clearCart 
};