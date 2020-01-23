import { findById, calcLineItem } from '../common/utils.js';
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

// This function takes an array and an id, and returns the first item found that has an .id property that matches the passed in id. It can return null if no match is found.

// test('return null if not found', function(expect) {
//    //Arrange
//       // Set up your parameters and expectations
//     const id = 'not found';  
//     const expected = 'null';
  
//       //Act 
//       // Call the function you're testing and set the result to a const
//     const match = findById(id, brewers);
      
//       //Assert
//       // Make assertions about what is expected valid result
//     expect.equal(match, expected);
// });


test('calculate line item', function(expect) {
  //Arrange
     // Set up your parameters and expectations
    const quantity = 3;
    const price = 20;
    const expected = 60;
 
     //Act 
     // Call the function you're testing and set the result to a const
    const total = calcLineItem(quantity, price);
     
     //Assert
     // Make assertions about what is expected valid result
    expect.equal(total, expected);
});