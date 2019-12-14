const isPalindrome = x => [...x].reverse().join('').toLowerCase() === x.toLowerCase() ? true : false;

module.exports = isPalindrome;

// const isPalindrome = x => {
//   x = x.toLowerCase();
//   let a = 0;
//   let b = x.length;
//   while(a < b) {
//     if (x[a] !== x[b - 1]) {
//       return false
//     };
//     a++;
//     b--;
//   };
//   return true;
// };
