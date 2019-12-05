// const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide';

// const mouthSize = animal => {
//   const response = {
//     true: 'small',
//     false: 'wide'
//   };
//   return response[animal.toLowerCase() === 'alligator'];
// };

const mouthSize = animal => ['wide', 'small'][Number(animal.toLowerCase() === 'alligator')]
