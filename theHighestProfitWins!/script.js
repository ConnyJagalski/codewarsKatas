function minMax(arr){
  let result = [];
  
  result.push(Math.min(...arr));
  result.push(Math.max(...arr));
  
  return result;
}


console.log(minMax([1, 2, 3, 4, 5]), "should return", [1, 5]);
console.log(minMax([2334454, 5]), "should return", [5, 2334454]);
console.log(minMax([5]), "should return", [5, 5]);