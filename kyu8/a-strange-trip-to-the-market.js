// const isLockNessMonster = s => {
//   const regexOne = RegExp('tree fiddy');
//   const regexTwo = RegExp('3.50');
//   return (regexOne.test(s) || regexTwo.test(s));
// };

// const isLockNessMonster = s => {
//   return (s.includes('tree fiddy') || s.includes('3.50'));
// };

const isLockNessMonster = s => {
  return /tree fiddy|3.50/.test(s);
};

console.log(isLockNessMonster("I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them"));
