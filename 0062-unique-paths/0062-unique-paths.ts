function uniquePaths(m: number, n: number): number {
  let row: number[] = Array(n).fill(1);
  const col = 1;

  for (let i = 1; i < m; i++) {
    let currentCol = col;

    for (let j = 1; j < n; j++){
      currentCol = currentCol + row[j];
      row[j] = currentCol;
    }
  }


  return row[row.length - 1];
};