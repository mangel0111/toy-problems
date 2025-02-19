// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

var startMatrixOptions = {
  0: 0,
  1: 0,
  2: 0,
  3: 3,
  4: 3,
  5: 3,
  6: 6,
  7: 6,
  8: 6,
};

const isAValidLine = (line) => {
  let cellKey = {};
  for (let index = 0; index < 9; index++) {
    const cell = line[index];
    if (cell !== ".") {
      if (cellKey[cell]) {
        return false;
      }
      cellKey[cell] = true;
    }
  }
  return true;
};

const validateLines = (board) => {
  for (let yIndex = 0; yIndex < 9; yIndex++) {
    const line = board[yIndex];
    if (!isAValidLine(line)) {
      return false;
    }
  }
  return true;
};
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Validate Horizontal
  if (!validateLines(board)) {
    return false;
  }
  //Validate Vertical
  let reverseBoard = [];
  for (let yIndex = 0; yIndex < 9; yIndex++) {
    const line = board[yIndex];
    for (let xIndex = 0; xIndex < 9; xIndex++) {
      const cell = line[xIndex];
      if (!reverseBoard[xIndex]) {
        reverseBoard[xIndex] = [];
      }
      reverseBoard[xIndex].push(cell);
    }
  }
  if (!validateLines(reverseBoard)) {
    return false;
  }
  //Validate 3x3
  const matrixBoard = [];
  for (let index = 0; index < 9; index++) {
    const startMatrix = startMatrixOptions[index];
    for (let xIndex = startMatrix; xIndex < startMatrix + 3; xIndex++) {
      const line = board[xIndex];
      if (!matrixBoard[index]) {
        matrixBoard[index] = [];
      }
      matrixBoard[index].push(
        ...line.slice((index - startMatrix) * 3, (index - startMatrix) * 3 + 3)
      );
    }
  }
  return validateLines(matrixBoard);
};

const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const board2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(board1, isValidSudoku(board1));
console.log(board2, isValidSudoku(board2));
