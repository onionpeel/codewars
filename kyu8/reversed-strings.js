// const solution = str => {
//   let string = str;
//   return string.split('').reverse().join('');
// };

const solution = str => {
  return [...str].reverse().join('');
};

console.log(solution('world'));
