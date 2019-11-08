
// console.log(3 + undefined)
// console.log((3 + undefined + 1 || 0))

// const arr = [5,3,2,4,1];
// const sumOfDifferences = arr => arr
//   .sort((a,b) => b - a)
//   .map((v,i) => v - arr[i + 1] || 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(sumOfDifferences(arr));

// console.log(1 == true)

// const sumOfDifference = arr => arr.sort((a,b) => b - a).reduce();

// const arr = [3,5,1,4,2];
//
// console.log(Math.max(...arr));

// const collect = (...arr) => {
//   console.log(arr)
// };
// collect(1,2,3)

// const sumOfDifferences = arr => {
//   const newArr = [...arr].sort((a,b) => b - a);
//   let diff;
//   let sum = 0;
//   for (let i = 0; i < newArr.length - 1; i++) {
//     diff = (newArr[i] - newArr[i + 1]);
//     sum = sum + diff;
//   };
//   return sum;
// };
//
// console.log(sumOfDifference(arr));

// const diff = arr.reduce((acc, cur, ind) => (cur - arr[ind + 1]) + acc, 0);
// const diff = arr.reduce((acc, cur, ind) => acc + (ind + 1), 0);
// console.log(diff);

// const arr = [1,2,3,4,5];
// // const des = arr.sort((a,b) => b - a);
// console.log(arr.sort((a,b) => b - a));

// var Arr = [3,8,5,1,0,4,7,6,3]
// var Arr = [3,8,5,1,0,4,7,6,3]

let Arr = [1,2,3,5];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);

// let mult = 1;
// let arr = [5,5,5];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   let n = arr[0] * mult;
//   arr2.push(n);
//   mult = mult + 1;
// };
// console.log(arr2);

// let arr = new Array(10).fill(null);
// let nums = arr.map(val => Math.floor(Math.random() * 200));
// console.log(nums);
