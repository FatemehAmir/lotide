
const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  // Compares objects length
  if (array1.length !== array2.length) return false;
  for (let key in object1) {
    // Uses the eqArrays function is values are arrays
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
    // If they are not arrays assumes the values are primitives and compare them
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// Tests
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);