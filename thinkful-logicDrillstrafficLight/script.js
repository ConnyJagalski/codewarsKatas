function updateLight(current) {
  
  if (current === "green") {
    return "yellow"
  }
  
  if (current === "yellow") {
    return "red"
  }
  
  if (current === "red") {
    return "green"
  }

}

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");