function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
}

console.log(peopleWithAgeDrink(12) == "drink toddy");
console.log(peopleWithAgeDrink(17) == "drink coke");
console.log(peopleWithAgeDrink(20) == "drink beer");
console.log(peopleWithAgeDrink(35) == "drink whisky");
