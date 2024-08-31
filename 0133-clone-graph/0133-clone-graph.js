/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return;
  }

  const visited = new Map();

  function getClone(origin) {
    if (!origin) {
      return;
    }

    if (visited.has(origin)) {
      return visited.get(origin);
    }

    const clone = new _Node(origin.val);

    visited.set(origin, clone);

    origin.neighbors.forEach((neighbor) =>
      clone.neighbors.push(getClone(neighbor))
    )

    return clone;
  }

  return getClone(node);
};