/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (edges.length <= 0) {
    return [0];
  }

  const depth = Array(n).fill(0);
  const link = Array.from({ length: n }, () => []);

  for (const [start, end] of edges) {
    link[start].push(end);
    link[end].push(start);
    depth[start]++;
    depth[end]++;
  }

  let ends = [];

  for (let i = 0; i < depth.length; i++) {
    if (depth[i] === 1) {
      ends.push(i);
    }
  }

  while (n > 2) {
    const newEnds = [];
    n = n - ends.length;

    for (let end of ends) {
      const endNode = link[end].pop();

      link[endNode].splice(link[endNode].indexOf(end), 1);

      if (link[endNode].length === 1) {
        newEnds.push(endNode);
      }
    }

    ends = newEnds;
  }

  return ends;
};