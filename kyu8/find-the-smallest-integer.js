// const SmallestIntegerFinder = array => Math.min(...array);

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

module.exports = new SmallestIntegerFinder().findSmallestInt;

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min.apply(null, args);
//   }
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min.apply(Math, args)
//   }
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let ordered = args.sort((a,b) => a - b);
//     return args[0];
//   }
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a,b) => a - b)[0];
//   }
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.reduce((acc, cur) => acc < cur ? acc : cur);
//   }
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let lowest;
//     for (let i in args) {
//       if (i == 0) {
//         lowest = args[i];
//       } else {
//         if (lowest >= args[i]) {
//           lowest = args[i];
//         };
//       };
//     };
//     return lowest;
//   }
// }
