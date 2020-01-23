// IMPORT MODULES under test here:
import renderBrewer from '../products/render-brewer.js';

const test = QUnit.test;

QUnit.module('Render Brewer');

test('render a brewer', function(expect) {
    //Arrange
    // Set up your parameters and expectations

    const chemex = {
        id: 'chemex',
        name: 'Chemex',
        image: '../assets/chemex.png',
        description: 'Delicate and slightly more user-friendly than the V60.',
        category: 'pour-over',
        price: 30.00,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
   
    const chemexLi = renderBrewer(chemex);    
    
    //Assert
    // Make assertions about what is expected valid result

    const actual = chemexLi.outerHTML;

    const expected = '<li class="pour-over" title="Delicate and slightly more user-friendly than the V60."><img src="../assets/chemex.png" alt="Chemex image"><h3>Chemex</h3><p class="price">$30.00<button value=\"Add\"></button></p></li>';

    expect.equal(actual, expected);
});


{/* <p class="price">$1.00<button value=\"Add\"></button></p></li>'; */}