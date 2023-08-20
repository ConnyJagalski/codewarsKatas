const binaryArrayToNumber = arr => {
  arr = arr.reverse();
  
  let result = 0;
  
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 1) {
      result = result + arr[index] * 2**index;
    }
  }
  
  return result;
};

console.log(binaryArrayToNumber([0,0,0,1]), 1);
console.log(binaryArrayToNumber([0,0,1,0]), 2);
console.log(binaryArrayToNumber([1,1,1,1]), 15);
console.log(binaryArrayToNumber([0,1,1,0]), 6);