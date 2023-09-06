function sum (numbers) {
  "use strict";
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    result += numbers[index];
  }
  return result;
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);