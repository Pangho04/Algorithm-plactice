/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const target = image[sr][sc];

  if (image[sr][sc] === color) {
    return image;
  }

  applyFill(image, sr, sc, color, target);

  function applyFill(image, sr, sc, color, originCell) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc > image[0].length) {
      return;
    } else if (image[sr][sc] !== originCell) {
      return;
    }

    image[sr][sc] = color;

    applyFill(image, sr + 1, sc, color, originCell);
    applyFill(image, sr - 1, sc, color, originCell);
    applyFill(image, sr, sc + 1, color, originCell);
    applyFill(image, sr, sc - 1, color, originCell);
  }

  return image;
};