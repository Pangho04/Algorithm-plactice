function exist(board: string[][], word: string): boolean {
  if (word.length === 0) {
    return false;
  }

  const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));

  function isExist(row, col, index) {
    if (index === word.length) {
      return true;
    }

    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col] || board[row][col] !== word[index]) {
      return false;
    }

    visited[row][col] = true;

    const result = isExist(row + 1, col, index + 1) ||
      isExist(row - 1, col, index + 1) ||
      isExist(row, col + 1, index + 1) ||
      isExist(row, col - 1, index + 1);

    visited[row][col] = false;

    return result;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (isExist(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};