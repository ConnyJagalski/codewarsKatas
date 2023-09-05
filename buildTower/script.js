function towerBuilder(nFloors) {
  const pyramid = [];
  for (let index = 1; index <= nFloors; index++) {
    const space = ' '.repeat(nFloors - index);
    const stars = '*'.repeat(2 * index - 1);
    const floor = space + stars + space;
    pyramid.push(floor);
  }
  return pyramid;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);