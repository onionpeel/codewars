// const countBy = (x, n) => {
//   if (n - 1 > 0) {
//     return [countBy(x, n-1), x * n];
//   };
// };
//
// // [x * (n - 3), x * (n - 2), x * (n - 1), x * n];
//

// const countBy = (x, n) => {
//   const result = [];
//   for(let i = n; i > 0; i--) {
//     result.unshift(i * x);
//   };
//   return result;
// };

// const countBy = (x, n) => Array.from({length: n}, (v, i) => (i + 1) * x);

const countBy = (x, n) => Array.apply(0, Array(n)).map((v,i) => (i + 1) * x);

console.log(countBy(2,5))
