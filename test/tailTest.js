// const assertArraysEqual = require('../assertArraysEqual');
// const tail= require('../tail');
// const tailTest=function(){
//   assertArraysEqual(tail([1, 2, 3]), [2 ,3]);
// }
// tailTest();
// module.exports = tailTest;
const  assert= require("assert");
const tail= require('../tail');

 describe("#tail", () => {
   it("returns [ 1 ,2 , 3 ]for [5 ,1, 2, 3]", () => {
     assert.deepEqual(tail([1, 2, 3]), [2 ,3 ]);
   });
   it("returns ['5'] for ['5']", () => {
    assert.deepEqual(tail([5]), [5]); 
  });
  it("returns [5] for ['5']", () => {
    assert.deepEqual(tail([5]), [5 , 2]); 
  });
 });