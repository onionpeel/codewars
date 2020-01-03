const stairsIn20 = arr => {
  let result = arr.reduce((total, array) => {
    return total + array.reduce((acc, cur) => acc + cur, 0);
  }, 0);
  return 20 * result;
};

// function stairsIn20(s){
//    var arr = [].concat(...s);
//    console.log(arr);
//    var newArr = [].concat(...arr);
//    console.log(newArr);
//    console.log('--------------');
//    return newArr.reduce((a, b) => a+b)*20
// }

module.exports = stairsIn20;
