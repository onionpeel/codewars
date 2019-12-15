const getAverage = marks => Math.floor(marks.reduce((acc, cur) => acc + cur, 0) / marks.length);

module.exports = getAverage;
