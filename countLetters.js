const assertEqual = function(actual, expected) {
  //console.assert(assertEqual(actual === expected),);
  if(actual=== expected){
      console.log('Assertion passed: %s === %s', actual, expected) 
  } else{
      console.log('Assertion failed: %s !==  %s ', actual, expected)
  }
};

const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") { // Filters the spaces in the string
        if (result[letter]) { // If the letter exists in the result object, add 1 to the count
          result[letter] += 1;
      } else { // If the letter doesn't exist in the result object, create it and add 1
          result[letter] = 1; 
    }
    }
}
  return result;
}
console.log(countLetters("tsaallam"));














/*const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);*/