//const assertEqual = require('./assertEqual');
const tail=function(array1){
  let tailArray=[];
  for(let i=1 ;i<array1.length ;i++){
    tailArray.push(array1[i]);
  }
  return tailArray;
}

// //test

// const eqArrays = function(array1, array2) {

//   for (i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// // TO TEST OUR OTHERS FUNCTIONS
// // Actual = our test function
// // expected = what our test function will return
// const assertEqual = function(actual, expected) {
//   //console.assert(assertEqual(actual === expected),);
//   if (actual === expected) {
//     console.log('Assertion passed: %s === %s', actual, expected);
//   } else {
//     console.log('Assertion failed: %s !==  %s ', actual, expected);
//   }
// };

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
module.exports = tail;