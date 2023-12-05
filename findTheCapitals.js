// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
  return word
    .split("")
    .reduce(
      (result, element, index) => (
        element === element.toUpperCase() && result.push(index), result
      ),
      []
    );
};

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
