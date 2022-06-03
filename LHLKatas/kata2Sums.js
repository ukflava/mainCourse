const conditionalSum = function(values, condition) {
  let odd = 0;
  let even = 0;
  if (condition === "odd") {
    for (let value of values) {
      (value % 2 !== 0) ? (odd = odd + value) : 0;
    }
    return odd;
  }
  if (condition === "even") {
    for (let value of values) {
      (value % 2 === 0) ? (even = even + value) : 0;
    }
    return even;
  }
};
// const conditionalSum = function(values, condition) {
//     let odd = 0;
//     let even = 0;
//     if (condition == "odd"){
//         for (let i=0; i<values.length; i++) {
//         if (values[i] % 2 !== 0) {odd = odd + values[i]
//         }
//     //     else if (values[i] %2 === 0) { even = even + values[i];
//         } return odd
//     }
//     else if (condition == "even") {
//         for (let i=0; i<values.length; i++) {
//             if (values[i] % 2 === 0) {even = even + values[i]
//             }
//         } return even
//     // } else {return console.log("game over")

//     }
// }

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));