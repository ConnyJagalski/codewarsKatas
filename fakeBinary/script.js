function fakeBin(x) {
  return x
    .replaceAll(1, 0)
    .replaceAll(2, 0)
    .replaceAll(3, 0)
    .replaceAll(4, 0)
    .replaceAll(5, 1)
    .replaceAll(6, 1)
    .replaceAll(7, 1)
    .replaceAll(8, 1)
    .replaceAll(9, 1);
}

console.log(fakeBin("45385593107843568") == "01011110001100111");
console.log(fakeBin("509321967506747") == "101000111101101");
console.log(
  fakeBin("366058562030849490134388085") == "011011110000101010000011011"
);
