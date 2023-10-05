function addBinary(a, b) {
  let result = [];

  let numberToConvert = a + b;

  do {
    result.unshift(Math.floor(numberToConvert % 2));
    numberToConvert = Math.floor(numberToConvert / 2);
  } while (numberToConvert > 0);

  return result.join("");
}

console.log(addBinary(1, 2));
