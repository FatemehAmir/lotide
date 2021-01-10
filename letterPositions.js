const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
  
    if (sentence[i] !== " ") {
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
    }
  }
  return results;
  
};


//test
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
              

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello hello").o, [4, 10]);
