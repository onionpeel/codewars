const isUpperCase = str => {
  const convertedStr = str.toUpperCase();
  return str === convertedStr;
};

module.exports = isUpperCase;


// String.prototype.isUpperCase = function() {
//   const convertedStr = this.toUpperCase();
//   return this.toString() === convertedStr;
// };
