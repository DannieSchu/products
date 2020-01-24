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


export function calcLineItem(quantity, price) {
    return (Math.round(price * 100) / 100) * quantity;
}

export function calcOrderTotal(someCart, someBrewerArray) {
    let orderTotal = 0;
    
    
    // loop through all items in someCart array
    for (let i = 0; i < someCart.length; i++) {
        // Store each cart item as a variable
        const lineItem = someCart[i];
        // Find someBrewerArray by ID and store in variable
        const someBrewer = findById(lineItem.id, someBrewerArray);
        // Execute calcLineItem function, passing in quantity and price
        const lineTotal = calcLineItem(lineItem.quantity, someBrewer.price);

        orderTotal += lineTotal;

        return orderTotal;
    }
}