/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const stairs = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }

  return stairs[n - 1];
};