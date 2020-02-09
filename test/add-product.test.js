// IMPORT MODULES under test here:
import addProduct from '../products/add-product.js';
 
const test = QUnit.test;

QUnit.module('Add a product');

test('adding a product', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const siphon = {
        id: 'siphon',
        name: 'Siphon',
        image: 'https://www.flavoursplace.com/images/thumbnails/475/475/detailed/1/Hario_Coffee_Syphon_NEXT.png',
        price: 80,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const stringifiedProductArray = addProduct(siphon);

    // const products = localStorage.getItem(stringifiedProductArray);
    // const parsedProducts = JSON.parse(products); 

    const lastItem = stringifiedProductArray.pop();

    //Assert
    // Make assertions about what is expected valid result
    expect.deepEqual(lastItem, siphon);
});