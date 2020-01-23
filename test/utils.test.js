import findById from '../common/utils.js';
import brewers from '../data/brewers.js';

const test = QUnit.test;

QUnit.module('Utils');

test('find by id', function(expect) {
 //Arrange
    // Set up your parameters and expectations
    const id = 'chemex';
    const expected = 'Chemex';

    //Act 
    // Call the function you're testing and set the result to a const
    const match = findById(id, brewers);
    
    //Assert
    // Make assertions about what is expected valid result
    expect.equal(match.name, expected);
});
