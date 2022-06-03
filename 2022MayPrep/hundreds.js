// let howManyHundreds = function (numberdd) {
//   var hundreds = numberdd / 100
// return(Math.floor(hundreds));


// }
// console.log(howManyHundreds(884511))
// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

let calculateRectangleArea = function(length, width) {
  if (length < 0 || width < 0) {
    console.log(undefined);
  } else {
    return length * width;
  }

};
let calculateTriangleArea = function(base, height) {
  let rtiangle = base * height;
  if (base < 0 || height < 0) {
    console.log(undefined);
  } else {
    return rtiangle / 2;
  }
};

let calculateCircleArea = function(radius) {
  let circle = radius * radius;
  if (radius < 0) {
    console.log(undefined);
  } else  {
    return Math.PI * circle;
  }
};
// console.log(calculateRectangleArea(10, 5));     // should print 50
  // console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
  // console.log(calculateRectangleArea(10, -5));    // should print undefined
  
// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined
  
// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined