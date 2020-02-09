import addProduct from './add-product.js';
// import renderBrewer from '../products/render-brewer.js';
import renderNewBrewer from './render-new-brewer.js';


// Get reference to form element
// const form = document.getElementById('product-entry-form');
const form = document.querySelector('form');

// Get brewers list element from dom
const productList = document.getElementById('brewers');

// Get button from dom
const addButton = document.getElementById('form-button');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a new FormData object
    const formData = new FormData(form);    
    // create new product object from form data
    // const numberizedPrice = Number(formData.get('price'));
    const newProduct = {
        name: formData.get('name'),
        id: formData.get('id'),
        image: formData.get('image'),
        // price: `$${numberizedPrice.toFixed(2)}`
        price: formData.get('price'),
    };
    
    // add a product to the array of brewers in local storage
    addProduct(newProduct);

    // create list element with new product
    const newProductDom = renderNewBrewer(newProduct);

    productList.appendChild(newProductDom);

    // Reset the form
    form.reset();

}
);
