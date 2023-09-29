function abbrevName(name){
  const separated = name.split(" ");
  const letters = separated.map((word) => {return word.charAt(0)});
  return letters.join(".").toUpperCase();
}

console.log(abbrevName("Sam Harris") == "S.H");
console.log(abbrevName("Patrick Feenan") == "P.F");
console.log(abbrevName("Evan Cole") == "E.C");
console.log(abbrevName("P Favuzzi") == "P.F");
console.log(abbrevName("david mendieta") == "D.M");