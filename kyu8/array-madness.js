const arrayMadness = (a,b) => {
  let arrayA = a.reduce((acc, cur) => {
    let result = (cur**2)+acc;
    return result
  }, 0);

  let arrayB = b.reduce((acc, cur) => {
    let result = (cur**3)+acc;
    return result;
  }, 0);

  return arrayA > arrayB;
};

module.exports = arrayMadness;
