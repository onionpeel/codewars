// const multipleOfIndex = arr => {
//   return arr.filter((val, ind) => val % ind === 0);
// };

// console.log(!(5%5))

const x = [22, -6, 32, 82, 9, 25];
const multipleOfIndex = arr => arr.filter((val, ind) => ind && !(val % ind));
console.log(multipleOfIndex(x));
