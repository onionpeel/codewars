// const countSheeps = arr => {
//   const num = arr.filter(sheep => sheep === true).length;
//   return `There are ${sheeps} in total`;
// };

const countSheeps = arr => `There are ${arr.filter(sheep => sheep === true).length} sheeps in total`;

// const array = [true, true, true];

const array = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

console.log(countSheeps(array));
