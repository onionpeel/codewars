// const points = games => {
//   return games.reduce((acc, cur) => {
//     let result;
//     let team1 = +cur.substring(0,1);
//     let team2 = +cur.substring(2);
//     if (team1 > team2) {
//       result = 3;
//     } else if (team2 > team1){
//       result = 0;
//     } else {
//       result = 1;
//     };
//     return acc + result;
//   }, 0);
// };

const points = games => games.reduce((acc, cur) => acc += cur[0] > cur[2] ? 3 : cur[0] < cur[2] ? 0 : 1, 0);
