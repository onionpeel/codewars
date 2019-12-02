// const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0;

const howManyLightsabersDoYouOwn = name => [0, 18][+(name === 'Zach')];

// const howManyLightsabersDoYouOwn = name => {
//   const response = {
//     true: 18,
//     false: 0
//   };
//   return response[name === 'Zach'];
// };

// const howManyLightsabersDoYouOwn = name => {
//   switch (name) {
//     case 'Zach':
//       return 18;
//     default:
//       return 0;
//   };
// };
