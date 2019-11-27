// const generateRange = (min, max, step) => {
//   const result = [];
//   if (max % step === 0) {
//     let length = max / step;
//     let current = min;
//     for (let i = 0; i < length; i++) {
//       result.push(current);
//       current += step;
//     };
//     return result;
//   } else {
//     let length = Math.floor(max / step);
//     let current = min;
//     for (let i = 0; i < length + 1; i++) {
//       result.push(current);
//       current += step;
//     };
//     return result;
//   };
// };

// const generateRange = (min, max, step) => {
//   let result = [];
//   let current = min;
//   while(current <= max) {
//     result.push(current);
//     current = current + step;
//   };
//   return result;
// };

const generateRange = (min, max, step) => {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
};

console.log(generateRange(1,10,5))
