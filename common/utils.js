// Define a function that takes and id and an array

function findById(someBrewerId, someBrewerArray) {
    for (let i = 0; i < someBrewerArray.length; i++) {
        const someBrewer = someBrewerArray[i];
        if (someBrewerId === someBrewer.id) {
            return someBrewer;
        }
    }
}

function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
    
}

function calcOrderTotal(someCart, someBrewerArray) {
    let orderTotal = 0;
    
    // loop through all items in someCart array
    for (let i = 0; i < someCart.length; i++) {
        // Store each cart item as a variable
        let lineItem = someCart[i];
        // Find someBrewerArray by ID and store in variable
        const someBrewer = findById(lineItem.id, someBrewerArray);
        // Execute calcLineTotal function, passing in quantity and price
        const lineTotal = calcLineTotal(lineItem.quantity, someBrewer.price);        
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}


export { findById,
    toUSD,
    calcLineTotal,
    calcOrderTotal,
};