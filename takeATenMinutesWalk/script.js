function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let north = 0;
  let south = 0;
  let west = 0;
  let east = 0;

  for (let index = 0; index < walk.length; index++) {
    if (walk[index] === "n") {
      north++;
    } else if (walk[index] === "s") {
      south++;
    } else if (walk[index] === "w") {
      west++;
    } else if (walk[index] === "e") {
      east++;
    }
  }

  return north === south && east === west;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
