function findShort(s) {
  const arr = s.split(" ");
  let result = 10;
  for (let word of arr) {
    if (word.length < result) {
      result = word.length;
    }
  }
  return result;
}

console.log(
  findShort("bitcoin take over the world maybe who knows perhaps") === 3
);
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  ) === 3
);
console.log(findShort("Let's travel abroad shall we") === 2);
