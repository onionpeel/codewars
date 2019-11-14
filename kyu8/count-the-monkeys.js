// const monkeyCount = num => {
//   const newArr = [];
//   const original = Array(num);
//   for (let i = 0; i < original.length; i++) {
//     newArr.push(i + 1);
//   };
//   return newArr;
// };
//
// const monkeyCount = n => Array.from({length: n}, (v,i) => i + 1);

// const obj = {
//   0: 'a',
//   1: 'b',
//   2: 'c'
// };
//
// const arr = Array.from({length: 5});
// console.log(arr);

// const monkeyCount = (n) => {
//   for (var i = 0, arr = []; i < n; arr.push(i + 1), i++);
//   return arr;
// };

const monkeyCount = (n) => [...Array(n + 1).keys()].slice(1);

console.log(monkeyCount(5));

// console.log(Array(5))
