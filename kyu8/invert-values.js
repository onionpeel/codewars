// const invert = array => array.length > 0 ? array.map(val => -val) : [];

// const invert = array => array.map(val => -val);

const invert = array => array.map(val => val && -val);
