function incrementString(str) {
  const reversedInputArray = str.split("").reverse();
  let numbersReversed = [];
  let foundNonNumber = false;

  for (let current of reversedInputArray) {
    if (!isNaN(current)) {
      if (foundNonNumber) {
        break;
      }
      numbersReversed.push(current);
    } else {
      foundNonNumber = true;
    }
  }

  if (numbersReversed.length === 0) {
    return str + "1";
  }

  const add = parseInt(numbersReversed.reverse().join("")) + 1;
  return (
    str.slice(0, -numbersReversed.length) +
    add.toString().padStart(numbersReversed.length, "0")
  );
}

console.log(incrementString("foobar000") === "foobar001");
console.log(incrementString("foobar999") === "foobar1000");
console.log(incrementString("foobar00999") === "foobar01000");
console.log(incrementString("foo") === "foo1");
console.log(incrementString("foobar001") === "foobar002");
console.log(incrementString("foobar1") === "foobar2");
console.log(incrementString("1") === "2");
console.log(incrementString("009") === "010");
console.log(incrementString("fo99obar99") === "fo99obar100");
