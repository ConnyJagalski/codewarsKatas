function printerError(s) {
  
  let errors = 0;
  const rage = /^[a-m]$/;
  
  for (let index = 0; index < s.length; index++) {
    if (rage.test(s[index]) === false) {
      errors++;
    }
  }
  const result = errors + "/" + s.length;
  return result;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "3/56")