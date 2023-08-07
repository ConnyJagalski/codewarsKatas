function SeriesSum(n) {
  if (n === 0) {
    return "0.00";
  }
  
  let bruch = 1;
  let result = 1.00;
  
  for (let index = 1; index < n; index++) {
    bruch += 3;
    result += 1/(bruch);
  }
  
  return result.toFixed(2) + "";
  
}

console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");