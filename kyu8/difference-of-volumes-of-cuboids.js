// const findDifference = (a,b) => {
//   const volume = array => array.reduce((acc, cur) => acc * cur, 1);
//   return Math.max(volume(a), volume(b)) - Math.min(volume(a), volume(b));
// };

const findDifference = (a,b) => Math.abs(a.reduce((acc, cur) => acc * cur, 1) - b.reduce((acc, cur) => acc * cur, 1));

module.exports = findDifference;
