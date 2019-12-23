const isDivisible = (n,x,y) => n % x === 0 && n % y === 0 ? true : false;

module.exports = isDivisible;

// const isDivisible = (n,x,y) => !(n%x||n%y);

// const isDivisible = (n, ...dividers) => dividers.every(divider => n % divider === 0);
