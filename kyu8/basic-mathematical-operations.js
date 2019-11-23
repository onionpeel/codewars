// const basicOp = (operation, value1, value2) => eval(String(value1) + operation + String(value2));

// const basicOp = (operation, value1, value2) => {
//   let result = value1 operation value2;
//   return result;
// };
// console.log(basicOp("+", 1, 2));

// console.log(eval(String(3) + "+" + String(4)));
// console.log(String(4))


// const basicOp = (operation, value1, value2) => {
//   switch(operation) {
//     case "+":
//       return value1 + value2;
//   };
// };

// const basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

const basicOp = (operation, value1, value2) => {
  let cases = {
    "+": value1 + value2,
    "-": value1 - value2
  };

  return cases[operation];
};

console.log(basicOp("+", 1, 2))
