var maxSequence = function (arr) {
  if (arr.length === 0 || arr.every((element) => element < 0)) {
    return 0;
  } else if (arr.every((element) => element > 0)) {
    let result = 0;
    arr.forEach((element) => (result += element));
    return result;
  } else {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
  }
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSequence([]) === 0);
console.log(maxSequence([-1, -3, -5, -2, -4, -8]) === 0);
console.log(maxSequence([2, 5, 8, 1, 4, 3]) === 23);
