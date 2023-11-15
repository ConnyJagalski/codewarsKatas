function order(words) {
  const wordsArr = words.split(" ");
  let result = [];

  for (let index = 1; index <= wordsArr.length; index++) {
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].includes(index)) {
        result.push(wordsArr[i]);
      }
    }
  }
  return result.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
