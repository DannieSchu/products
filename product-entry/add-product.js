import { getProducts } from '../common/utils.js';

export default function addProduct(newProduct) {    
    // Get existing products
    const brewers = getProducts();
    
    // Push the new product into the existing array
    brewers.push(newProduct);
    
    // Re-save the products array
    const stringifiedProductArray = JSON.stringify(brewers);
    localStorage.setItem('brewers', stringifiedProductArray);

    return stringifiedProductArray;
}