/**
 * @param {character[][]} grid
 * @return {number}
 */


var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;

        getIsland(grid, i, j);
      }
    }
  }

  return count;
};

function getIsland(map, i, j) {
  if (i < 0 || i >= map.length || j < 0 ||j >= map[i].length || map[i][j] === "0") {
    return;
  }

  map[i][j] = "0";

  getIsland(map, i - 1, j);
  getIsland(map, i + 1, j);
  getIsland(map, i, j - 1);
  getIsland(map, i, j + 1);
}