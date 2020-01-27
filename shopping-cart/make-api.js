import { findById } from '../common/utils.js';

const getCart = json => {
    // Initialize state of cart
    let possiblyEmptyCart;
    
    // If json already exists
    if (json) {
        // then parse the contents and assign to variable
        possiblyEmptyCart = JSON.parse(json);
        // else, assign variable to empty array
    } else {
        possiblyEmptyCart = [];
    }
    return possiblyEmptyCart;
};

const addToCart = (cart, brewer) => {
    
    // Look throughthe arrays of brewers and current cart state in localStorage for a match; store this as a variable 
    const requestedItem = findById(brewer.id, cart);

    // If item isn't already present in cart
    if (!requestedItem) {
        // Set as initial instance of item
        const initialItem = {
            id: brewer.id,
            quantity: 1,
        };
        // Then push it to the cart
        cart.push(initialItem);
    // If item is in the cart, increment quantity property
    } else {
        requestedItem.quantity++;
    }
    // Stringify cart object and store as variable
    const newCart = JSON.stringify(cart);
    // Set new item in local storage with key of CART and value of stringified cart object 
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