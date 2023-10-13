function getSum(a, b) {
  if (a === b) {
    return a;
  } else if (a < b) {
    let result = 0;
    for (let currentNum = a; currentNum <= b; currentNum++) {
      result = result + currentNum;
    }
    return result;
  } else {
    let result = 0;
    for (let currentNum = b; currentNum <= a; currentNum++) {
      result = result + currentNum;
    }
    return result;
  }
}

console.log(getSum(0, -1) === -1);
console.log(getSum(0, 1) === 1);
console.log(getSum(2, 2) === 2);
console.log(getSum(0, 5) === 15);
