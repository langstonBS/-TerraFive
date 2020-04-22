// IMPORT MODULES under test here:
// import example from '../src/example.js';
import createUser from '../common/user.js';


const test = QUnit.test;

test('test if user object is created', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        name: 'username',
        id: 'username@123',
        img: 0,
        favorites:{ },
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = user;
    const result = createUser('username', 'username@123');
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, result);

});
