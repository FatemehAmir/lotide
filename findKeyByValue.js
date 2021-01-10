const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const findKeyByValue = function(object, value) {
  const keysArray = Object.keys(object);
  for (let element of keysArray) {
    if (object[element] === value) return element;
  }
}
//test 

const assertEqual = function(actual, expected) {
  //console.assert(assertEqual(actual === expected),);
  if(actual=== expected){
      console.log('Assertion passed: %s === %s', actual, expected) 
  } else{
      console.log('Assertion failed: %s !==  %s ', actual, expected)
  }
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
 