let whiteQueen = [0, 4];
let blackQueen = [2, 6];
let board = [];

let generateBoard = function(a,b) {
  for (let i = 0; i < 8; i++) {
    board[i] = []; for (let k = 0; k < 8; k++) {
      board[i][k] = 0;
    }
  }
  board[a[0]].splice(a[1],1,1); board[b[0]].splice(b[1],1,1);
  return board;
};
let generatedBoard = generateBoard(whiteQueen, blackQueen);

const queenThreat = function() {
  let checkerLine = 0; let checkerRow = 0;
  // let checkerDiag = 0;
  //  board.reduce(function (a,b) { return }, 0)
  for (let i = 0; i < board.length; i++) {
    checkerLine += board[whiteQueen[0]][i]; checkerRow += board[i][whiteQueen[1]];
  }
  console.log(checkerRow);
  if (checkerLine === 2) {
    return true;
  }
  if (checkerRow === 2) {
    return true;
  }
  if (whiteQueen[0] + whiteQueen[1] ===  blackQueen[0] + blackQueen[1] || whiteQueen[0] - whiteQueen[1] ===  blackQueen[0] - blackQueen[1]) {
    return true;
  } else {
    return false;
  }
  // do {checkerDiag += whiteQueen[0][1]}
  // while (board[whiteQueen[i][i]] != [0,0])

  //  || board[whiteQueen[i][k]] != [7,7] {
  // checkerDiag += whiteQueen[k][k];}
};
// while (board[whiteQueen[0]] >=0 || board[whiteQueen[1]] >= 0){

// }

// for(let k = 8; k >= 8; k--) {
// checkerDiag += board[i][i]
// console.log(checkerDiag)}
  
  
// else {return false}



// }





// console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false

