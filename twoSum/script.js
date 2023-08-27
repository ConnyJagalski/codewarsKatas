function twoSum(numbers, target) {
  let result = [];
  
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
}

const numbers1 = [1,2,3];
const target1 = 4;
const expected1 = [0,2];

const numbers2 = [1234,5678,9012];
const target2 = 14690;
const expected2 = [1,2];

const numbers3 = [2,2,3];
const target3 = 4;
const expected3 = [0,1];

const numbers4 = [2,3,1];
const target4 = 4;
const expected4 = [1,2];

console.log(twoSum(numbers1, target1), expected1);
console.log(twoSum(numbers2, target2), expected2);
console.log(twoSum(numbers3, target3), expected3);
console.log(twoSum(numbers4, target4), expected4);