const bmi = (w,h) => {
  const body = w / Math.pow(h, 2);
  switch(true) {
    case body < 18.5:
      return 'Underweight';
    case body < 25:
      return 'Normal';
    case (body < 30):
      return "Overweight";
    default:
      return 'Obese';
  };
};

// const bmi = (w,h,bmi=w/h/h) => bmi <= 18.5 ? 'Underweight' :
//                                 bmi <= 25 ? 'Normal' :
//                                 bmi <= 30 ? 'Overweight' : 'Obese';

console.log(bmi(80, 1.8));
