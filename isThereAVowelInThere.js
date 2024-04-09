// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  return a.map((num) =>
    num >= 97 && num <= 122
      ? "aeiou".includes(String.fromCharCode(num))
        ? String.fromCharCode(num)
        : num
      : num
  );
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ]).join("") ===
    [
      118,
      "u",
      120,
      121,
      "u",
      98,
      122,
      "a",
      120,
      106,
      104,
      116,
      113,
      114,
      113,
      120,
      106,
    ].join("")
);
console.log(
  isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]).join("") ===
    ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103].join("")
);
