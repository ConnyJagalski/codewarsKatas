function duplicateCount(text) {
  const charSet = new Set();
  const duplicatesSet = new Set();

  text
    .toLowerCase()
    .split("")
    .forEach(function (char) {
      if (charSet.has(char)) {
        duplicatesSet.add(char);
      } else {
        charSet.add(char);
      }
    });

  return duplicatesSet.size;
}

console.log(duplicateCount("") === 0);
console.log(duplicateCount("abcde") === 0);
console.log(duplicateCount("aabbcde") === 2);
console.log(duplicateCount("aabBcde") === 2);
console.log(duplicateCount("Indivisibility") === 1);
console.log(duplicateCount("Indivisibilities") === 2);
console.log(duplicateCount("I1n1d2i3v5i5s1i4b8i7l7i8t7i9e0s") === 6);
