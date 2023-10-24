Number.prototype.toString = function () {
  return this + "";
};

Array.prototype.toString = function () {
  let result = "";
  result = result + "[";
  for (let i = 0; i < this.length; i++) {
    result = result + this[i];
    if (i < this.length - 1) {
      result = result + ",";
    }
  }
  return result + "]";
};

Boolean.prototype.toString = function () {
  return this + "";
};

console.log((1).toString() === "1");
console.log([1, 2, 3].toString() === "[1,2,3]");
console.log(false.toString() === "false");
