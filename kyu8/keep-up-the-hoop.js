// const hoopCount = n => n >= 10 ?  "Great, now move on to tricks" : "Keep at it until you get it";

// const hoopCount = n => {
//   if (n >= 10) {
//     return "Great, now move on to tricks";
//   };
//   return "Keep at it until you get it";
// };

// const hoopCount = n => {
//   switch(true) {
//     case n >= 10:
//       return "Great, now move on to tricks";
//     default:
//       return "Keep at it until you get it";
//   };
// }

const hoopCount = n => {
  return {
    true: "Great, now move on to tricks",
    false: "Keep at it until you get it"
  }[n > 9];
};
