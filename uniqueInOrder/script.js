const uniqueInOrder = function (iterable) {
  if (iterable === "") {
    return [];
  } else {
    let toIterateSequence = iterable;
    if (typeof iterable === "string") {
      toIterateSequence = iterable.split("");
    }
    let result = [];
    result.push(toIterateSequence[0]);
    for (let index = 0; index < toIterateSequence.length - 1; index++) {
      if (toIterateSequence[index] !== toIterateSequence[index + 1]) {
        result.push(toIterateSequence[index + 1]);
      }
    }
    return result;
  }
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
