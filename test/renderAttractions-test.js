// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderAttraction from '../details/renderAttractions.js';


const test = QUnit.test;

test('test to render an Attraction', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const test = {
        name: 'Peculiarium',
        description: 'An oddities museum',
        address: '2234 NW Thurman'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    //const expected = '<li><h4>Peculiarium</h4><p>An oddities museum</p><p>2234 NW Thurman</p></li>';
    const expected = '<li><h4>Peculiarium</h4><p>An oddities museum</p><p>2234 NW Thurman</p></li>';
    const renderedItem = renderAttraction(test);
    const result = renderedItem.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
