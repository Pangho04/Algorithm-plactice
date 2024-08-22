/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let queue = [];
    let dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                
                queue.push([i, j]);
            }
        }
    }

    while (queue.length > 0) {
        let [x, y] = queue.shift();

        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;

            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                if (dist[newX][newY] > dist[x][y] + 1) {
                    dist[newX][newY] = dist[x][y] + 1;

                    queue.push([newX, newY]);
                }
            }
        }
    }

    return dist;
};