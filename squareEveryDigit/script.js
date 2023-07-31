function squareDigits(num){
  const squaredNums = num.toString().split("").map((zahl) => zahl * zahl).join("");
  const result = parseInt(squaredNums);
  return result;
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);