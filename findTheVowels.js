// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word) {
  return [...word]
    .map((char, index) => (/[aeiouy]/i.test(char) ? index + 1 : -1))
    .filter((index) => index !== -1);
}

console.log(vowelIndices("mmm").join("") === [].join(""));
console.log(vowelIndices("apple").join("") === [1, 5].join(""));
console.log(vowelIndices("super").join("") === [2, 4].join(""));
console.log(vowelIndices("orange").join("") === [1, 3, 6].join(""));
console.log(
  vowelIndices("supercalifragilisticexpialidocious").join("") ===
    [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33].join("")
);
console.log(vowelIndices("Yelp").join("") === [1, 2].join(""));
