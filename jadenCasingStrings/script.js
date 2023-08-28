String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => capitalizeFirstLetter(word)).join(" ");
};

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");