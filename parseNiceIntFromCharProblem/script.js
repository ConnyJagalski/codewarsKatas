function getAge(inputString){
  const stringToArr = inputString.split("");
  return parseFloat(stringToArr[0]);
}

console.log(getAge("4 years old"), 4);