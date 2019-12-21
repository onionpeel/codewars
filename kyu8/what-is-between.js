const between = (a,b) => {
  return Array.from({length: b - 1 + 1}, (v,i) => i + a);
};


// const between = (a,b) => {
//   const array = [];
//   for (let i = a; i < b + 1; i ++) {
//     array.push(i);
//   };
//   return array;
// };

module.exports = between;
