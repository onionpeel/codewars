// const drawStairs = n => {
//   let space = '';
//   let spacer = ' ';
//   let stairs = '';
//   for (let i = 0; i < n; i++) {
//     if (i === n - 1) {
//       stairs = stairs + space + 'I';
//     } else {
//       stairs = stairs + space + 'I\n';
//     }
//     space = space + spacer;
//   };
//   return stairs;
// };

// console.log(Function())
// console.log(Array(5).keys())
// console.log([...Array(5)])
const drawStairs = n => [...Array(n)].map((v, i) => " ".repeat(i) + "I").join('\n');
console.log(drawStairs(3));

// "I\n I\n  I\n   I\n    I"
