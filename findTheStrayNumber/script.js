function stray(numbers) {
  let num1 = numbers[0];
  let num2 = 0;
  let count1 = 1;
  let count2 = 0;
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] === num1) {
      count1++;
    } else {
      num2 = numbers[index];
      count2++;
    }
  }
  if (count1 < count2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(stray([1, 1, 2]) === 2);
console.log(stray([1, 2, 1]) === 2);
console.log(stray([2, 1, 1]) === 2);
