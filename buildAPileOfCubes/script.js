function findNb(m) {
  let result = 0;
  let leftVolume = m;
  
  for (let index = m; index > 0; index -= Math.pow(result + 1, 3)) {
    result += 1;
    leftVolume = leftVolume - Math.pow(result, 3);
  }
  
  if (leftVolume === 0) {
    return result;
  } else {
    return -1;
  }
}

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);