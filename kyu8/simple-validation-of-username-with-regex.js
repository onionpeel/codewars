// const validateUsr = username => {
//   const regex = /[a-z_]|\d/;
//   const valid = [...username].filter(char => char.match(regex)).join('');
//   if (valid === username) {
//     return valid.length > 3 && valid.length < 17 ? true : false;
//   } else return false;
// };

const validateUsr = username => /^[0-9a-z_]{4,16}$/.test(username);

console.log(validateUsr("abbbb"));
