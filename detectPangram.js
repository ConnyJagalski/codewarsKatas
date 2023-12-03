// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const cleanedString = string.toLowerCase().split(/\s+/).join("");
  return (
    Array.from(new Set(cleanedString.match(/[a-z]/g)))
      .sort()
      .join("") === "abcdefghijklmnopqrstuvwxyz"
  );
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
