function persistence(num) {
  if (num < 10) {
    return 0;
  } else {
    let result = 0;
    while (num >= 10) {
      result++;
      num = num
        .toString()
        .split("")
        .reduce((a, b) => a * parseInt(b), 1);
    }
    return result;
  }
}

console.log(persistence(39) === 3);
console.log(persistence(4) === 0);
console.log(persistence(25) === 2);
console.log(persistence(999) === 4);
