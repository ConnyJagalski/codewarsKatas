function expandedForm(num) {
  let result = [];
  const currentNum = num.toString();
  for (let index = 0; index < currentNum.length; index++) {
    if (currentNum[index] !== "0") {
      const toPushNum = currentNum[index].padEnd(
        currentNum.length - index,
        "0"
      );
      result.push(toPushNum);
    }
  }
  return result.join(" + ");
}

console.log(expandedForm(12) === "10 + 2");
console.log(expandedForm(42) === "40 + 2");
console.log(expandedForm(70304) === "70000 + 300 + 4");
