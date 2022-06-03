const checkAir = function(samples, threshold) {
  let dirty = 0;
  let total = samples.length;
  for (let dirt of samples) {

    if (dirt === "dirty") {
      dirty += 1;
    }
  }

  let result = dirty / total;
  if (result >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'dirty', 'clean'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));