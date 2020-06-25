// const quarterOf = month => (0 < month && month< 4) ? 1 :
//   (3 < month && month < 7) ? 2 :
//   (6 < month && month < 10) ? 3 : 4;


const quarterOf = m => m/3;

module.exports = quarterOf;

// const quarterOf = month => month === ("January" || "February" || "March") ? 1 :
//     ("April" || "May" || "June") ? 2 :
//     ("July" || "August" || "September") ? 3 : 4;
