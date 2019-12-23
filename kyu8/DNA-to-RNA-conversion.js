// const dnaToRna = dna => dna.replace(/T/g, 'U');

// const dnaToRna = dna => {
//   let dnaArray = [...dna];
//   let result = [];
//   for (let i = 0; i < dna.length; i++) {
//     if (dnaArray[i] !== 'T') {
//       result.push(dnaArray[i]);
//     } else {
//       result.push('U');
//     };
//   };
//   return result.join('');
// };

// const dnaToRna = dna => {
//   return [...dna].map(char => char !== 'T' ? char : 'U').join('');
// };

const dnaArray = dna => dna.split('T').join('U');

module.exports = dnaToRna;
