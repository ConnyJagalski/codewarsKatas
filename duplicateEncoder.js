// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const change = word.toLowerCase();
  let result = "";
  change.split("").forEach((element, index) => {
    change
      .slice(0, index)
      .concat(change.slice(index + 1))
      .includes(element)
      ? (result = result + ")")
      : (result = result + "(");
  });
  return result;
}

console.log(duplicateEncode("din") === "(((");
console.log(duplicateEncode("recede") === "()()()");
console.log(duplicateEncode("Success") === ")())())");
console.log(duplicateEncode("(( @") === "))((");
