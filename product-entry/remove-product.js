import { findByCode } from '../common/utils.js';

export default function removeProduct(product, array) {
    const productCode = product.code;
    const selectedProduct = findByCode(productCode, array);
    const productIndex = array.indexOf(selectedProduct); 
    const newProductArray = array.splice(productIndex, 1);
    return newProductArray;
}
