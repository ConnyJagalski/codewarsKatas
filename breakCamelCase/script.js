function solution(string) {
  string = string.split("");
  let result = [];
  for (let element of string) {
    element !== element.toUpperCase()
      ? result.push(element)
      : result.push(" " + element);
  }
  return result.join("");
}

console.log(solution("camelCasing") === "camel Casing");
console.log(solution("camelCasingTest") === "camel Casing Test");
