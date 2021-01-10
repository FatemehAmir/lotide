const without=function(array1 ,array2){
  let array3=[];
  for(let i=0 ; i < array1.length ; i++){
   if(arry1[i]==arry2[i]){
    array3.push(arry1[i]);
  }
}
return array3;
}



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]