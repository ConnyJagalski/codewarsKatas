function calculateYears(principal, interest, tax, desired) {
  if (principal >= desired) {
    return 0;
  } else {
    let yearsToWait = 0;

    while (principal < desired) {
      const interestPayment = principal * interest;
      const taxedInterestPayment = interestPayment * (1 - tax);
      principal += taxedInterestPayment;
      yearsToWait++;
    }

    return yearsToWait;
  }
}

console.log(calculateYears(1000, 0.05, 0.18, 1100) == 3);
console.log(calculateYears(1000, 0.01625, 0.18, 1200) == 14);
console.log(calculateYears(1000, 0.05, 0.18, 1000) == 0);
