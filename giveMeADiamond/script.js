function diamond(n) {
  if (n < 1 || n % 2 === 0) {
    return null;
  } else {
    let result = [];
    result.push("*".repeat(n) + "\n");
    for (let index = n - 2; index > 0; index -= 2) {
      result.push(" ".repeat((n - index) / 2) + "*".repeat(index) + "\n");
      result.unshift(" ".repeat((n - index) / 2) + "*".repeat(index) + "\n");
    }
    return result.join("");
  }
}

console.log(diamond(1) === "*\n");
console.log(diamond(3) === " *\n***\n *\n");
console.log(diamond(5) === "  *\n ***\n*****\n ***\n  *\n");
