const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

//Test
/*const eqArrays = function(array1, array2) {
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
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);*/