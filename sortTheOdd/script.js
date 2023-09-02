function sortArray(array) {
  const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  
  const result = [];
  let oddIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(oddNumbers[oddIndex]);
      oddIndex++;
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);