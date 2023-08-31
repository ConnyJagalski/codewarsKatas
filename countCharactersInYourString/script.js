function count(string) {
  let result = {};
  
  for (let index of string) {
    if (index in result) {
    result[`${index}`] += 1;
    } else {
      result[`${index}`] = 1;
    }
  }
  
  return result;
}

console.log('', {});
console.log('a', {'a': 1});
console.log('ab', {'a': 1, 'b': 1});
console.log('ABC', {'A': 1, 'B': 1, 'C': 1});