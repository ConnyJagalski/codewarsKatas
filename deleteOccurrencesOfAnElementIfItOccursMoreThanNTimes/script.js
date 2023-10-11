function deleteNth(arr, n) {
  let result = [];
  for (let zahl of arr) {
    if (result.filter((item) => item === zahl).length < n) {
      result.push(zahl);
    }
  }
  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(
  deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
  [1, 1, 3, 3, 7, 2, 2, 2]
);
