// const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';

// const greet = (name, owner) => {
//   const responses = {
//     true: "Hello boss",
//     false: 'Hello guest'
//   };
//   return responses[name === owner];
// };

// const greet = (name, owner) => {
//   const responses = [
//     'Hello guest',
//     'Hello boss'
//   ];
//   return responses[+(name === owner)];
// };

// const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

const greet = (name, owner) => {
  switch (name) {
    case owner:
      return 'Hello boss';
    default:
      return 'Hello guest';
  }
};
