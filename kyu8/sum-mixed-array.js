// const sumMix = arr => arr.reduce((acc, cur) => +acc + +cur, 0);

// const arr = ['1', 2, '3'];
// const arr = ["2"]
// // console.log(+arr[0] + arr[1])
// console.log(typeof sumMix(arr));

// console.log(typeof +"5")
//
// console.log(typeof null + +"5");

// const sumMix = arr => {
//   let result = 0;
//   for (let val of arr) {
//     result += parseInt(val);
//   };
//   return result;
// };

// const sumMix = arr => eval(arr.join('+'));

const sumMix = arr => {
  let result = 0;
  arr.forEach(val => result += +val);
  return result;
};
