
const assertEqual = require('../assertEqual');
const assertEqualTest = function(actual, expected) {
  //console.assert(assertEqual(actual === expected),);
  // if(actual=== expected){
  //     console.log('Assertion passed: %s === %s', actual, expected) 
  // } else{
  //     console.log('Assertion failed: %s !==  %s ', actual, expected)
  // }
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


module.exports = assertEqualTest;