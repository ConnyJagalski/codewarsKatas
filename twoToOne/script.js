function longest(s1, s2) {
  let result = [];
  
  const str1 = s1.split("");
  const str2 = s2.split("");

  for (let index = 0; index < str1.length; index++) {
    if (!result.includes(str1[index])) {
      result.push(str1[index]);
    }
  }
  
  for(let index = 0; index < str2.length; index++) {
    if(!result.includes(str2[index])) {
      result.push(str2[index]);
    }
  }

  return result.sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere") == "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding") == "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions") == "acefghilmnoprstuy");