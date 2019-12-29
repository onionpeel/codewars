// const isVow = arr => {
//   return arr.map(num => {
//     switch (true) {
//       case num === 97:
//         return 'a';
//       case num === 101:
//         return 'e';
//       case num === 105:
//         return 'i';
//       case num === 111:
//         return 'o';
//       case num === 117:
//         return 'u';
//       default:
//         return num;
//     };
//   });
// };

// const isVow = arr => {
//   return arr.map(num => {
//     let char = String.fromCharCode(num);
//     return 'aeiou'.indexOf(char) !== -1 ? char : num;
//   });
// };

const isVow = arr => arr.map(num => 'aeiou'.includes(char = String.fromCharCode(num)) ? char : num);

module.exports = isVow;
