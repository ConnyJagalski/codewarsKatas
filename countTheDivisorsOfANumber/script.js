function getDivisorsCnt(n) {
  let result = 0;
  
  for (let index = 1; index * index <= n; index++) {
    if (n % index === 0) {
      if (index * index === n) {
        result++;
      } else {
        result += 2;
      }
    }
  }
  
  return result;
}

console.log(getDivisorsCnt(1) == 1);
console.log(getDivisorsCnt(10) == 4);
console.log(getDivisorsCnt(11) == 2);
console.log(getDivisorsCnt(54) == 8);