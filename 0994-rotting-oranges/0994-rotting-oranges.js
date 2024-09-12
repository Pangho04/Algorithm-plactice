/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function (grid) {
  const queue = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    let size = queue.length;
    let isChanged = false;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();

      for (let [nRow, nCol] of directions) {
        let nextRow = row + nRow;
        let nextCol = col + nCol;

        if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) {
          continue;
        } else if (grid[nextRow][nextCol] === 1) {
          isChanged = true;

          grid[nextRow][nextCol] = 2;

          queue.push([nextRow, nextCol]);
        }
      }
    }

    if (isChanged) {
      count ++;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return count;
};
