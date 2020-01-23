// Define a function that takes and id and an array
export default function findById(brewerId, brewerArray) {
    for (let i = 0; i < brewerArray.length; i++) {
        const brewer = brewerArray[i];
        if (brewerId === brewer.id) {
            return brewer;
        }
    }
}

// const findById = (brewerId, brewerArray) => {

//     brewerArray.forEach(brewerArray => {
//         i++;
//         const brewer = brewerArray[i];
//         if (brewerId === brewer.id) {
//             return brewer;
//         }
//     });
// };


export function calcLineItem(quantity, price) {
    return (Math.round(price * 100) / 100) * quantity;
}

export function calcOrderTotal(cart, brewers) {
    let orderTotal = 0;
    
    // loop through all items in cart array
    for (let i = 0; i < cart.length; i++) {
        // Store each cart item as a "lineItem"
        const lineItem = cart[i];
        // Find brewers by ID and store in variable
        const brewer = findById(brewers, lineItem.id);
        // Execute calcLineItem function, passing in quantity and price
        const lineTotal = calcLineItem(lineItem.quantity, brewer.price);

        orderTotal += lineTotal;

        return orderTotal;
    }
}