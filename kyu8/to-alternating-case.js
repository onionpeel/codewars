// String.prototype.toAlternatingCase = function() {
//   const arr = [...this];
//   const newArr = arr.map(character => {
//     return !isNaN(character) ? character :
//       character.toUpperCase() === character ? character.toLowerCase() :
//       character.toUpperCase();
//   });
//   return newArr.join('');
// };

// const toAlternatingCase = str => {
//   const arr = [...str];
//   const newArr = arr.map(character => {
//     return !isNaN(character) ? character :
//       character.toUpperCase() === character ? character.toLowerCase() :
//       character.toUpperCase();
//   });
//   return newArr.join('');
// };

// console.log(5.toUpperCase());
// console.log('5'.toUpperCase());

const toAlternatingCase = str => {
  return str.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join();
};

console.log(toAlternatingCase('HeLlO5'));

// 1.  map string
// 2.  callback function
// 3.  if !isNan(), then return character
// 4.  if character.toUpperCase === character, then return character.toLowerCase
// 5.  else return character.toUpperCase();
