// const countPositivesSumNegatives = arr => {
//   if (arr === null || arr.length === 0) {
//     return [];
//   };
//
//   let count = 0, sum = 0;
//   arr.forEach(val => val > 0 ? count++ : sum += val);
//   return [count, sum];
// };

const countPositivesSumNegatives = arr =>{
  return arr && arr.length > 0 ? [arr.filter(v => v > 0).length, arr.filter(v => v < 0).reduce((acc, cur) => acc + cur, 0)] : [];
};


// console.log(countPositivesSumNegatives([1,2,3,10, -5, -3]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
// console.log(countPositivesSumNegatives());
