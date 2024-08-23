/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const allPointInfo = [];
  const result = [];
  let distances = [];

  for (const point of points) {
    const pointInfo = {
      distance: getDistance(point),
      point: point,
    }

    allPointInfo.push(pointInfo);
    distances.push(getDistance(point));
  }

  distances = distances.sort((a, b) => a - b).slice(0, k);

  for (const pointInfo of allPointInfo) {
    if (distances.includes(pointInfo.distance)) {
      result.push(pointInfo.point);
    }
  }

  function getDistance([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
  }

  return result;
};