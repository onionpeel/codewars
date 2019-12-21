const grow = array => array.reduce((acc, cur) => acc * cur, 1);

module.exports = grow;


// const arr = [1,2,3,4];

// const reduce = array => eval(array.join('*'));

// const reduce = array => {
//   let result = 1;
//   for(let i = 0; i < array.length; i++) {
//     result *= array[i];
//   };
//   return result;
// };
//
// console.log(reduce(arr));
