import removeFromLocal from '../common/removeFromLocal.js';
import addLocalStorage from '../common/addLocalStorage.js';

const test = QUnit.test;

QUnit.module('Local Storage');

// test('Test removing an object from an array', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations
//     const data = [
//         {
//             id: 'rhubarb',
//             season: 3
//         }, {
//             id: 'cherry',
//             season: 4
//         }, {
//             id: 'watermelon',
//             season: 4
//         }
//     ];

//     addLocalStorage('FRUIT', data);

//     const expected = 	
//     [
//         {
//             id: 'rhubarb',
//             season: 3
//         },
//         {
//             id: 'cherry',
//             season: 4
//         }
//     ];
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = removeFromLocal('watermelon', 'FRUIT');
//     console.log(actual);
//     //Assert
//     // Make assertions about what is expected valid result
//     assert.equal(actual, expected);
// });