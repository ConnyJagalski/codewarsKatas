// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result = result * index;
  }
  return result;
}

console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(4) === 24);
console.log(factorial(7) === 5040);
console.log(factorial(17) === 355687428096000);
