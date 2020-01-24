// Define a function that takes and id and an array
export default function findById(someBrewerId, someBrewerArray) {
    for (let i = 0; i < someBrewerArray.length; i++) {
        const aBrewer = someBrewerArray[i];
        if (someBrewerId === aBrewer.id) {
            return aBrewer;
        }
    }
}

// const findById = (someBrewerId, someBrewerArray) => {

//     someBrewerArray.forEach(brewer => 
//         if (someBrewerId === brewer.id) {
//             return brewer;
//         }
// };

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

// export function calcLineTotal(quantity, price) {
//     return (Math.round((quantity * price) * 100) / 100);
// }

export function calcOrderTotal(someCart, someBrewerArray) {
    let orderTotal = 0;
    
    // loop through all items in someCart array
    for (let i = 0; i < someCart.length; i++) {
        // Store each cart item as a variable
        let lineItem = someCart[i];
        // Find someBrewerArray by ID and store in variable
        const someBrewer = findById(lineItem.id, someBrewerArray);
        console.log('line item quantity is', lineItem.quantity);
        console.log('someBrewer price is', someBrewer.price);
        // Execute calcLineTotal function, passing in quantity and price
        const lineTotal = calcLineTotal(lineItem.quantity, someBrewer.price);
        console.log('line total is', lineTotal);
        
        orderTotal += lineTotal;
        console.log('order total is', orderTotal);
    }
    return roundCurrency(orderTotal);
}