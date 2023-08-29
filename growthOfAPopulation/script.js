function nbYear(p0, percent, aug, p) {
  let actualHabitants = p0;
  const convertedPercent = percent / 100;
  let yearsNeeded = 0;
  
  while(actualHabitants < p) {
    actualHabitants = Math.floor(actualHabitants + (actualHabitants * convertedPercent) + aug);
    yearsNeeded++;
  }
  return yearsNeeded;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);