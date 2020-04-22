// IMPORT MODULES under test here:
// import example from '../src/example.js';
import addLocalStorage from '../common/addLocalStorage.js';



const test = QUnit.test;

test('test to check if a key and object is added to local storage', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        name: 'username',
        id: 'test123',
        img: 0,
        favorites: {},
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = '{"name":"username","id":"test123","img":0,"favorites":{}}';
    addLocalStorage(user.id, user);
    const result = localStorage.getItem('TEST123');

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
