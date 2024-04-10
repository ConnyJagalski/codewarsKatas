// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised"
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  const how = rating.toLowerCase();
  return how === "terrible"
    ? 0
    : how === "poor"
    ? Math.ceil(amount * 0.05)
    : how === "good"
    ? Math.ceil(amount * 0.1)
    : how === "great"
    ? Math.ceil(amount * 0.15)
    : how === "excellent"
    ? Math.ceil(amount * 0.2)
    : "Rating not recognised";
}

console.log(calculateTip(20, "Excellent") === 4);
console.log(calculateTip(26.95, "good") === 3);
console.log(calculateTip(26.95, "whatever") === "Rating not recognised");
