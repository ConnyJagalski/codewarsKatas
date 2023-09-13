function move (position, roll) {
  return roll * 2 + position;
}

console.log(move(0, 4), 8);
console.log(move(3, 6), 15);
console.log(move(2, 5), 12);