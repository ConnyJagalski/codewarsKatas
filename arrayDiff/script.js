function arrayDiff(a, b) {
  let result = [];
  
  for (let i of a) {
    if (!b.includes(i)) {
      result.push(i);
    }
  }
  
  return result;
}

console.log(arrayDiff([1,2], [1]), [2]);
console.log(arrayDiff([1,2,2], [1]), [2,2]);
console.log(arrayDiff([1,2,2], [2]), [1]);
console.log(arrayDiff([1,2,2], []), [1,2,2]);
console.log(arrayDiff([], [1,2]), []);
console.log(arrayDiff([1,2,3], [1,2]), [3]);