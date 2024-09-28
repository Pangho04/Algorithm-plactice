function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0){
    return [];
  }

  const isVisited: boolean[][] = Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(false));
  const direction = [ [0, 1], [1, 0], [0, -1], [-1, 0]];
  const result: number[] = [];
  let row: number = 0;
  let col: number = 0;
  let currentDir: number = 0;

  for(let i = 0; i < matrix.length * matrix[0].length; i++) {
    result.push(matrix[row][col]);
    isVisited[row][col] = true;

    const nextRow = row + direction[currentDir][0];
    const nextCol = col + direction[currentDir][1];

    if (nextRow < 0 || nextCol < 0 || nextRow >= matrix.length || nextCol >= matrix[0].length || isVisited[nextRow][nextCol] === true) {
      currentDir = (currentDir + 1) % 4;
      row = row + direction[currentDir][0];
      col = col + direction[currentDir][1];
    } else {
      row = nextRow;
      col = nextCol;
    }
  }  

  return result;
}

