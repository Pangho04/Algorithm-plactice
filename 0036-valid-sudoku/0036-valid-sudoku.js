/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const visited = Array(board.length).fill(null).map(() => (Array(board[0].length).fill(false)));
  let result;

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
      const rowCheck = checkRow(rowIndex, colIndex, visited, board);
      const colCheck = checkCol(rowIndex, colIndex, visited, board);
      const boardCheck = checkBoard(rowIndex, colIndex, visited, board);

      visited[rowIndex][colIndex] = true;

      result = rowCheck && colCheck && boardCheck;

      if (!result) {
        return false;
      }
    }
  }

   return true;
};

function checkRow(row, col, visited, board) {
  if (visited[row][col]|| board[row][col] === ".") {
    return true;
  }

  for (let i = 0; i < board[0].length; i++) {
    if (i === col) {
      continue;
    }

    if (board[row][i] === board[row][col]) {
      return false;
    }
  }

  return true;
};

function checkCol(row, col, visited, board) {
  if (visited[row][col] || board[row][col] === ".") {
    return true;
  }

  for (let i = 0; i < board.length; i++) {
    if (i === row) {
      continue;
    }

    if (board[i][col] === board[row][col]) {
      return false;
    }
  }

  return true;
}

function checkBoard(row, col, visited, board) {
  if (visited[row][col] || board[row][col] === ".") {
    return true;
  }

  const boardRow = Math.floor(row / 3) * 3;
  const boardCol = Math.floor(col / 3) * 3;

  for (let i = boardRow; i < boardRow + 3; i++) {
    for (let j = boardCol; j < boardCol + 3; j++) {
      if (i === row && j === col) {
        continue;
      }

      if (board[i][j] && board[i][j] === board[row][col]) {
        return false;
      }
    }
  }

  return true;
}