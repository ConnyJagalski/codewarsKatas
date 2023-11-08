function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .filter((letter) => letter.match(/^[a-zA-Z]$/))
    .join("");
}

console.log(reverseLetter("krishan") === "nahsirk");
console.log(reverseLetter("ultr53o?n") === "nortlu");
console.log(reverseLetter("ab23c") === "cba");
console.log(reverseLetter("krish21an") === "nahsirk");
