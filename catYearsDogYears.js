// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears =
    humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + 4 * (humanYears - 2);
  let dogYears =
    humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + 5 * (humanYears - 2);
  return [humanYears, catYears, dogYears].join();
};

console.log(humanYearsCatYearsDogYears(1) === "1,15,15");
console.log(humanYearsCatYearsDogYears(2) === "2,24,24");
console.log(humanYearsCatYearsDogYears(3) === "3,28,29");
console.log(humanYearsCatYearsDogYears(10) === "10,56,64");
