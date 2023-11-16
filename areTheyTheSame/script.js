function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  let array2Squared = array2.sort((a, b) => a - b);
  let array1Squared = array1
    .map((element) => element * element)
    .sort((a, b) => a - b);
  for (let index = 0; index < array1Squared.length; index++) {
    if (array1Squared[index] !== array2Squared[index]) {
      return false;
    }
  }
  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
);
