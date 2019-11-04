// const fixTheMeerkat = arr => {
//   const [a, b, c] = arr;
//   return [c, b, a];
// };

// const fixTheMeerkat = arr => {
//   const newArr = [...arr];
//   return newArr.reverse();
// };

// const fixTheMeerkat = ([a,b,c] = arr) => {
//   return [c,b,a];
// };

// const fixTheMeerkat = ([tail, body, head]) => {
//   return [head, body, tail];
// };

const fixTheMeerkat = ([a,b,c]) => [c,b,a];

console.log(fixTheMeerkat([1,2,3]));

// const showObj = (a,b,c,d) => ({
//   a:b,
//   c:d
// });

// const showObj = (a,b,c,d) => ({
//   [a]:b,
//   [c]:d
// });

// console.log(showObj(1,2,3,4));
