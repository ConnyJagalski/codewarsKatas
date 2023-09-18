function between(a, b) {
  let result = [];
  
  for (let index = a; index <= b; index++) {
    result.push(index);
  }
  return result;
}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);