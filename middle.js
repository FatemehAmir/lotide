// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {

  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
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
  if (actual === expected) {
    console.log('Assertion passed: %s === %s', actual, expected);
  } else {
    console.log('Assertion failed: %s !==  %s ', actual, expected);
  }
};
// ACTUAL FUNCTION

  const median = function(arr) {

    arr = arr.sort();
    if (arr.length % 2 === 0) { // array with even number elements
      return (arr[arr.length/2] + arr[(arr.length / 2) - 1]) / 2;
    }
    else {
      return arr[(arr.length - 1) / 2]; // array with odd number elements
    }
    }




// TEST CODE
/* middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3])
middle([1]) // => []
middle([1, 2]) // => []*/