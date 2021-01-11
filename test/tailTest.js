const assertArraysEqual = require('../assertArraysEqual');
const tail= require('../tail');
const tailTest=function(){
  assertArraysEqual(tail([1, 2, 3]), [2 ,3]);
}
tailTest();
module.exports = tailTest;