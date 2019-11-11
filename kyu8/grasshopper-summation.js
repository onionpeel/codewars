// const summation = num =>
//
// const arr = new Array

// const summation = num => {
//   let sum = 0;
//   for (let i = 1; i < num + 1; i++) {
//     sum += i;
//   };
//   return sum;
// };

// const summation = num => {
//   let sum = 0;
//   while(num > 0) {
//     sum += num;
//     num -= 1;
//   };
//   return sum;
// };

const summation = function f(num) {
  return num ? num + f(num -1) : 0;
};

console.log(summation(2));
