function countBy(x, n) {
  let result = [x];
  let count = x;

  for (let index = 1; index < n; index++) {
    count = count + x;
    result.push(count);
  }
  
  return result;
}

console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10]);
console.log(countBy(2,5), [2,4,6,8,10]);