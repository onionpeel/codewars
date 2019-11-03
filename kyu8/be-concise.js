const describeAge = age => {
  return (age < 13 ? "You're a(n) kid" :
            age < 18 ? "You're a(n) teenager" :
            age < 65 ? "You're a(n) adult" :
            "You're a(n) elderly");
};

// console.log(describeAge(12));

let funLength = func => {
  return func.toString().replace(/\s/g, '').split('').length;
};

console.log(funLength(arr));
