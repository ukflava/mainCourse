function merge(concat1,concat2) {
  let newarray = concat1.concat(concat2);
  return newarray.sort();
}
//   console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
// console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
// console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);