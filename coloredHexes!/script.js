function hexColor(codes) {
  if (
    codes === "" ||
    codes
      .split(" ")
      .every((number) => number === "000" || number === "00" || number === "0")
  ) {
    return "black";
  } else {
    const singleColors = codes.split(" ").map((number) => parseInt(number));
    const highestNumber = singleColors.indexOf(Math.max(...singleColors));
    if (
      singleColors[0] === singleColors[1] &&
      singleColors[0] === singleColors[2]
    ) {
      return "white";
    } else if (
      singleColors[0] === singleColors[2] &&
      singleColors[0] > singleColors[1]
    ) {
      return "magenta";
    } else if (
      singleColors[1] === singleColors[2] &&
      singleColors[1] > singleColors[0]
    ) {
      return "cyan";
    } else if (
      singleColors[0] === singleColors[1] &&
      singleColors[0] > singleColors[2]
    ) {
      return "yellow";
    } else if (highestNumber === 0) {
      return "red";
    } else if (highestNumber === 1) {
      return "green";
    } else if (highestNumber === 2) {
      return "blue";
    }
  }
}

console.log(hexColor("") === "black");
console.log(hexColor("000 000 000") === "black");
console.log(hexColor("121 245 255") === "blue");
console.log(hexColor("027 100 100") === "cyan");
console.log(hexColor("021 021 021") === "white");
console.log(hexColor("255 000 000") === "red");
console.log(hexColor("000 147 000") === "green");
console.log(hexColor("212 103 212") === "magenta");
console.log(hexColor("101 101 092") === "yellow");
