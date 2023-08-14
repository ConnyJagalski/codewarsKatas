function countSmileys(arr) {
  let result = 0;
  
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].length === 2) {
      if ((arr[index].includes(":") || arr[index].includes(";"))
          && (arr[index].includes(")") || arr[index].includes("D"))) {
        result++;
      }
    } else if (arr[index].length === 3) {
      if ((arr[index].includes(":") || arr[index].includes(";"))
        && (arr[index].includes(")") || arr[index].includes("D"))
        && (arr[index].includes("-") || arr[index].includes("~"))) {
      result++;
        }
    }
  }
  
  return result;
}

console.log(countSmileys([]                             ), 0);
console.log(countSmileys([':D',':~)',';~D',':)']        ), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     ), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);