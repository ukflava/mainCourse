const binaryArrayToNumber = arr => {
  return parseInt((arr.join("")), 2);
};

console.log(binaryArrayToNumber([1,0,1,1]));


// Testing: [1, 0, 1, 1] ==> 11
