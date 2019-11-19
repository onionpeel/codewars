const finalGrade = (exams, projects) => {
  switch(true) {
    case (exams > 90 || projects > 10):
      return 100;
    case (exams > 75 && projects > 4):
      return 90;
    case (xams > 50 && projects > 1 ? 75):
      return 75;
    default return 0
  };
};

// const finalGrade = (exams, projects) => exams > 90 || projects > 10 ? 100 :
//   exams > 75 && projects > 4 ? 90 :
//   exams > 50 && projects > 1 ? 75 :
//   0;

console.log(finalGrade(95, 11));

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
