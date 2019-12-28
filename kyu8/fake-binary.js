// const fakeBin = str => [...str].map(num => num < 5 ? 0 : 1).join('');

const fakeBin = str => str.replace(/\d/g, d => d < 5 ? 0 : 1);

module.exports = fakeBin;
