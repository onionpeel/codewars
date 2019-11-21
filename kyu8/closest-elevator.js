// const elevator = (left, right, call) => {
//   const distanceLeft = Math.abs(call - left);
//   const distanceRight = Math.abs(call - right);
//
//   return distanceLeft === distanceRight ? 'right' :
//             distanceLeft < distanceRight ? 'left' :
//             'right';
// };

const elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
