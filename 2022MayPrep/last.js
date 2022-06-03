let indexArray = [];
let numberz;

function lastIndexOf(indexArray, numberz) {
  for (let i = indexArray.length; i >= 0; i--) {
    let numbercheck = (indexArray[i] == numberz);
    if (numbercheck == true) {
      console.log([i]);
      return Number(i);
    } else if (indexArray == false) {
      return Number(-1);
    } else if (i == 0 && numbercheck != true) {
      return Number(-1);
    }
  }
}


// for (let i = 0; i < indexArray.length; i++) {
//   if (number ===  indexArray[i])
//   {console.log("found")};
// for (let arrs of indexArray) {if (numberz == arrs) {console.log(indexArray[])}



// if (number !== indexArray) { return [-1]}



// indexArray.forEach(function(check){


// })


lastIndexOf([4, 6, 77, 7, 7, 3, 7, 3, 98, 5], 3);
lastIndexOf([0, 1, 4, 1, 2 ], 3);
lastIndexOf([ 5, 5, 5 ], 5);
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);