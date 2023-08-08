function XO(str) {
  str = str.toUpperCase();
  
  let x = 0;
  let o = 0;
  
  for (let index = 0; index < str.length; index++) {
    if (str[index] === "X") {
      x = x + 1;
    }
    if (str[index] === "O") {
      o = o + 1;
    }
  }

   return x === o;
}


console.log(XO("xo"),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);