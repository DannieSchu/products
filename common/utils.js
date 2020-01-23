// Define a function that takes and id and an array
const findById = (brewerId, brewerArray) => {
    for (let i = 0; i < brewerArray.length; i++) {
        const brewer = brewerArray[i];
        if (brewerId === brewer.id) {
            return brewer;
        }
    }
};

// const findById = (brewerId, brewerArray) => {

//     brewerArray.forEach(brewerArray => {
//         i++;
//         const brewer = brewerArray[i];
//         if (brewerId === brewer.id) {
//             return brewer;
//         }
//     });
// };


const calcLineItem = (quantity, price) => {
    return (Math.round(price * 100) / 100) * quantity;
};

export { findById, calcLineItem };