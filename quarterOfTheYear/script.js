const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
};

console.log(quarterOf(3) === 1);
console.log(quarterOf(8) === 3);
console.log(quarterOf(11) === 4);
