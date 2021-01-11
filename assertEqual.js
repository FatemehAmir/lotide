const assertEqual = function(actual, expected) {
    //console.assert(assertEqual(actual === expected),);
    if(actual=== expected){
        console.log('Assertion passed: %s === %s', actual, expected) 
    } else{
        console.log('Assertion failed: %s !==  %s ', actual, expected)
    }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


module.exports = assertEqual;




/*Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
Assertion Passed: 1 === 1*/
//FUNCTIONS THAT NEED TO BE TESTED
//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

//TESTS THAT WILL RUN (assert equals runs our tests)
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);