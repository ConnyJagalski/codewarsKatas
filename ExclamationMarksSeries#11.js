// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  return s.replace(/[aeiouAEIOU]/g, "!");
}

console.log(replace("Hi!") === "H!!");
console.log(replace("!Hi! Hi!") === "!H!! H!!");
console.log(replace("aeiou") === "!!!!!");
console.log(replace("ABCDE") === "!BCD!");
