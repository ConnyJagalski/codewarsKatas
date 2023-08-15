const number = function (array) {
  let result = [];
  
  for (let index = 0; index < array.length; index++) {
    result.push(`${index + 1}: ${array[index]}`);
  }
  return result;
}

console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');