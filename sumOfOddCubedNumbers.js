// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  return arr.some((element) => isNaN(element))
    ? undefined
    : arr
        .map((element) => element ** 3)
        .filter((element) => element % 2 !== 0)
        .reduce((prev, curr) => prev + curr, 0);
}

console.log(cubeOdd([1, 2, 3, 4]) === 28);
console.log(cubeOdd([-3, -2, 2, 3]) === 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]) === undefined);
