const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const head = require('../head');

const headtest = function(array1){
  assertArraysEqual(head([1, 2, 3]), [1], true);
}
headtest();
module.exports = headtest;
