const getGrade = (...args) => {
  const mean = [...args].reduce((acc, cur) => acc + cur, 0) / [...args].length;

  switch (true) {
    case mean >= 90:
      return 'A';
    case mean >= 80:
      return 'B';
    case mean >= 70:
      return 'C';
    case mean >= 60:
      return 'D';
    default:
      return 'F';
  };
};

module.exports = getGrade;
