// const enough = (cap, on, wait) => (cap - on - wait >= 0) ?
//     `0, He can fit all ${wait} passengers` :
//     `${cap - on - wait}, He can't fit ${cap - on - wait} out of 50 waiting`;
//
//
// enough(10, 5, 5);
// // 0, He can fit all 5 passengers
// enough(100, 60, 50);
// // 10, He can't fit 10 out of 50 waiting

// const enough = (cap, on, wait) => (cap - on - wait >= 0) ? 0 : Math.abs(cap - on - wait);

const enough = (cap, on, wait) => Math.max(on + wait - cap, 0);
