let whiteQueen = [0, 4];
let blackQueen = [1, 4];
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
// console.log(generatedBoard);


// IF WE DONT KNOW whiteQueen or blackQueen array
const queenThreat = function() {
  let queens = [];
  for (let i = 0; i < generatedBoard.length; i++) {
    for (let k = 0; k < generatedBoard.length; k++) {
      if (generatedBoard[i][k] === 1) {
        queens.push([i,k]);
      }
    }
  }
  let q1 = queens[0]; let q2 = queens[1]; let checkerLine = 0; let checkerRow = 0;
  for (let i = 0; i < board.length; i++) {
    checkerLine += generatedBoard[q1[0]][i]; checkerRow += generatedBoard[i][q1[1]];
  }
  if (checkerLine === 2) {
    return true;
  }
  if (checkerRow === 2) {
    return true;
  }
  if (q1[0] + q1[1] ===  q2[0] + q2[1] || q1[0] - q1[1] ===  q2[0] - q2[1]) {
    return true;
  } else {
    return false;
  }
};



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

