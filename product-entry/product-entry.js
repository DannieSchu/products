import renderBrewer from '../products/render-brewer.js';
import renderNewBrewer from './render-new-brewer.js';
import { getProducts } from '../common/utils.js';
import removeProduct from './remove-product.js';


// Get reference to form element
const form = document.querySelector('form');

// Get brewers list element from dom
const productList = document.getElementById('brewers');

// Get button from dom
const addButton = document.getElementById('form-button');

// Get brewers from local storage
const brewers = getProducts();

// Display brewers on page
brewers.forEach(brewer => {
    // Render each brewer
    const newDom = renderBrewer(brewer);
    productList.appendChild(newDom);

    // Create "remove button" for each product
    const removeButton = document.createElement('remove-button');
    removeButton.id = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.value = brewer.code;
    removeButton.classList.add('brown-button');
    productList.appendChild(removeButton);

    // When button is clicked, remove product from array
    removeButton.addEventListener('click', (product) => {
        removeProduct(product, brewers);
        productList.querySelector('li').remove(product);
        removeButton.remove(product);
    });
}); 

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a new FormData object
    const formData = new FormData(form);    
    // Create new product object from form data
    const newProduct = {
        name: formData.get('name'),
        id: formData.get('id'),
        image: formData.get('image'),
        price: formData.get('price'),
    };
    
    // add a product to the array of brewers in local storage
    brewers.push(newProduct);

    // create list element with new product
    const newProductDom = renderNewBrewer(newProduct);
    productList.appendChild(newProductDom);

    // productList.appendChild(newProductDom);
    const stringifiedProductArray = JSON.stringify(brewers);
    localStorage.setItem('brewers', stringifiedProductArray);
    
    // Reset the form
    form.reset();
}
);