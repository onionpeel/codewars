// const squareArea = a => {
//   let circumference = a * (360 / 90);
//   let radius = circumference / (2 * Math.PI);
//   let area = radius * radius;
//   return area.toFixed(2);
// };

// const squareArea = a => {
//   let circumference =  (a * (360 / 90));
//   return circumference;
// };

// function squareArea(A){
//   var circum = 4 * A;
//   var radius = circum / (2 * Math.PI);
//   var area = Math.pow(radius, 2);
//   return Math.round(area*100)/100
// }

const squareArea = a => {
  const circumference = 4 * a;
  const radius = circumference / (2 * Math.PI);
  const area = Math.pow(radius, 2);
  return Math.round(area * 100)/100;
};

console.log(squareArea(2));
