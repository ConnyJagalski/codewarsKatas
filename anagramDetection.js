// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

"use strict";
function isAnagram(test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
}

console.log(isAnagram("foefet", "toffee") === true);
console.log(isAnagram("Buckethead", "DeathCubeK") === true);
console.log(isAnagram("Twoo", "WooT") === true);
console.log(isAnagram("dumble", "bumble") === false);
console.log(isAnagram("ound", "round") === false);
console.log(isAnagram("apple", "pale") === false);
