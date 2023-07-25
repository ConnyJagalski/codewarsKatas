function reverseSeq (n) {
  let result = [];
  
  for (let index = n; index > 0; index--) {
    result.push(index);
  }
  
  console.log(result);
};


reverseSeq(5);