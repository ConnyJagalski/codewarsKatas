function high(x) {
  const arr = x.split(" ");
  const letterToNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const wordScores = arr.map((word) => {
    let score = 0;
    for (let letter of word) {
      score += letterToNum[letter];
    }
    return score;
  });

  const highestScore = Math.max(...wordScores);
  const indexOfHighestScore = wordScores.indexOf(highestScore);

  return arr[indexOfHighestScore];
}

console.log(high("man i need a taxi up to ubud") === "taxi");
console.log(high("what time are we climbing up the volcano") === "volcano");
console.log(high("take me to semynak") === "semynak");
console.log(high("aa b") === "aa");
console.log(high("b aa") === "b");
console.log(high("bb d") === "bb");
console.log(high("d bb") === "d");
console.log(high("aaa b") === "aaa");
