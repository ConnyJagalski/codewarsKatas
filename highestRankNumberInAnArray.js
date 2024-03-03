// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  let häufigkeit = {};

  for (let num of arr) {
    if (num in häufigkeit) {
      häufigkeit[num] += 1;
    } else {
      häufigkeit[num] = 1;
    }
  }

  let maxHäufigkeit = Math.max(...Object.values(häufigkeit));
  let amHäufigstenZahlen = Object.keys(häufigkeit).filter(
    (num) => häufigkeit[num] === maxHäufigkeit
  );

  return Math.max(...amHäufigstenZahlen);
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];

console.log(highestRank(arr) === 12);
