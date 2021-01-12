const eqArrays = function(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  const arraysEqual = eqArrays(array1, array2); // true or false
  if (arraysEqual) {
    console.log('Assertion passed: %s is equal to %s', array1, array2);
  } else {
    console.log('Assertion failed: %s is not equal to %s', array1, array2);
  }
}
module.exports = assertArraysEqual;
