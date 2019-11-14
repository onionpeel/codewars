// const expressionMatter = (a,b,c) => {
//   const arr = [
//     a * (b + c),
//     a * b * c,
//     a + b * c,
//     (a + b) * c,
//     a + b + c
//   ];
//   return Math.max(...arr);
// };

const expressionMatter = (a,b,c) => {
  const arr = [
    a * (b + c),
    a * b * c,
    a + b * c,
    (a + b) * c,
    a + b + c
  ];
  return arr.reduce((acc, cur) => Math.max(acc, cur));
};

console.log(expressionMatter(1,2,3));

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
