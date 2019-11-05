// const firstNonConsecutive = arr => {
//   const nonCon = arr.find((val, ind) => {
//     return Math.abs(val - arr[ind + 1]) !== 1;
//   });
//
//   if (nonCon) {
//     return nonCon;
//   } else {
//     return null;
//   };
// };

// const firstNonConsecutive = arr => {
//   let nonCon;
//   for (let i = 0; i < arr.length; i++) {
//     if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
//       nonCon = arr[i + 1];
//       break;
//     };
//   };
//   if (!isNaN(nonCon)) {
//     return nonCon;
//   } else {
//     return null;
//   };
// };

// const firstNonConsecutive = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   };
//   return null;
// };

const firstNonConsecutive = arr => {
  const result = arr.find((val, ind) => val !== ind + arr[0]);
  return result ? result : null;
};
firstNonConsecutive([1,2,3,4,6,7]);

if:
1. iterate array using find()
2. if next index minus current index !== 1, return current index

else:
1. return null

1,2,3
-4 -3 -2
