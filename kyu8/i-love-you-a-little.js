// const howMuchILoveYou = nbPetals => {
//   switch(nbPetals % 6) {
//     case 1:
//       return 'I love you';
//     case 2:
//       return "a little";
//     case 3:
//       return 'a lot';
//     case 4:
//       return 'passionately';
//     case 5:
//       return 'madly';
//     case 0:
//       return 'not at all';
//   };
// };

// 1-6 ==> string

// I love you
// a little
// a lot
// passionately
// madly
// not at all

const response =['I love you',
'a little',
'a lot',
'passionately',
'madly',
'not at all'];

// const howMuchILoveYou = (n, arr) => console.log(arr[(n % 6) - 1]);
// howMuchILoveYou(1, response);

const howMuchILoveYou = (n, arr) => arr[(n-1) % arr.length];
console.log(howMuchILoveYou(1,response));
