// let rangearray = [];
// function range(start, stop, step){
// while (start < stop)
// { let onestep = start + step;
//   rangearray.push(onestep);
// start++;
// }
// }
// range(0, 15, 3);
// console.log(rangearray);

function range(start, stop, step) {
  if (typeof stop === 'undefined') {
    stop = start;
    start = 0;
  }

  if (typeof step === 'undefined') {
    step = 0;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  let result = [];
  for (let i = start; step > 0 ? i <= stop : i => stop; i += step) {
    result.push(i);
  }

  return result;
}
console.log(range(0, 8, 2));