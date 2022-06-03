// const sumLargestNumbers = function(data) {
//     let number = (a,b) => (a < b) ? 1 : (a > b) ? -1 : 0;
//     console.log(data[number])}
//     for (let i = 0; i < data.length; i++)
// {if
//     console.log(data[i])}
// Put your solution here
//   };

const sumLargestNumbers = (data) => {
  let high = 0;
  let next = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > high) {
      next = high;
      high = data[i];
    } else if (data[i] > next) {
      next = data[i];
    } else {
      continue;
    }
  }
  return high + next;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));