
const eqArrays= function(array1, array2) {

  for (i=0 ; i< array1.length ;i++){
    if (array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}



// TO TEST OUR OTHERS FUNCTIONS
// Actual = our test function
// expected = what our test function will return
const assertEqual = function(actual, expected) {
  //console.assert(assertEqual(actual === expected),);
  if(actual=== expected){
      console.log('Assertion passed: %s === %s', actual , expected) 
  }else{
      console.log('Assertion failed: %s !==  %s ', actual , expected)
  }
};






//FUNCTIONS THAT NEED TO BE TESTED
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true ) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false )// => false

//TESTS THAT WILL RUN (assert equals runs our tests)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);